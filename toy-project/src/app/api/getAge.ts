const AGE_URL = process.env.NEXT_PUBLIC_AGE_URL;

export interface AgeName {
  count: number;
  name?: string;
  age: number;
}

// type ButtonStyle = Pick<Age, "age">;

export const getAge = async (url: string | undefined): Promise<AgeName> => {
  const res = await fetch(`${AGE_URL}?name=${url}`);
  console.log(res);

  if (!res.ok) {
    throw new Error("이름을 영어로 다시 입력해주세요");
  }
  return res.json();
};
