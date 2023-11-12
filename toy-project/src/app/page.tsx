import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-3xl font-bold underline">내 이름으로 보는 나이/성별은?</div>
      <Link href="/name">go name!</Link>
      <br />
      <Link href="/gender">go gender!</Link>
      <div className="bg-red-500">test</div>
    </div>
  );
}
