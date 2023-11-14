import { getAge } from "@/app/api/getAge";

interface ResultAgeProps {
  data?: number;
}

const ResultAge: React.FC<{ data: ResultAgeProps }> = async ({ data }) => {
  console.log(typeof data);
  const res = await getAge(data);

  return (
    <div>
      <h1>당신의 나이는 ㅇㅇ살 입니다.</h1>
    </div>
  );
};
export default ResultAge;
