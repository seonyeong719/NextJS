import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by seonyeong",
};

export default async function RootLayout({ children }) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "topics", { cache: "no-store" });
  // { next: { revalidate: 10 } } === revalidate -> 10초 동안만 캐시를 유지하겠다 라는 뜻
  // { cache: 'no-store'} === 캐시, 저장하지 않는다 라는 뜻.
  const topics = await resp.json();

  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}> {topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
