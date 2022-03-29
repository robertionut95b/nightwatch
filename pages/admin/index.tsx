import { GetServerSideProps } from 'next';
import Layout from '../../components/layout/layout';
import Head from 'next/head';
import { Role } from '@prisma/client';
import { getSession } from 'next-auth/client';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import {
  IMenuNavigationItem,
  MenuNavigationComponent,
} from '@components/nav/MenuNavigation';

const items: IMenuNavigationItem[] = [
  {
    href: '/admin/users',
    label: 'Users',
    icon: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    href: '/admin/series',
    label: 'Series',
    icon: (
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
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    href: '/admin/episodes',
    label: 'Episodes',
    icon: (
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
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    href: '/admin/movies',
    label: 'Movies',
    icon: (
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
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
        />
      </svg>
    ),
  },
  {
    href: '/admin/submissions',
    label: 'Submissions',
    icon: (
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    href: '/admin/comments',
    label: 'Comments',
    icon: (
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
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
  },
];

export default function AdminPage({
  session,
}: {
  session: AppSession;
}): JSX.Element {
  return (
    <>
      <Layout>
        <Head>
          <title>Admin - {process.env.APP_SITE_NAME}</title>
        </Head>
        <div className="flex flex-col gap-y-4">
          <div className="heading">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <div className="welcome-message mb-0 lg:mb-4">
            <p>
              Welcome to the admin dashboard,{' '}
              {session.user.email?.split('@')[0]}! Here you can manage your
              site&apos;s resources.
            </p>
          </div>
          <div className="main flex flex-col gap-y-4">
            <div className="resources grid grid-cols-1 gap-y-4 lg:grid-cols-4 lg:gap-8">
              <div className="menu-container-sidebar w-full rounded border border-gray-800 bg-white p-4 dark:bg-background-dark">
                <MenuNavigationComponent items={items} />
              </div>
              <div className="chart col-span-3 w-full rounded-lg border border-gray-800 p-4">
                <div className="header-chart">
                  <h2 className="mb-4 text-lg font-bold">Activity log</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sit amet tellus et dolor imperdiet tincidunt sit amet sit amet
                  justo. Ut risus nisl, fringilla vel malesuada ornare, faucibus
                  vel turpis. Aliquam pulvinar ipsum elit, ut sagittis mauris
                  varius eu. Quisque fermentum vel dui quis gravida. Mauris
                  tempor urna vitae dolor congue tristique. Suspendisse
                  efficitur maximus diam, consequat tempus massa placerat vel.
                  Vestibulum sed tincidunt metus. Aliquam vehicula ultricies
                  lectus id hendrerit. Nulla tempor sit amet mauris et volutpat.
                  Nullam id risus et justo mattis tincidunt. Aliquam orci arcu,
                  interdum eget ipsum vitae, placerat ultricies risus. Integer
                  ex mauris, tincidunt vel venenatis eu, venenatis ac quam.
                  Phasellus suscipit id lectus at interdum. Suspendisse euismod
                  mauris mattis erat posuere tempor. Aenean justo tellus,
                  tincidunt eget rhoncus eget, tincidunt ac justo. Fusce at
                  tincidunt ante. Nam ac lectus malesuada, euismod nulla eu,
                  vestibulum enim. Aenean malesuada, sem in aliquet maximus,
                  ipsum augue efficitur velit, et lacinia felis ex eget eros.
                  Vestibulum venenatis non leo vel lacinia. Etiam euismod, diam
                  id tempus auctor, velit metus mattis felis, et ullamcorper leo
                  ipsum ac nibh. Maecenas fringilla est nisi, vel dignissim
                  felis ultricies nec. Integer quam nunc, lacinia id euismod
                  non, convallis vel sapien. Suspendisse vel nulla in mi
                  pharetra auctor ac eu lorem. In molestie lorem eu neque porta
                  ultricies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ses = await getSession(ctx);
  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  return {
    props: {
      session: appSession,
    },
  };
};
