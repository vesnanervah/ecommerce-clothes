import Image from "next/image";

export default function Searchbar({ className = ""}: { className?: string }) {
    return <div className="flex items-center">
        <div className="w-0 overflow-visible">
            <div className="h-3.5 w-3.5 relative left-3">
                <Image src={"/search.svg"} alt="Search" height={14} width={14}></Image>
            </div>
        </div>
        <input type="text" placeholder="Search..." 
        className={`bg-neutral-50 pl-8 pr-4 pt-2 pb-2 border border-neutral-50 focus:border focus:border-neutral-500 outline-0 rounded-3xl ${className}`}></input>
    </div>
 
}