import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex px-52 justify-between h-20 items-center shadow-xl">
      <Image src="vercel.svg" alt="logo" height={200} width={200} />
      <div className="flex gap-10 items-center">
        <button className=" flex items-center  justify-center p-2  w-20 h-8 rounded-md">
          Home
        </button>
        <button className=" flex items-center  justify-center p-2  w-20 h-8 rounded-md">
          Category
        </button>
        <button className=" flex items-center  justify-center p-2  w-24 h-8 rounded-md">
          About Me
        </button>
      </div>
    </div>
  );
}
