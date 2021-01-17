import Head from "next/head";
import HomeLink from "../components/homelink";

export default function Home() {
    let links = ["Confetti", "Painter"];

    return (
        <div className="text-center p-5">
            <Head>
                <title>Home page</title>
            </Head>
            <h1 className="text-red-600 text-5xl">Hello Fun Page</h1>
            <div className="flex flex-wrap p-20 w-full justify-around">
                {links.map((link, i) => (
                    <HomeLink
                        key={i}
                        name={link}
                        href={`/${link.toLowerCase()}`}
                    />
                ))}
            </div>
        </div>
    );
}
