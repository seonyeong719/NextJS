const GENDER_URL = process.env.NEXT_PUBLIC_GENDER_URL;

export interface GenderName {
  count: number;
  gender: string;
  name?: string;
}

export const getGender = async (url: string | undefined): Promise<GenderName> => {
  const res = await fetch(`${GENDER_URL}?name=${url}`);

  if (!res.ok) {
    throw new Error("이름을 영어로 다시 입력해주세요");
  }

  return res.json();
};
