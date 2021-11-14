import { GetServerSideProps } from 'next';
import { signout, getSession, useSession } from 'next-auth/client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function SignOut({ session }) {

    useEffect(() => { if (session) signout() }, [session?.user])

    return (
        <div className="container">
            <p>Successfully logged out</p>
            <Link href="/">Go back home</Link>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const ses = await getSession(context);
    if (!ses) return { redirect: { destination: "/", permanent: false } }
    return {
        props: {
            session: ses,
        },
    }
}