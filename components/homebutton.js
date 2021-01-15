import Link from "next/link";

export default function Homebutton({ handleClick }) {
    return (
        <div className="sm:w-10 h-10 sm:mb-0 bg-green-400 flex justify-center items-center sm:rounded-full text-white text-xl sm:absolute static rounded-none w-full mb-2">
            <Link href={"/"}>
                <a onClick={handleClick}>{"<"}</a>
            </Link>
        </div>
    );
}
