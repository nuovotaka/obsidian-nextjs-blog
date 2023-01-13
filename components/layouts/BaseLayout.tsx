import Nav from "components/Nav"
import { PropsWithChildren } from "react"
import { TbNotebook } from "react-icons/tb"
import { FaSchool } from "react-icons/fa"
import { BsBook, BsLink45Deg, BsPersonFill, BsInfoLg } from "react-icons/bs"

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const navLinks = [
      { label: 'Writing', href: '/posts', icon: <TbNotebook /> },
      { label: 'Library', href: '/books', icon: <BsBook /> },
      { label: 'School', href: '/schools', icon: <FaSchool /> },
      { label: 'Blog', href: 'https://blog.nuovotaka.com', icon: <BsLink45Deg />},
      { label: 'About', href: '/about', icon: <BsPersonFill />},
      { label: 'Privacy', href: '/privacy', icon: <BsInfoLg />},
    ]
    return (<>
      <Nav navLinks={navLinks} />
      <main className="mx-4">{ children }</main>
    </>)
}

export default BaseLayout