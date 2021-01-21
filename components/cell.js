import { useDroppable } from "@dnd-kit/core";

export default function Cell({ x, y, children }) {
    const { isOver, setNodeRef } = useDroppable({
        id: `${x}-${y}-dropzone`,
    });

    return (
        <div
            className={"w-10 h-10 sm:w-16 sm:h-16 rounded-full flex justify-center items-center ".concat(
                y === 0
                    ? isOver
                        ? "bg-green-600"
                        : "bg-green-500"
                    : y === 2
                    ? isOver
                        ? "bg-yellow-600"
                        : "bg-yellow-500"
                    : isOver
                    ? "bg-blue-600"
                    : "bg-blue-500",
                " ",
                x > 0 ? "ml-20" : ""
            )}
            ref={setNodeRef}
        >
            {children}
        </div>
    );
}
