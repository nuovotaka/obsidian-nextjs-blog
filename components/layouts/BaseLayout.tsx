import Nav from "components/Nav"
import { PropsWithChildren } from "react"
import { GiNotebook, GiOpenBook } from "react-icons/gi"
import { FaSchool } from "react-icons/fa"
import { BsLink45Deg } from "react-icons/bs"
import { SiAboutdotme } from "react-icons/si"
import { MdOutlinePrivacyTip } from "react-icons/md"

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const navLinks = [
      { label: 'Writing', href: '/posts', icon: <GiNotebook /> },
      { label: 'Library', href: '/books', icon: <GiOpenBook /> },
      { label: 'School', href: '/schools', icon: <FaSchool /> },
      { label: 'Blog', href: 'https://blog.nuovotaka.com', icon: <BsLink45Deg />},
      { label: 'About', href: '/about', icon: <SiAboutdotme />},
      { label: 'Privacy', href: '/privacy', icon: <MdOutlinePrivacyTip />},
    ]
    return (<>
      <Nav navLinks={navLinks} />
      <main className="mx-4">{ children }</main>
    </>)
}

export default BaseLayout