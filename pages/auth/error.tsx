import Layout from '../../components/layout/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

const errors: {
  Signin: string;
  OAuthSignin: string;
  OAuthCallback: string;
  OAuthCreateAccount: string;
  EmailCreateAccount: string;
  Callback: string;
  OAuthAccountNotLinked: string;
  EmailSignin: string;
  CredentialsSignin: string;
  default: string;
} = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
};

const AuthError = (): JSX.Element => {
  const { error } = useRouter().query;
  const errorMessage =
    error && (errors[error as keyof typeof errors] ?? errors.default);

  return (
    <Layout home={false}>
      <Head>
        <title>{`Authentication error - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <div className="notice flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-red-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <h4 className="mb-10 text-xl font-bold">Authentication error</h4>
        <h6 className="text-lg font-normal tracking-wide">{errorMessage}</h6>
      </div>
    </Layout>
  );
};

export default AuthError;
