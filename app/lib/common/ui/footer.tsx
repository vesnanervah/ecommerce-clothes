"use client";

import Link from "next/link"
import { DarkCustomButton } from "./custom-button"
import CustomTextInput from "./custom-text-input";

interface FooterSubBlockData {
    title: string,
    items: Array<FooterSubBlockItem>
}

interface FooterSubBlockItem {
    label: string,
    url: string,
}

const contactsBlockData: FooterSubBlockData = {
    title: "Contact us",
    items: [
        { label: "+79999999999", url: "tel:+79999999999"},
        { label: "Email Us", url: "mailto:example@ex.com"}
    ]
}

const customersBlockData: FooterSubBlockData = {
    title: "Customers",
    items: [
        { label: "Start a return", url: "/404"},
        { label: "FAQ", url: "/404"}
    ]
}

const companyBlockData: FooterSubBlockData = {
    title: "Company",
    items: [
        { label: "About us", url: "/404"},
        { label: "Terms", url: "404"}
    ]
}

function FooterSubBlock({ data }: { data: FooterSubBlockData }) {
    return <div
    className=""
    >
        <div
        className="text-neutral-700 uppercase pb-4 text-xl"
        >
            {data.title}
        </div>
        <div 
        className="flex flex-col gap-1"
        >
            {
                data.items.map((v) => {
                    return <Link href={v.url} key={v.label}>{v.label}</Link>
                })
            }
        </div>
    </div>
}

export default function Footer() {
    return <div
    className="flex flex-col md:flex-row gap-12 md:justify-between p-8 bg-rose-50 text-black"
    >
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <FooterSubBlock data={contactsBlockData} />
            <FooterSubBlock data={customersBlockData} />
            <FooterSubBlock data={companyBlockData} />
        </div>

        <div className="flex flex-col gap-4">
            <div className="text-2xl">Get the latest news from us</div>
            <div>
                <CustomTextInput 
                placeholder="Enter your email address"
                className="w-full md:w-[380px] mb-1"
                />
                <div>By signing up, you agree to our {<Link href={"/404"} className="underline">Privacy Policy</Link>}<br />and {<Link href={"/404"} className="underline">Terms of Service</Link>}.</div>
            </div>
            <DarkCustomButton text="Subscribe" className="max-w-[116px]"/>
        </div>
    </div>
}

