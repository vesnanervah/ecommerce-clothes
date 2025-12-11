import { ReactNode } from "react";

export default function FullscreenBlock({ children, className = "" }: { children: ReactNode, className?: string }) {
    return <div className={`w-screen h-screen ${className}`}>
        {children}
    </div>
}