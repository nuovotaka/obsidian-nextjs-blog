import Nav from "components/Nav"
import { PropsWithChildren } from "react"
import { TbNotebook } from "react-icons/tb"
import { FaSchool } from "react-icons/fa"
import { BsBook, BsLink45Deg, BsPersonFill, BsInfoLg } from "react-icons/bs"

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const navLinks = [
      { label: 'Writing', href: '/posts', icon: <TbNotebook size={20} /> },
      { label: 'Library', href: '/books', icon: <BsBook size={20} /> },
      { label: 'School', href: '/schools', icon: <FaSchool size={20} /> },
      { label: 'Blog', href: 'https://blog.nuovotaka.com', icon: <BsLink45Deg size={20} />},
      { label: 'About', href: '/about', icon: <BsPersonFill size={20} />},
      { label: 'Privacy', href: '/privacy', icon: <BsInfoLg size={20} />},
    ]
    return (<>
      <Nav navLinks={navLinks} />
      <main className="mx-4">{ children }</main>
    </>)
}

export default BaseLayout