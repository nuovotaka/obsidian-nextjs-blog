import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post, allBooks, Book, allSchools, School, allProjects, Project } from 'contentlayer/generated'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import BaseLayout from 'components/layouts/BaseLayout'
import { NextPageWithLayout } from 'lib/utilityTypes'
import PostCard from 'components/PostCard'
import BookCard from 'components/BookCard'
import SchoolCard from 'components/SchoolCard'

export async function getStaticProps() {
  const byDescLastUpdated = (a: Post | Project, b: Post | Project) => {
    return compareDesc(new Date(a.updated), new Date(b.updated))
  }

  const posts = allPosts.sort(byDescLastUpdated)
  const projects = allProjects.sort(byDescLastUpdated)

  const books = allBooks.sort((a, b) => a.title > b.title ? 1 : -1)
  const schools = allSchools.sort((a, b) => a.title > b.title ? 1 : -1)
  return { props: { posts, books, schools, projects } }
}

interface IHomeProps { posts: Post[], books: Book[], schools: School[], projects: Project[] }

const Home: NextPageWithLayout = (props) => {
  const { posts, books, schools, projects } = props as IHomeProps
  
  return (
    <div className="max-w-5xl py-16 mx-auto">
      <Head>
        <title>Nuovotaka</title>
      </Head>

      <section className="mb-16">
        <h1 className="mb-2 text-6xl leading-tight"><strong>Nuovotaka</strong></h1>
        <p>Thanks for stopping by! This is my digital garden powered by Obsidian notes and NextJS.</p>
      </section>

      <h2>Notes</h2>
      <section className='grid grid-cols-3 gap-2'>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      </section>
      <hr className='my-8' />
      <h2>Books</h2>
      <section className='book-section'>
        {books.map((Book, idx) => (
          <BookCard key={idx} {...Book} />
        ))}
      </section>
      <hr className='my-8' />
      <h2>Schools</h2>
      <section className='school-section'>
        {schools.map((School, idx) => (
          <SchoolCard key={idx} {...School} />
        ))}
      </section>
      {/* <hr className='my-8' />
      <h2>Projects</h2>
      {projects.map((project, idx) => (
        <ProjectCard key={'project-'+idx} {...project} />
      ))} */}
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>{ page }</BaseLayout>
  )
}

export default Home