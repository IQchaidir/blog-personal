import Image from "next/image";

export default function Article() {
  return (
    <div className="flex justify-center pt-20">
      <div className="flex flex-col justify-center bg-white w-3/4 px-5 py-5 rounded-xl">
        <h1 className="text-base text-left pt-4">Featured Article -</h1>
        <div className="flex justify-center">
          <div className=" grid grid-cols-4 pt-10 gap-24 px-10">
            <div
              className="rounded-xl bg-transparent shadow-xl border w-56 px-3 
          h-72 flex flex-col justify center items-center"
            >
              <Image src="/hero.png" alt="logo" height={200} width={200} />
              <h1 className="text-base pt-3">Title Article</h1>
              <div className="flex">
                <Image src="/hero.png" alt="logo" height={50} width={50} />
                <div className="">
                  <p>author</p>
                  <p>Post Date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
