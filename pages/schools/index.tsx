import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allSchools, School } from 'contentlayer/generated'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import BaseLayout from 'components/layouts/BaseLayout'
import { NextPageWithLayout } from 'lib/utilityTypes'
import SchoolCard from 'components/SchoolCard'

export async function getStaticProps() {
  const schools = allSchools.sort((a, b) => a.title < b.title ? -1 : 1)

  return { props: { schools } }
}

interface ISchoolLandingProps { schools: School[] }

const SchoolLanding: NextPageWithLayout = (props) => {
  const { schools } = props as ISchoolLandingProps
  
  return (
    <div className="max-w-6xl py-16 mx-auto">
      <Head>
        <title>f(n): All Schools</title>
      </Head>

      <h1 className="mb-8 text-6xl">All <strong>Schools</strong></h1>
      <section className='School-section'>
        {schools.map((school, idx) => (
          <SchoolCard key={idx} {...school} />
        ))}
      </section>
    </div>
  )
}

SchoolLanding.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>{ page }</BaseLayout>
  )
}

export default SchoolLanding