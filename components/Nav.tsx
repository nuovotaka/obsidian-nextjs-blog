import { link } from "fs"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Icon from "./Icon"

type NavLink = {
    label: string,
    href: string,
    icon: any,
}

interface INavProps {
    navLinks: NavLink[],
}

const socialLinks = [
    {
        label: 'Twitter',
        href: 'https://twitter.com/nuovotaka',
        icon: 'twitter',
    },
    {
        label: 'Mastodon',
        href: 'https://mstdn.jp/@nuovotaka',
        icon: 'mastodon',
    },
]

const Nav: React.FC<INavProps> = ({ navLinks }: { navLinks: NavLink[] }) => {
    const router = useRouter()
    const getCurrentClasses = (slug: string) => (router.asPath.includes(slug))
        ? 'text-amber-800 bg-amber-100'
        : ''

    return <nav className="sticky z-50 grid max-w-lg grid-rows-2 px-4 py-2 mx-6 my-5 border rounded-lg border-amber-100 bg-amber-50 w-fit top-4 gap-x-4 gap-y-2" style={{gridTemplateColumns: 'auto 1fr'}}>
        <Link href="/">
            <a className="row-span-2 hover:text-amber-500">
                <Icon type="logo" width={37} />
            </a>
        </Link>
        <ul className="hidden md:flex col-start-2 gap-4 md:gap-2">
            { navLinks.map(page => (
                <li key={page.href}>
                    <Link href={page.href}>
                        <a className={'px-2 py-1 hover:bg-amber-200 hover:text-amber-900 rounded-sm ' + getCurrentClasses(page.href)}>
                            { page.label }
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
        <ul className="visible md:hidden flex col-start-2 gap-4 md:gap-2">
            { navLinks.map(page => (
                <li key={page.href}>
                    <Link href={page.href}>
                        <a className={'py-1 hover:bg-amber-200 hover:text-amber-900 rounded-sm ' + getCurrentClasses(page.href)}>
                            { page.icon }
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
        <ul className="flex items-center col-start-2 gap-4 px-2">
            { socialLinks.map(page => (
                <li key={page.href}>
                    <Link href={page.href}>
                        <a className={"text-neutral-500 hover:text-amber-600"} target="_blank" rel="nofollower noopener">
                            <Icon type={page.icon} width={20} />
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
}

export default Nav