import Nav from "components/Nav"
import { PropsWithChildren } from "react"


const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const navLinks = [
      { label: 'Writing', href: '/posts' },
      { label: 'Library', href: '/books' },
      { label: 'Projects', href: '/projects' },
      { label: 'About', href: '/about' },
      { label: 'Privacy', href: '/privacy' },
    ]
    return (<>
      <Nav navLinks={navLinks} />
      <main className="mx-4">{ children }</main>
    </>)
}

export default BaseLayout