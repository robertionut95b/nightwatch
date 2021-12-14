import Layout from '../../components/layout/layout';
export default function AuthError() {

  return (
        <Layout home={false} >
            <p> Unfortunately your login has failed. </p>
        </Layout>
  );
}