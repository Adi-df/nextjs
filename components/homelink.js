import Link from "next/link";

export default function HomeLink({ name, href }) {
    return (
        <span className="text-2xl p-10 rounded bg-green-400 text-white">
            <Link href={href}>{name}</Link>
        </span>
    );
}
