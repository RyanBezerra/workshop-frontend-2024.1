import Link from "next/link"

export default function Nav({ titulo, url}){
    return(
        <div>
            <Link href={url} className="text-lg">{titulo}</Link>
        </div>
    )
}