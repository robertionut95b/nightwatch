import { getSession } from 'next-auth/client';
import { GetServerSideProps } from "next";
import Layout from "../../components/layout/layout";
import SignInForm from "../../components/auth/SignInForm";

export default function SingIn() {

    return (
        <Layout home={false} >
            <SignInForm />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const ses = await getSession(context);
    if (ses) return { redirect: { destination: "/", permanent: false } }
    return {
        props: {
            session: ses,
        },
    }
}