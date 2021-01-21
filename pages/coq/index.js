import Head from "next/head";
import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { isEnded, computeAvailableMoves } from "../../lib/move";
import HomeButton from "../../components/homebutton";
import Cell from "../../components/cell";
import CellRect from "../../components/cellrect";
import DragRect from "../../components/dragrect";

export default function Coq() {
    let [turn, setTurn] = useState(0); // 0 player1, 1 player2, 2 End
    let [player1Pieces, setPlayer1Pieces] = useState([
        [0, 0],
        [1, 0],
        [2, 0],
    ]);
    let [player2Pieces, setPlayer2Pieces] = useState([
        [0, 2],
        [1, 2],
        [2, 2],
    ]);

    // Players turn
    const handleDragEnd = (e) => {
        if (!e.over || !e.active || turn === 2) return;
        const r = e.over.id.match(/^(\d)-(\d)-dropzone$/);
        const d = e.active.id.match(/^(\d)-(\d)-drag$/);

        const [t, pId] = [parseInt(d[1], 10), parseInt(d[2], 10)];
        const [x, y] = [parseInt(r[1], 10), parseInt(r[2], 10)];

        if (
            t * -1 + 2 !== turn ||
            !computeAvailableMoves(
                turn === 0 ? player1Pieces[pId] : player2Pieces[pId],
                player1Pieces,
                player2Pieces
            ).some((move) => move[0] === x && move[1] === y)
        )
            return;

        if (turn === 0) {
            setPlayer1Pieces((old) =>
                old.map((v, i) => (i === pId ? [x, y] : v))
            );
        } else {
            setPlayer2Pieces((old) =>
                old.map((v, i) => (i === pId ? [x, y] : v))
            );
        }
        setTurn(turn === 0 ? 1 : 0);
    };

    // Game end?
    useEffect(() => {
        if (turn === 2) return;

        let p1Winned = isEnded(player1Pieces, 0);
        let p2Winned = isEnded(player2Pieces, 2);
        if (!(p1Winned || p2Winned)) return;

        setTurn(2);
    }, [turn, player1Pieces, player2Pieces]);

    const createCell = (x, y) => {
        let p1Piece = player1Pieces.findIndex(
            (p) => (p[0] === x) & (p[1] === y)
        );
        let p2Piece = player2Pieces.findIndex(
            (p) => (p[0] === x) & (p[1] === y)
        );

        return (
            <Cell x={x} y={y}>
                {p1Piece !== -1 || p2Piece !== -1 ? (
                    <DragRect
                        owner={p1Piece !== -1 ? 2 : 1}
                        number={p1Piece !== -1 ? p1Piece : p2Piece}
                    />
                ) : (
                    <CellRect value={0} />
                )}
            </Cell>
        );
    };
    const createRow = (y) => (
        <div
            className={`flex justify-around ${
                y === 0 ? "pb" : y === 2 ? "pt" : "p"
            }-10`}
        >
            {createCell(0, y)}
            {createCell(1, y)}
            {createCell(2, y)}
        </div>
    );

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="p-5 text-center">
                <Head>
                    <title>Coq</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <HomeButton />
                <h1 className="text-red-600 text-4xl">Hello Coq</h1>
                <div className="flex w-full flex-col justify-center items-center">
                    <h2
                        className={"mt-10 mb-4 text-yellow-500 text-xl ".concat(
                            turn === 0 ? "font-bold" : "font-normal"
                        )}
                    >
                        Player 1
                    </h2>
                    {createRow(0)}
                    {createRow(1)}
                    {createRow(2)}
                    <h2
                        className={"mt-4 text-green-400 text-xl ".concat(
                            turn === 1 ? "font-bold" : "font-normal"
                        )}
                    >
                        Player 2
                    </h2>
                </div>
                {turn === 2 ? (
                    <button
                        onClick={() => {
                            setPlayer1Pieces([
                                [0, 0],
                                [1, 0],
                                [2, 0],
                            ]);
                            setPlayer2Pieces([
                                [0, 2],
                                [1, 2],
                                [2, 2],
                            ]);
                            setTurn(0);
                        }}
                        className="p-3 my-5 w-full rounded bg-blue-500 text-white font-bold"
                    >
                        Restart
                    </button>
                ) : null}
            </div>
        </DndContext>
    );
}
