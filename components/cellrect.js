export default function DragRect(props) {
    let value = props.value || 0;

    return (
        <div
            className={"w-4 h-4 sm:w-8 sm:h-8 rounded ".concat(
                value === 0
                    ? "bg-white"
                    : value === 1
                    ? "bg-red-500"
                    : "bg-purple-600",
                " ",
                props.className
            )}
            {...props}
        ></div>
    );
}
