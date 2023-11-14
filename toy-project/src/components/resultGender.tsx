interface ResultGenderProps {
  data?: string;
}

export const ResultGender: React.FC<{ data: ResultGenderProps }> = ({ data }) => {
  console.log(typeof data);
  return (
    <div>
      <h1>당신의 성별은 ㅇㅇ 입니다.</h1>
    </div>
  );
};
export default ResultGender;
