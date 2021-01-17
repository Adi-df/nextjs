import { useRef, useEffect } from "react";

export default function Canvas(props) {
    let canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        props.onContext(context);
    });

    return <canvas width="500" height="400" ref={canvasRef} {...props} />;
}
