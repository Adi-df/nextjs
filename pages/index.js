import Head from "next/head";

export default function Home() {
    return (
        <div className="text-center p-5">
            <Head>
                <title>My super NextApp</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-red-600 text-5xl">Hello Tailwind</h1>
        </div>
    );
}
