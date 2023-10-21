import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// post 동작을 하는 api 컴포넌트
// 여기서 request값은 NextRequest라는 타입을 가진다.
export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  // req에 nextUrl이라는 값이 있고, 거기ㅔ searchParams라는걸 사용하면 됨.

  if (!tag) throw new Error("태그는 필수입니다.");

  revalidateTag(tag);
  return NextResponse.json({ message: "재검증에 성공했습니다.", tag });
  // revalidateTag를 사용해서 괄호 안에 tag를 넣으면 tag가 달려있는 fetch요청을 재검증 해주는 것이다
  // 그리고 나서 성공을 했다면 리턴을 해주는데, 여기서 'NextResponse'라는 값이 있다.
  // 저걸 불러와서 제대로 된 값을 응답 해줘야 함.
}
