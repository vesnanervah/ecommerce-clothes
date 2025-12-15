export default function CustomTextInput({ placeholder, className = "" }: { placeholder: string, className?: string }) {
    return <input
    placeholder={placeholder}
    className={`border border-neutral-400 outline-0 p-3 focus:border-neutral-700 ${className}`}
    ></input>
}