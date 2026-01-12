export default function CartItemControls({ 
    quantity, 
    onDecrease, 
    onIncrease,
    className = '' }: { 
        quantity: number, 
        onDecrease: VoidFunction, 
        onIncrease: VoidFunction,
        className?: string,
    }) {
    return <div
    className={`border border-neutral-400 rounded-full ${className} flex items-center justify-center pl-2 pr-2`}
    >
        <button
        className="p-2 text-xl"
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
        className="p-2 text-xl"
        onClick={onIncrease}
        >
            +
        </button>
    </div>
}