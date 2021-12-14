import Layout from '../components/layout/layout';

export default function Error500() {
  return (
        <Layout home={false}>
            <h4>
                Internal Server Error
            </h4>
        </Layout>
  );
}