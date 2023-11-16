interface ResultAgeProps {
  data?: string;
}

import { getAge } from "@/app/api/getAge";

const ResultAge = async ({ data }: ResultAgeProps) => {
  const res = await getAge(data);
  console.log(res);

  return (
    <div>
      <h1>
        {res.name}당신의 나이는 {res.age}살 입니다.
      </h1>
    </div>
  );
};
export default ResultAge;
