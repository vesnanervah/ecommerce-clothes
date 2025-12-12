export function BrightCustomButton({text, className = "", onClick = () => {}}: { text: string, className?: string, onClick?: () => void }) {
    return <button className={`pl-4 pr-4 pt-3 pb-3 flex justify-center items-center bg-neutral-50 ${className}`} onClick={onClick}>
        {text}
    </button>
}

export function DarkCustomButton({text, className = "", onClick = () => {}}: { text: string, className?: string, onClick?: () => void }) {
    return <button className={`pl-4 pr-4 pt-3 pb-3 flex justify-center items-center bg-neutral-800 text-neutral-50 ${className}`} onClick={onClick}>
        {text}
    </button>
}