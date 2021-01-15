import Head from "next/head";
import Confetti from "canvas-confetti";
import Cannon from "../../components/cannon";
import Homebutton from "../../components/homebutton";

export default function Home() {
    let cannons = {
        classic: () => Confetti(),
    };

    return (
        <div className="text-center p-5">
            <Head>
                <title>Confetti</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Homebutton handleClick={() => Confetti.reset()} />
            <h1 className="text-red-600 text-5xl">Hello Confetti</h1>
            <div className="mt-10 flex w-full h-full justify-between flex-col">
                <h2 className="text-2xl mb-5">Play with cannon confetti</h2>
                <button
                    className="rounded-full p-2 my-8 text-xl text-white border-yellow-500 bg-yellow-500 hover:bg-yellow-600"
                    onClick={() => Confetti.reset()}
                >
                    Clear
                </button>
            </div>
            <Cannon sliders={[]} name={"Classic"} handler={cannons.classic} />
        </div>
    );
}
