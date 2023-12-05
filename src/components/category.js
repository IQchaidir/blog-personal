import Image from "next/image";

export default function Category() {
  return (
    <div className="flex  justify-center pt-20">
      <div className=" flex-col  w-3/4 px-1">
        <div className="text-left">
          <h1 className="text-base">Browse The Category</h1>
        </div>
        <div className="flex justify-center">
          <div className=" grid grid-cols-5 pt-7 gap-14">
            <div
              className="rounded-xl bg-white w-48
          h-60 flex items-center justify-center"
            >
              <Image src="/next.svg" alt="logo" height={100} width={100} />
            </div>
            <div
              className="rounded-xl bg-white w-48
          h-60 flex items-center justify-center"
            >
              <Image src="/next.svg" alt="logo" height={100} width={100} />
            </div>
            <div
              className="rounded-xl bg-white w-48
          h-60 flex items-center justify-center"
            >
              <Image src="/next.svg" alt="logo" height={100} width={100} />
            </div>
            <div
              className="rounded-xl bg-white w-48
          h-60 flex items-center justify-center"
            >
              <Image src="/next.svg" alt="logo" height={100} width={100} />
            </div>
            <div
              className="rounded-xl bg-white w-48
          h-60 flex items-center justify-center"
            >
              <Image src="/next.svg" alt="logo" height={100} width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
