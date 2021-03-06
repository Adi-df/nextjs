export const isEnded = (p, b) =>
    (p[0][0] === p[1][0] && p[0][0] === p[2][0]) ||
    (p[0][1] === p[1][1] && p[0][1] === p[2][1] && p[0][1] !== b) ||
    (p[0][0] === 0 &&
        p[0][1] === 0 &&
        p[1][0] === 1 &&
        p[1][1] === 1 &&
        p[2][0] === 2 &&
        p[2][1] === 2) ||
    (p[0][0] === 2 &&
        p[0][1] === 0 &&
        p[1][0] === 1 &&
        p[1][1] === 1 &&
        p[2][0] === 0 &&
        p[2][1] === 2);

export const computeAvailableMoves = (pos, a, b) =>
    [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
    ]
        .filter((p) =>
            (p[0] === pos[0] && p[1] === pos[1]) ||
            (pos[0] === 0 && p[0] === 2) ||
            (pos[0] === 2 && p[0] === 0) ||
            (pos[1] === 0 && p[1] === 2) ||
            (pos[1] === 2 && p[1] === 0) ||
            (pos[0] === 1 && pos[1] !== 1 && p[1] === 1 && p[0] !== 1) ||
            (pos[1] === 1 && pos[0] !== 1 && p[0] === 1 && p[1] !== 1)
                ? false
                : true
        )
        .filter(
            (p) =>
                !(
                    a.some((p1) => p1[0] === p[0] && p1[1] === p[1]) ||
                    b.some((p1) => p1[0] === p[0] && p1[1] === p[1])
                )
        );
