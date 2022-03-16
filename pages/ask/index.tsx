import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import Layout from '@components/layout/layout';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import { GetServerSideProps } from 'next';

export default function Ask(): JSX.Element {
  const [imdbUrl, setImdbUrl] = useState<string>('');
  const [isURLError, setIsURLError] = useState<boolean>(false);
  const [urlErrorMsg, setUrlErrorMsg] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  const [session, loading] = useSession();

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const regex = /https:\/\/(?:.*\.|.*)imdb.com\/(?:t|T)itle(?:\?|\/)(..\d+)/i;

    if (!imdbUrl) {
      setIsURLError(true);
      setUrlErrorMsg('Please enter a valid IMDB url');
      return;
    }

    if (!regex.test(imdbUrl)) {
      setIsURLError(true);
      setUrlErrorMsg("Couldn't find a valid IMDB url");
      return;
    }

    setIsURLError(false);
  };

  return (
    <Layout>
      <Head>
        <title>Ask submission - {process.env.APP_SITE_NAME}</title>
      </Head>
      <ShowIfElse
        if={session}
        else={
          loading ? (
            <MinimalSpinner />
          ) : (
            <span className="text-lg">
              You must be logged in to submit a request
            </span>
          )
        }
      >
        <article className="ask flex flex-col gap-y-6">
          <div>
            <h2 className="text-xl font-bold">Request a resource</h2>
          </div>
          <form className="flex flex-col gap-y-4" onSubmit={submitForm}>
            <FormControl isInvalid={isURLError} isRequired>
              <FormLabel htmlFor="imdbUrl">
                {process.env.APP_SITE_NAME}/IMDB Url
              </FormLabel>
              <Input
                id="imdbUrl"
                type="text"
                value={imdbUrl}
                placeholder="https://imdb.com/title/tt1234567"
                onChange={(e) => setImdbUrl(e.target.value)}
              />
              <ShowIf if={isURLError}>
                <FormErrorMessage>{urlErrorMsg}</FormErrorMessage>
              </ShowIf>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="option">Reason</FormLabel>
              <Select
                id="option"
                placeholder="Select option"
                defaultValue={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                <option className="text-black" value="update">
                  Resource is outdated
                </option>
                <option className="text-black" value="create">
                  Resource is missing
                </option>
              </Select>
            </FormControl>
            <span className="text-sm">
              Your submission is going to be trated by one of our moderators as
              soon as possible.
            </span>
            <button className="btn-primary max-w-min bg-primary" type="submit">
              Submit
            </button>
          </form>
        </article>
      </ShowIfElse>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  const appSession = ses as AppSession;

  if (!appSession) return { redirect: { destination: '/', permanent: false } };

  return {
    props: {
      session: ses,
    },
  };
};
