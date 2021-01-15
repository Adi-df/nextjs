import Link from "next/link";

export default function Homebutton({ handleClick }) {
    return (
        <div className="w-10 h-10 bg-green-400 flex justify-center items-center rounded-full text-white text-xl sm:absolute relative">
            <Link href={"/"}>
                <a onClick={handleClick}>{"<"}</a>
            </Link>
        </div>
    );
}
