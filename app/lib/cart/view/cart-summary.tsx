import { DarkCustomButton } from "../../common/ui/custom-button";

export default function CartSummary({ total }: { total: number }) {
    return <div
    className="rounded-xs border border-neutral-300 w-full max-w-[360px]"
    >
        <div
        className="flex justify-center pt-4 pb-4 border-b border-neutral-300"
        >   
            Order Summary
        </div>
        <div
        className="flex justify-between pl-4 pt-4 pr-4"
        >
            <span>
                Total:
            </span>
            <span>
                ${total}
            </span>
        </div>
        <div
        className="p-4"
        >
            <DarkCustomButton
            text="Go To Checkout"
            className="w-full"
            />
        </div>
    </div>
}