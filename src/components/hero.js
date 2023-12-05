import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-center pt-20">
      <div className=" flex  justify-center gap-4 w-3/4 px-1">
        <div className="text-left pt-3">
          <h1 className="text-7xl">
            Hi, I am Iqbal <br />
            Web Developer
          </h1>
          <p className="text-lg pt-8">
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, etc Make sure you subscribe to get the latest updates
          </p>
          <div className="flex pt-5 gap-3">
            <input
              placeholder="Enter Your Email Here...."
              className="h-10 w-64 border placeholder-opacity-60 p-2"
            />
            <button className=" bg-violet-500 text-base text-white w-24 flex items-center justify-center rounded-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <Image src="/hero.png" alt="hero-image" height={400} width={400} />
      </div>
    </div>
  );
}
