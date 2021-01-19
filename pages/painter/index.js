import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import HomeButton from "../../components/homebutton";

export default function Painter() {
    const canvasRef = useRef(null);

    const [isDrawing, setDrawing] = useState(false);
    const [drawColor, setDrawColor] = useState(0);

    const [handlers, setHandlers] = useState({});

    useEffect(() => {
        let context = canvasRef.current.getContext("2d");
        setHandlers({
            clear: () => {
                context.clearRect(
                    0,
                    0,
                    context.canvas.width,
                    context.canvas.height
                );
            },
            draw: (e) => {
                let canvasRect = canvasRef.current.getBoundingClientRect();
                let [mouseX, mouseY] = [
                    e.clientX - canvasRect.left,
                    e.clientY - canvasRect.top,
                ];

                setDrawColor((old) => (old + 1) % 360);

                context.fillStyle = `hsl(${drawColor}, 100%, 50%)`;
                context.beginPath();
                context.arc(mouseX, mouseY, 20, 0, 2 * Math.PI, false);
                context.fill();
            },
        });
    }, [canvasRef, drawColor]);

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
                <button
                    className="rounded-full p-2 my-8 text-xl text-white border-yellow-500 bg-yellow-500 hover:bg-yellow-600"
                    onClick={handlers.clear}
                >
                    Clear
                </button>
            </div>
            <div className="w-full flex justify-center flex-wrap items-center">
                <input
                    type="number"
                    value={drawColor}
                    onChange={(e) => setDrawColor(e.target.value)}
                    className="rounded h-10 w-20 mr-2 p-2 text-white bg-red-600 mb-5"
                />
                <canvas
                    className="rounded bg-gray-500 w-600"
                    onMouseDown={() => setDrawing(true)}
                    onMouseUp={() => setDrawing(false)}
                    onMouseMove={(e) => (isDrawing ? handlers.draw(e) : null)}
                    width={"600px"}
                    height={"600px"}
                    ref={canvasRef}
                ></canvas>
            </div>
        </div>
    );
}
