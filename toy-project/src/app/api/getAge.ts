const AGE_URL = process.env.NEXT_PUBLIC_AGE_URL;

interface Name {
  name: string;
}

export const getAge = async (url: string): Promise<Name> => {
  const res = await fetch(`${AGE_URL}name=${url}`);
  console.log(res);
  if (!res) {
    if (!res) throw new Error("이름을 영어로 다시 입력해주세요");
  }

  return res.json();
};
