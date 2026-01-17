export default function CartItemControls({ 
    quantity, 
    onDecrease, 
    onIncrease,
    className = '',
    innerButtonsClassName = ''
}: { 
        quantity: number, 
        onDecrease: VoidFunction, 
        onIncrease: VoidFunction,
        className?: string,
        innerButtonsClassName?: string
    }) {
    const innerButtonClass = `text-xl ${innerButtonsClassName}`

    return <div
    className={`border border-neutral-400 rounded-full ${className} flex items-center justify-center pl-2 pr-2`}
    >
        <button
        className={innerButtonClass}
        onClick={onDecrease}
        >
            -
        </button>
        <span
        className="w-8 text-center"
        >
            {quantity > 99 ? "99+" : quantity }
        </span>
        <button
        className={innerButtonClass}
        onClick={onIncrease}
        >
            +
        </button>
    </div>
}