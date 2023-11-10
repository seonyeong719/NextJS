import { getAge } from "../api/getAge";

type Props = {
  params: {
    url: string;
  };
  searchParams: {
    name: string;
  };
};

async function Detail({ params, searchParams }: Props) {
  const res = await getAge(params.url);
  console.log(res);
  console.log(searchParams);
  return (
    <>
      <div>:)</div>
    </>
  );
}
export default Detail;
