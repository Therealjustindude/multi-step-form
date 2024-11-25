import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <p className="font-bold text-lg">Hello world!</p>
      <Link
        href="/step-one"
        className="flex justify-center rounded-lg bg-marine-blue text-white hover:bg-purplish-blue
        hover:opacity-90 hover:no-underline hover:text-white p-4 w-52"
      >
        <span className="font-bold text-lg">Go to First Step</span>
      </Link>
    </div>
  );
}


