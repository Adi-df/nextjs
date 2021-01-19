import Link from "next/link";

export default function HomeLink({ name, href, className }) {
    return (
        <span
            className={"text-2xl p-10 rounded bg-green-400 text-white mr-4 mt-4 ".concat(
                className || ""
            )}
        >
            <Link href={href}>{name}</Link>
        </span>
    );
}
