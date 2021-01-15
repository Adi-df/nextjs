import { useState } from "react";

export default function Cannon({ sliders, name, handler }) {
    let slidersStates = sliders.map((slider) => ({
        name: slider.name,
        min: slider.min || 1,
        max: slider.max || 500,
        step: slider.step || 1,
        state: useState(slider.default || 50),
    }));

    return (
        <div className="pt-6 w-full flex justify-center items-center flex-col sm:flex-row">
            <div className="flex sm:mb-0 mb-2">
                {slidersStates.map((slider) => (
                    <div className="flex justify-center mr-5" key={slider.name}>
                        <input
                            className="border-red-500 w-20 p-2 text-white bg-red-500 rounded-full"
                            type="number"
                            value={slider.state[0]}
                            min={slider.min}
                            max={slider.max}
                            step={slider.step}
                            onChange={(e) =>
                                slider.state[1](parseInt(e.target.value))
                            }
                        />
                    </div>
                ))}
            </div>

            <button
                className="rounded-full p-2 w-full text-xl text-white border-blue-500 bg-blue-500 hover:bg-blue-700"
                onClick={(e) =>
                    handler({
                        e,
                        sliders: slidersStates.map((s) => ({
                            name: s.name,
                            value: s.state[0],
                        })),
                    })
                }
            >
                {name}
            </button>
        </div>
    );
}
