import Layout from '@components/layout/layout';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import { AskSubmission, Role } from '@prisma/client';
import prisma from 'lib/PrismaClient/prisma';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import DateComponent from '../../../components/utils/helpers/date';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  Select,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import ShowIf from '@components/utils/layout/showConditional/showIf';

type ObjectType = 'movie' | 'series' | 'episode' | string;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function AskAdminPortal({
  submissions,
  session,
}: {
  session: AppSession;
  submissions: AskSubmission[];
}): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedObject, setSelectedObject] = useState<
    ObjectType | undefined
  >();
  const [selectedSubmission, setSelectedSubmission] = useState<
    AskSubmission | undefined
  >();

  const renderFormByObjectType = (obj: ObjectType): JSX.Element => {
    if (obj === 'movie') {
      return (
        <>
          <p>Lorem Ipsum dolor imet amet</p>
        </>
      );
    } else if (obj === 'series') {
      return <></>;
    } else if (obj === 'episode') {
      return <></>;
    }
    return <></>;
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Head>
        <title>Submissions - {process.env.APP_SITE_NAME}</title>
      </Head>
      <article className="ask">
        <h2 className="mb-4 text-xl font-bold">Submissions</h2>
        <div className="list">
          <ShowIfElse
            if={submissions && submissions.length > 0}
            else={'No items to show. Enjoy a coffee! ☕'}
          >
            <div className="submission-table mt-4 overflow-x-auto">
              <Table
                variant="simple"
                className="rounded-lg border border-gray-200"
              >
                <TableCaption>
                  Assigned to: <b>{session?.user?.email?.split('@')[0]}</b>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th className="dark:text-white">ID</Th>
                    <Th className="dark:text-white">User</Th>
                    <Th className="dark:text-white">Url</Th>
                    <Th className="dark:text-white">Status</Th>
                    <Th className="dark:text-white">Reason</Th>
                    <Th className="dark:text-white">Created</Th>
                    <Th className="dark:text-white">Updated</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {submissions.map((submission) => (
                    <Tr
                      className="cursor-pointer"
                      key={submission.id}
                      onClick={() => {
                        setShowForm(!showForm);
                        setSelectedSubmission(submission);
                      }}
                    >
                      <Td>{submission.id}</Td>
                      <Td>{submission.userId}</Td>
                      <Td>
                        <Link href={submission.url}>Link</Link>
                      </Td>
                      <Td>{submission.status}</Td>
                      <Td>{submission.reason}</Td>
                      <Td>
                        <DateComponent
                          dateString={submission.createdAt.toString()}
                        />
                      </Td>
                      <Td>
                        <DateComponent
                          dateString={submission.updatedAt.toString()}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </div>
          </ShowIfElse>
        </div>
      </article>
      <ShowIf if={showForm}>
        <article className="edit-form mt-4">
          <Accordion allowToggle={false}>
            <AccordionItem>
              <h2 className="text-md font-semibold">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {capitalizeFirstLetter(
                      selectedSubmission?.reason.toLowerCase() || '',
                    )}{' '}
                    entry
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="flex flex-col gap-y-4">
                <Select
                  width={36}
                  placeholder="Select option"
                  onChange={(e) => setSelectedObject(e.target.value)}
                >
                  <option value="movie">Movie</option>
                  <option value="season">Series</option>
                  <option value="episode">Episode</option>
                </Select>
                <form className="flex flex-col gap-y-4" onSubmit={submitForm}>
                  {selectedObject && renderFormByObjectType(selectedObject)}
                  <button
                    className="btn-primary max-w-min bg-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </ShowIf>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  const submissions = await prisma.askSubmission.findMany({});

  return {
    props: {
      session: ses,
      submissions: JSON.parse(JSON.stringify(submissions)),
    },
  };
};
