const GENDER_URL = process.env.NEXT_PUBLIC_GENDER_URL;

export interface Gender {
  gender?: string;
}

// type ButtonStyle = Pick<Gender, "gender">;

export const getGender = async (url: string | undefined): Promise<Gender> => {
  const res = await fetch(`${GENDER_URL}?name=${url}`);
  console.log(res);

  if (!res.ok) {
    throw new Error("이름을 영어로 다시 입력해주세요");
  }

  return res.json();
};
