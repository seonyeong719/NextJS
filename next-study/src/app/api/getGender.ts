const GENDER_URL = process.env.NEXT_PUBLIC_GENDER_URL;

interface Name {
  name: string;
}

const getGender = async (url: string): Promise<Name> => {
  const res = await fetch(`${GENDER_URL}name=${url}`);
  if (!res) {
    if (!res) throw new Error("이름을 영어로 다시 입력해주세요");
  }

  return res.json();
};
