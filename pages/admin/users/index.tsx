import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Layout from '@components/layout/layout';
import DateComponent from '@components/utils/helpers/date';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import prisma from 'lib/PrismaClient/prisma';
import { User } from '@prisma/client';
import { useState } from 'react';
import UserForm from '@components/user/UserForm';

export default function UsersPage({ users }: { users: User[] }): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalChildren, setModalChildren] = useState<JSX.Element | null>(null);

  return (
    <Layout>
      <Head>
        <title>Users - {process.env.APP_SITE_NAME}</title>
      </Head>
      <article className="users">
        <h2 className="mb-4 text-xl font-bold">Submissions</h2>
        <div className="list">
          <div className="heading-options">
            <button
              className="btn-primary"
              onClick={() => {
                setModalTitle('View user');
                setModalChildren(<UserForm />);
                onOpen();
              }}
            >
              Add user
            </button>
          </div>
          <ShowIfElse if={users && users.length > 0} else={'No items to show'}>
            <div className="submission-table mt-4 overflow-x-auto">
              <Table
                variant="simple"
                className="rounded-lg border border-gray-200"
              >
                <Thead>
                  <Tr>
                    <Th className="dark:text-white">ID</Th>
                    <Th className="dark:text-white">Last name</Th>
                    <Th className="dark:text-white">First name</Th>
                    <Th className="dark:text-white">Username</Th>
                    <Th className="dark:text-white">Email</Th>
                    <Th className="dark:text-white">Role</Th>
                    <Th className="dark:text-white">Created</Th>
                    <Th className="dark:text-white">Updated</Th>
                    <Th className="dark:text-white">Options</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users?.map((user) => (
                    <Tr key={user.id}>
                      <Td>{user.id}</Td>
                      <Td>{user.lastName}</Td>
                      <Td>{user.firstName}</Td>
                      <Td>{user.username}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.role}</Td>
                      <Td>
                        <DateComponent dateString={user.createdAt.toString()} />
                      </Td>
                      <Td>
                        <DateComponent dateString={user.updatedAt.toString()} />
                      </Td>
                      <Td className="flex gap-x-3">
                        <button
                          onClick={() => {
                            setModalTitle('Update user');
                            setModalChildren(<UserForm user={user} />);
                            onOpen();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            setModalTitle('Delete user');
                            setModalChildren(
                              <div className="flex flex-col gap-y-6">
                                <span>
                                  Are you sure you want to delete this user?
                                </span>
                                <div className="flex justify-end gap-x-2">
                                  <button
                                    className="btn-primary-gray"
                                    onClick={onClose}
                                  >
                                    Cancel
                                  </button>
                                  <button className="btn btn-primary bg-primary">
                                    Delete
                                  </button>
                                </div>
                              </div>,
                            );
                            onOpen();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </div>
          </ShowIfElse>
        </div>
      </article>
      <>
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent className="bg-white dark:bg-background">
            <ModalHeader className="text-black dark:text-white">
              {modalTitle}
            </ModalHeader>
            <ModalCloseButton className="text-black dark:text-white" />
            <ModalBody className="text-black dark:text-white">
              {modalChildren}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);

  if (!ses) return { redirect: { destination: '/', permanent: false } };

  const users = await prisma.user.findMany({});

  return {
    props: {
      session: ses,
      users: JSON.parse(JSON.stringify(users)),
    },
  };
};
