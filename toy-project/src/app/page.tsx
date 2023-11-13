import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-3xl font-bold underline">내 이름으로 보는 나이/성별은?</div>
      <Link href="/age">go name!</Link>
      <br />
      <Link className="bg-red-500 hover:outline-4 outline outline-pink-500" href="/gender">
        go gender!
      </Link>
    </div>
  );
}
