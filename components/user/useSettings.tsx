import isEqual from 'lodash.isequal';
import { useUpsertAppSettingsMutation } from 'generated/graphql';
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

  const [upsertAppSettings, { loading: updateLoading }] =
    useUpsertAppSettingsMutation({
      onCompleted: () => {
        setOriginalSettings(settings);
        setTheme(settings.darkMode ? 'dark' : 'light');
      },
    });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const appSession = session as AppSession;

    if (isEqual(originalSettings, settings)) {
      return;
    }

    Object.keys(settings).forEach((key) => {
      if (
        originalSettings[key as keyof ISettingsMapProps] !==
        settings[key as keyof ISettingsMapProps]
      ) {
        upsertAppSettings({
          variables: {
            create: {
              name: key,
              value: String(settings[key as keyof ISettingsMapProps]),
              User: {
                connect: {
                  email: appSession?.user?.email,
                },
              },
            },
            update: {
              value: {
                set: String(settings[key as keyof ISettingsMapProps]),
              },
            },
            where: {
              id:
                appSession?.userSettings?.filter((s) => s.name === key)[0]
                  ?.id || '',
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
      listType: usrSttgs.filter((s) => s.name === 'listType')[0]?.value,
      darkMode:
        usrSttgs.filter((s) => s.name === 'darkMode')[0]?.value === 'true',
      notifications:
        usrSttgs.filter((s) => s.name === 'notifications')[0]?.value === 'true',
      emailAlerts:
        usrSttgs.filter((s) => s.name === 'emailAlerts')[0]?.value === 'true',
      language: usrSttgs.filter((s) => s.name === 'language')[0]?.value,
    }));

    setOriginalSettings({
      listType: usrSttgs.filter((s) => s.name === 'listType')[0]?.value,
      darkMode:
        usrSttgs.filter((s) => s.name === 'darkMode')[0]?.value === 'true',
      notifications:
        usrSttgs.filter((s) => s.name === 'notifications')[0]?.value === 'true',
      emailAlerts:
        usrSttgs.filter((s) => s.name === 'emailAlerts')[0]?.value === 'true',
      language: usrSttgs.filter((s) => s.name === 'language')[0]?.value,
    });
  }, [session]);

  return {
    loading: loading || updateLoading,
    settings,
    setSettings,
    onSubmitForm,
  };
};
