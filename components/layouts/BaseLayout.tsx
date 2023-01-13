import Nav from "components/Nav"
import { PropsWithChildren } from "react"
import { TbNotebook } from "react-icons/tb"
import { BsBook } from "react-icons/bs"
import { FaSchool } from "react-icons/fa"
import { BsLink45Deg, BsPersonFill } from "react-icons/bs"
import { MdOutlinePrivacyTip } from "react-icons/md"

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const navLinks = [
      { label: 'Writing', href: '/posts', icon: <TbNotebook /> },
      { label: 'Library', href: '/books', icon: <BsBook /> },
      { label: 'School', href: '/schools', icon: <FaSchool /> },
      { label: 'Blog', href: 'https://blog.nuovotaka.com', icon: <BsLink45Deg />},
      { label: 'About', href: '/about', icon: <BsPersonFill />},
      { label: 'Privacy', href: '/privacy', icon: <MdOutlinePrivacyTip />},
    ]
    return (<>
      <Nav navLinks={navLinks} />
      <main className="mx-4">{ children }</main>
    </>)
}

export default BaseLayout