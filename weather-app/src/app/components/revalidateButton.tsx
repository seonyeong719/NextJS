"use client";

type Props = {
  tag: string;
};

// 여기서 revalidate가 fetch 되는 기능을 만들어야 함
// 이 컴포넌트는 이벤트 핸들러가 달려있기 때문에 'use client' 선언 해줘야함
export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    const res = await fetch("/api/revalidate?tag=" + tag, {
      method: "POST",
    });
    // 이렇게 query를 넣어주면 우리가 원하는대로 fetch가 되는걸 확인 가능함

    const result = await res.json();
    console.log(result);
  };

  return <button onClick={handleClick}>캐시 비우기</button>;
}
