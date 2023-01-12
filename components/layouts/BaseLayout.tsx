import Nav from "components/Nav"
import { PropsWithChildren } from "react"


const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const navLinks = [
      { label: 'Writing', href: '/posts' },
      { label: 'Library', href: '/books' },
      { label: 'School', href: '/schools' },
      { label: 'Blog', href: 'https://blog.nuovotaka.com' },
      { label: 'About', href: '/about' },
      { label: 'Privacy', href: '/privacy' },
    ]
    return (<>
      <Nav navLinks={navLinks} />
      <main className="mx-4">{ children }</main>
    </>)
}

export default BaseLayout