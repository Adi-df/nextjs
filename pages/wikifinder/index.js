import Head from "next/head";
import { useState } from "react";
import HomeButton from "../../components/homebutton";
import Wikipage from "../../components/wikipage";

export default function Home() {
    let [wikipages, setWikipages] = useState([]);

    const addWikipage = async () => {
        setWikipages((old) => [
            ...old,
            <Wikipage
                key={old.length}
                href={"https://fr.wikipedia.org/api/rest_v1/page/random/html"}
            />,
        ]);
    };

    return (
        <div className="text-center p-5">
            <Head>
                <title>Wikifinder</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeButton />
            <h1 className="text-red-600 text-5xl">Hello Confetti</h1>
            <div className="mt-10 flex w-full h-full justify-between flex-col">
                <h2 className="text-2xl mb-5">Learn random things</h2>
            </div>
            <div className="flex flex-col w-full">{wikipages}</div>
            <button
                onClick={addWikipage}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Learn (probably) useless things
            </button>
        </div>
    );
}
