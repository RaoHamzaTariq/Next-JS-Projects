import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="">
      <div className="mt-40 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-bold">Welcome to Figma Cloning Website</h1>
      <p className="mt-5 text-xl text-gray-500">In this website you will find multiple cloning projects</p>
      </div>
      <section className="flex justify-center items-center mt-12 font-bold">
        <Link href={"iphone-cyber-website"}><button className="hover:bg-slate-100 border-2 border-black hover:border-0 p-5 text-xl hover:shadow-lg hover:transition-all ">iPhone Cyber Website</button></Link>
      </section>
    </main>
  );
}
