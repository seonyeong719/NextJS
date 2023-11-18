interface ResultGenderProps {
  data?: string;
}

import { getGender } from "@/app/api/getGender";

export const ResultGender = async ({ data }: ResultGenderProps) => {
  const res = await getGender(data);

  return (
    <div>
      <h1>
        {res.name}당신의 성별은 {res.gender} 입니다.
      </h1>
    </div>
  );
};
export default ResultGender;
