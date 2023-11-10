import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>내 이름으로 보는 나이는?</h1>
      <Link href="/my-name">click!</Link>
    </>
  );
}
