import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500  h-screen  flex justify-center items-center  flex-col">
      <div className=" text-5xl text-white cursor-grab">내 이름으로 보는 나이/성별은?</div>
      <Link
        href="/age"
        className="bg-white hover:bg-pink-200 m-4 text-2xl p-2 rounded-lg shadow-lg"
      >
        go age!
      </Link>
      <Link
        className="bg-white hover:bg-pink-200 m-4 text-2xl p-2 rounded-lg shadow-md"
        href="/gender"
      >
        go gender!
      </Link>
    </div>
  );
}
