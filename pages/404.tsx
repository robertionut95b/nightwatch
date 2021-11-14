import Link from 'next/link';
import Layout from '../components/layout/layout';

export default function Error404() {
    return (
        <Layout home={false}>
            <div className="404-wrapper flex flex-col justify-center mt-60">
                <h4 className='text-3xl font-bold text-center'>
                    Oops... this page was not found!
                </h4>
                <div className="redirect-home mt-16 text-center">
                    <Link href="/">Go back home</Link>
                </div>
            </div>
        </Layout>
    )
}