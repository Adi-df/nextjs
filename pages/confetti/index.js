import Head from "next/head";
import Confetti from "canvas-confetti";
import Cannon from "../../components/cannon";
import Homebutton from "../../components/homebutton";

export default function Home() {
    let cannons = {
        classic: () => Confetti(),
        powered: ({ sliders }) =>
            Confetti({
                particleCount: sliders[0].value,
            }),
        circle: ({ sliders }) =>
            Confetti({
                particleCount: sliders[0].value,
                spread: 359,
            }),
        rotation: ({ r, sliders }) => {
            Confetti({
                particleCount: sliders[0].value,
                spread: 15,
                angle: r,
            });
            if ((r - 90) / 360 < sliders[2].value)
                setTimeout(
                    () =>
                        cannons.rotation({ r: r + sliders[1].value, sliders }),
                    100
                );
        },
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
            <Cannon
                sliders={[{ name: "power", max: 5000 }]}
                name={"Powered"}
                handler={cannons.powered}
            />
            <Cannon
                sliders={[{ name: "power", max: 5000 }]}
                name={"Circle"}
                handler={cannons.circle}
            />
            <Cannon
                sliders={[
                    { name: "power", max: 50, default: 10 },
                    { name: "speed", max: 40, default: 10 },
                    { name: "turns", max: 10, default: 1 },
                ]}
                name={"Rotation"}
                handler={(e) => cannons.rotation({ ...e, r: 90 })}
            />
        </div>
    );
}
