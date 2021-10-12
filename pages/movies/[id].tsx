import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Screening({ screeningData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>Screening</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{screeningData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={screeningData.release} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
  }
}

export async function getStaticProps({ params }) {
  return {

  }
}
