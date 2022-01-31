import isEqual from 'lodash.isequal';
import {
  useCreateManyAppSettingsMutation,
  useUpdateManyAppSettingsMutation,
} from 'generated/graphql';
import { useSession } from 'next-auth/client';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type ISettingsMapProps = {
  darkMode: boolean;
  listType: string;
  notifications: boolean;
  emailAlerts: boolean;
  language: string;
};

interface UseSettingsResult {
  loading: boolean;
  settings: ISettingsMapProps;
  setSettings: Dispatch<SetStateAction<ISettingsMapProps>>;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useSettings = (): UseSettingsResult => {
  const [session, loading] = useSession();

  const { setTheme } = useTheme();

  const [settings, setSettings] = useState<ISettingsMapProps>({
    darkMode: true,
    listType: 'grid',
    notifications: false,
    emailAlerts: false,
    language: 'en',
  });

  const [originalSettings, setOriginalSettings] = useState<ISettingsMapProps>({
    darkMode: true,
    listType: 'grid',
    notifications: false,
    emailAlerts: false,
    language: 'en',
  });

  const { darkMode, listType, notifications, emailAlerts, language } = settings;

  const [createManyAppSettingsMutation, { loading: createLoading }] =
    useCreateManyAppSettingsMutation();
  const [updateManyAppSettings, { loading: updateLoading }] =
    useUpdateManyAppSettingsMutation({
      onCompleted: () => {
        setOriginalSettings(settings);
        setTheme(settings.darkMode ? 'dark' : 'light');
      },
    });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const appSession = session as AppSession;

    if (isEqual(originalSettings, settings)) return;

    if (!appSession.userSettings) {
      createManyAppSettingsMutation({
        variables: {
          data: [
            {
              name: 'darkMode',
              value: String(darkMode),
              userId: appSession?.user?.id,
            },
            {
              name: 'listType',
              value: listType,
              userId: appSession?.user?.id,
            },
            {
              name: 'notifications',
              value: String(notifications),
              userId: appSession?.user?.id,
            },
            {
              name: 'emailAlerts',
              value: String(emailAlerts),
              userId: appSession?.user?.id,
            },
            {
              name: 'language',
              value: language,
              userId: appSession?.user?.id,
            },
          ],
          skipDuplicates: true,
        },
      });
    }

    Object.keys(settings).forEach((key) => {
      if (
        originalSettings[key as keyof ISettingsMapProps] !==
        settings[key as keyof ISettingsMapProps]
      ) {
        updateManyAppSettings({
          variables: {
            data: {
              value: {
                set: String(settings[key as keyof ISettingsMapProps]),
              },
            },
            where: {
              name: {
                equals: key,
              },
              userId: {
                equals: appSession?.user?.id,
              },
            },
          },
        });
      }
    });
  };

  useEffect(() => {
    const appSession = session as AppSession;
    const usrSttgs = appSession?.userSettings;
    if (!usrSttgs) return;

    setSettings((prevState) => ({
      ...prevState,
      listType: usrSttgs.filter((s) => s.name === 'listType')[0].value,
      darkMode:
        usrSttgs.filter((s) => s.name === 'darkMode')[0].value === 'true',
      notifications:
        usrSttgs.filter((s) => s.name === 'notifications')[0].value === 'true',
      emailAlerts:
        usrSttgs.filter((s) => s.name === 'emailAlerts')[0].value === 'true',
      language: usrSttgs.filter((s) => s.name === 'language')[0].value,
    }));

    setOriginalSettings({
      listType: usrSttgs.filter((s) => s.name === 'listType')[0].value,
      darkMode:
        usrSttgs.filter((s) => s.name === 'darkMode')[0].value === 'true',
      notifications:
        usrSttgs.filter((s) => s.name === 'notifications')[0].value === 'true',
      emailAlerts:
        usrSttgs.filter((s) => s.name === 'emailAlerts')[0].value === 'true',
      language: usrSttgs.filter((s) => s.name === 'language')[0].value,
    });
  }, [session]);

  return {
    loading: loading || createLoading || updateLoading,
    settings,
    setSettings,
    onSubmitForm,
  };
};
