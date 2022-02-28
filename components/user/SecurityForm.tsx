import { createStandaloneToast } from '@chakra-ui/react';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import { toastDefaults } from 'assets/constants/config';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { FormEvent, useCallback } from 'react';
import { useUpdateUserMutation } from '../../generated/graphql';

const SecurityForm = (): JSX.Element => {
  const [session, loading] = useSession();
  const toast = createStandaloneToast();
  const router = useRouter();

  const [updateUserMutation, { loading: updateLoading }] =
    useUpdateUserMutation({
      onCompleted: () => {
        router.reload();
      },
      onError: (err) => {
        let msg = 'There was an error updating your account';

        if (
          err.message.includes('Unique constraint') &&
          err.message.includes('email')
        ) {
          msg = 'Email is already in use';
        }

        toast({
          ...toastDefaults,
          title: 'Error',
          status: 'error',
          description: msg,
        });
      },
    });

  const submitChangeEmail = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      return (): void => {
        e.preventDefault();
        const { email } = e.target as typeof e.target & {
          email: { value: string };
        };

        if (email.value === session?.user?.email) {
          toast({
            title: 'Nothing to change',
            status: 'warning',
            ...toastDefaults,
          });
          return;
        }

        updateUserMutation({
          variables: {
            data: {
              email: {
                set: email.value,
              },
            },
            where: {
              email: session?.user?.email,
            },
          },
        });
      };
    },
    [session?.user?.email, toast, updateUserMutation],
  );

  if (loading) return <MinimalSpinner />;
  return (
    <section>
      <h4 className="text-xl font-bold tracking-wide">Email</h4>
      <p className="mb-2 dark:text-gray-200">
        This section allows the user to change the account&apos;s email address
      </p>
      <small className="mb-4 flex items-center font-semibold tracking-wide text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        This change is irreversible and cannot be undone!
      </small>
      <div className="form">
        <form
          className="mb-4 flex flex-col gap-y-2"
          onSubmit={(e) => submitChangeEmail(e)}
        >
          <label htmlFor="email">Email address*</label>
          <input
            className="rounded border bg-gray-100 py-1 px-2 text-black placeholder-gray-800 dark:bg-white"
            name="email"
            type="email"
            placeholder="johndoe@nightwatch.org"
            defaultValue={session?.user?.email || ''}
          />
          <p>
            A confirmation e-mail will be sent to your current address{' '}
            <i>({session?.user?.email})</i>
          </p>
          <div className="button-groups mt-8 flex justify-end gap-x-2">
            <button
              className="btn-primary bg-gray-200 font-semibold text-primary hover:bg-gray-400"
              type="reset"
            >
              Cancel
            </button>
            <button
              className="btn-primary bg-primary text-white disabled:bg-slate-700"
              type="submit"
              disabled={updateLoading}
            >
              <ShowIfElse if={updateLoading} else={'Save'}>
                <MinimalSpinner color={'white'} />
              </ShowIfElse>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SecurityForm;
