import Head from "next/head";
import HomeButton from "../../components/homebutton";

export default function Painter() {
    return (
        <div className="text-center p-5">
            <Head>
                <title>Confetti</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeButton />
            <h1 className="text-red-600 text-5xl">Hello Painter</h1>
            <div className="mt-10 flex w-full h-full justify-between flex-col">
                <h2 className="text-2xl mb-5">Draw on the free area</h2>
            </div>
        </div>
    );
}
