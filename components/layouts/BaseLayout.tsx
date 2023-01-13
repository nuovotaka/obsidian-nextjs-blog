import Nav from "components/Nav"
import { PropsWithChildren } from "react"
import { GiNotebook, GiOpenBook } from "react-icons/gi"
import { FaSchool } from "react-icons/fa"
import { BsLink45Deg } from "react-icons/bs"
import { SiAboutdotme } from "react-icons/si"
import { MdOutlinePrivacyTip } from "react-icons/md"

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