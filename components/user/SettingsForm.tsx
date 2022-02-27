import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import { MinimalSpinner } from '../utils/layout/spinners/minimalSpinner';
import { useSettings } from './useSettings';

export const SettingsForm = (): JSX.Element => {
  const [, loading] = useSession();
  const {
    loading: loadingData,
    settings,
    setSettings,
    onSubmitForm,
  } = useSettings();
  const { darkMode, listType, notifications, emailAlerts, language } = settings;

  if (loading) return <MinimalSpinner />;

  return (
    <section className="text-black dark:text-white">
      <form className="flex flex-col gap-y-6" onSubmit={(e) => onSubmitForm(e)}>
        <article>
          <h4 className="font-bold text-xl tracking-wide">Account settings</h4>
          <p className="dark:text-gray-200">
            This section will contain various global settings used across the
            application
          </p>
        </article>
        <article>
          <h4 className="font-bold text-lg tracking-wide">Styling</h4>
          <p className="dark:text-gray-200 mb-4 text-base">
            Website&apos;s appearance and layout settings
          </p>
          <FormControl display="flex flex-col" alignItems="center">
            <Stack direction={'row'} mb="3" align={'center'}>
              <Switch
                id="theme"
                isChecked={darkMode}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    darkMode: e.target.checked,
                  })
                }
              />
              <FormLabel htmlFor="theme" mb="0">
                Dark mode
              </FormLabel>
            </Stack>
            <Stack direction={'column'} mb="3">
              <FormLabel htmlFor="listType" mb="0">
                Items listing layout
              </FormLabel>
              <RadioGroup
                id="listType"
                name="listType"
                onChange={(nextVal) =>
                  setSettings({ ...settings, listType: nextVal })
                }
                value={listType}
                defaultValue={listType}
              >
                <Stack direction="row">
                  <Radio value="list">List</Radio>
                  <Radio value="grid">Grid</Radio>
                </Stack>
              </RadioGroup>
            </Stack>
          </FormControl>
        </article>
        <article>
          <h4 className="font-bold text-lg tracking-wide">Notifications</h4>
          <p className="dark:text-gray-200 mb-4">
            Event based notifications to stay in sync with all updates
          </p>
          <FormControl display="flex flex-col" alignItems="center">
            <Stack direction={'row'} mb="3" align="center">
              <Switch
                id="notificationsAllow"
                isChecked={notifications}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: e.target.checked === true,
                  })
                }
              />
              <FormLabel htmlFor="notificationsAllow" mb="0">
                Application notifications
              </FormLabel>
            </Stack>
            <Stack direction={'row'} mb="3" align="center">
              <Switch
                id="emailAlerts"
                isChecked={emailAlerts}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    emailAlerts: e.target.checked === true,
                  })
                }
              />
              <FormLabel htmlFor="emailAlerts" mb="0">
                Email alerts
              </FormLabel>
            </Stack>
          </FormControl>
        </article>
        <article>
          <h4 className="font-bold text-lg tracking-wide">
            Locales and geolocation
          </h4>
          <p className="dark:text-gray-200 mb-4">
            Region based settings like app language and location
          </p>
          <FormControl display="flex flex-col" alignItems="center">
            <Stack direction={'row'} mb="3" align="center">
              <FormLabel htmlFor="language" mb="0">
                Language
              </FormLabel>
              <Select
                onChange={(e) =>
                  setSettings({ ...settings, language: e.target.value })
                }
                className="w-min"
                value={language}
                maxWidth={'150px'}
              >
                <option className="text-black" value="en">
                  English
                </option>
                <option className="text-black" value="fr">
                  French
                </option>
                <option className="text-black" value="es">
                  Spanish
                </option>
              </Select>
            </Stack>
          </FormControl>
        </article>
        <div className="button-group flex gap-x-2 self-end">
          <button
            className="btn-primary bg-gray-200 text-primary hover:bg-gray-400 font-semibold"
            type="reset"
          >
            Reset
          </button>
          <button
            className="btn-primary bg-primary text-white disabled:bg-slate-700"
            type="submit"
            disabled={loadingData}
          >
            {loadingData ? <MinimalSpinner color={'white'} /> : 'Save'}
          </button>
        </div>
      </form>
    </section>
  );
};
