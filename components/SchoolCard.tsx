import { School } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function SchoolCard(school: School) {
    return (
    <Link href={school.url}><a className="group">
      <div className="mb-6 text-left">
        <Image src={'/assets/'+school.coverImg} alt={school.title} width={180} height={240} objectFit="contain"/>
        <h2 className="text-lg font-normal group-hover:text-blue-600">{school.title}</h2>
        <p className="text-sm">by { school.teacher }</p>
        <p className="text-sm">{ school.school }</p>
      </div>
    </a></Link>
    )
}