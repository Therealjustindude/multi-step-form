"use client";
import Image from "next/image";

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center gap-8 mt-auto mb-auto w-[100%]">
			<Image
				src='./icon-thank-you.svg'
				width={100}
				height={100}
				alt="Check mark in circle"
			/>
			<span className="text-5xl font-extrabold ">Thank you!</span>
			<span className="text-lg font-extrabold text-cool-gray text-center w-full max-w-3xl">Thanks for confirming your subscription! We hope youhave fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</span>
		</div>
	);
}