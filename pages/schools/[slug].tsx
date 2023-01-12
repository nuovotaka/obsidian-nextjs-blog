import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { allSchools, School } from 'contentlayer/generated'
import { GetStaticProps } from 'next'
import { parseObsidianLinks } from 'lib/markdown'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import BaseLayout from 'components/layouts/BaseLayout'
import { NextPageWithLayout } from 'lib/utilityTypes'
import extractColors from 'extract-colors'
import { useContext, useEffect } from 'react'
import SchoolLayout, { SchoolContext } from 'components/layouts/SchoolLayout'

export async function getStaticPaths() {
  const paths = allSchools.map((school) => school.url)
  return {
    paths,
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async(context) => {
  const { slug } = context.params as IParams
  const school = allSchools.find((school) => school._raw.sourceFileName.includes(slug)) as School
  const schoolBody = parseObsidianLinks(school.body.raw)

  return {
    props: {
      school,
      schoolBody,
    },
  }
}

export type ExtractedColor = {
  area: number,
  red: number,
  blue: number,
  green: number,
  hex: string,
  saturation: number,
}

interface ISchoolProps { school: School, schoolBody: string }

const SchoolTemplate: NextPageWithLayout = (props) => {
  const { school, schoolBody } = props as ISchoolProps
  const { setValue } = useContext(SchoolContext)

  function luminance(color: ExtractedColor ) {
    return 0.2126*color.red + 0.7152*color.green + 0.0722*color.blue
  }
  

  useEffect(() => {
    async function loadColors() {
      if (!(typeof window === 'undefined')) {
        const c = (await extractColors('/assets/'+school.coverImg))
          .sort((a: ExtractedColor, b: ExtractedColor) => luminance(b) - luminance(a) ) as ExtractedColor[]

        setValue({ 
          bgColor: {
            start: c[0].hex,
            end: c[3].hex,
          },
          squareColor: c[2].hex,
        })
      }
    }

    loadColors()
  }, [school.coverImg, setValue])
  
  return (
    <>
      <Head>
        <title>{school.title} | Nuovotaka</title>
      </Head>
      <article className="max-w-6xl py-16 mx-auto">
        <section className="grid items-center grid-cols-5 pb-12 mb-10 border-b">
          <div className='col-span-2 cl-book-cover'>
            <div className='block mx-auto overflow-visible skew-y-3 w-fit' style={{background: 'radial-gradient(closest-side at 50% 99%, hsla(220deg, 20%, 4%, .2) 30%, transparent)'}}>
              <Image src={'/assets/' + school.coverImg}
                width="350"
                height="350"
                layout='intrinsic'
                objectFit='contain'
                alt={school.title + ' cover'}
              />
            </div>
          </div>
          <div className="col-span-3">
            <h1 className="mb-1 text-4xl">{school.title}</h1>
            <p>by {school.teacher}</p>
            <p>by {school.school}</p>
            <p>
              Created on <time dateTime={school.created}>{format(parseISO(school.created), 'LLLL d, yyyy')}</time>
            </p>
            <p>
              Last tended <time dateTime={school.updated}>{format(parseISO(school.updated), 'LLLL d, yyyy')}</time>
            </p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto cl-book-body">
          <ReactMarkdown>
            {schoolBody}
          </ReactMarkdown>
        </div>
      </article>
    </>
  )
}

SchoolTemplate.getLayout = function getLayout(page: ReactElement) {
  return (
      <BaseLayout>
        <SchoolLayout>
        { page }
        </SchoolLayout>
      </BaseLayout>
  )
}

export default SchoolTemplate
