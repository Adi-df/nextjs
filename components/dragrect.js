import { useDraggable } from "@dnd-kit/core";
import CellRect from "./cellrect";

export default function DragRect({ owner, number }) {
    const { listeners, attributes, transform, setNodeRef } = useDraggable({
        id: `${owner}-${number}-drag`,
    });
    return (
        <div ref={setNodeRef}>
            <CellRect
                value={owner}
                {...listeners}
                {...attributes}
                style={
                    transform
                        ? {
                              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
                          }
                        : undefined
                }
            />
        </div>
    );
}
