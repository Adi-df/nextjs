import { useState, useEffect } from "react";
import Head from "next/head";
import Canvas from "../../components/canvas";
import HomeButton from "../../components/homebutton";

export default function Raycast() {
    let [context, setContext] = useState(null);
    let [handler, setHandler] = useState({
        raycast: (e) => e.preventDefault(),
        clear: (e) => e.preventDefault(),
    });

    useEffect(() => {
        setHandler({
            raycast: () => {
                context.fillStyle = "red";
                context.fillRect(
                    0,
                    0,
                    context.canvas.width,
                    context.canvas.height
                );
            },
            clear: () => {
                context.clearRect(
                    0,
                    0,
                    context.canvas.width,
                    context.canvas.height
                );
            },
        });
    });

    return (
        <div className="text-center p-5">
            <Head>
                <title>RayCast</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeButton />
            <h1 className="text-red-600 text-5xl">Hello Confetti</h1>
            <div className="mt-10 flex w-full h-full justify-between flex-col">
                <h2 className="text-2xl mb-5">Play with Raycast system</h2>
                <Canvas
                    className="bg-gray-500 rounded"
                    onContext={setContext}
                />
            </div>
            <button
                className="mt-5 rounded-full border-yellow-500 bg-yellow-500 p-2 text-white w-full hover:bg-yellow-600"
                onClick={handler.clear}
            >
                Clear
            </button>
            <button
                className="mt-5 rounded-full border-blue-500 bg-blue-500 p-2 text-white w-full hover:bg-blue-700"
                onClick={handler.raycast}
            >
                Raycast
            </button>
        </div>
    );
}
