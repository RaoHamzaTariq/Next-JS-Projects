import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-950 to-red-900">
      <div className="mt-28 flex flex-col justify-center items-center">
      <h1>Welcome to Figma Cloning Website</h1>
      <p>In this website you will find multiple cloning projects</p>
      <button>Lets Explore</button>
      </div>
      <section className="flex justify-center items-center mt-12 font-bold">
        <Link href={"iphone-cyber-website"}><button>iPhone Cyber Website</button></Link>
      </section>
    </main>
  );
}
