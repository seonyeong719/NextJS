"use client";

import { useState } from "react";

import { getAge } from "../api/getAge";
import { getGender } from "../api/getGender";
import ResultAge from "../components/resultAge";

type Props = {
  params: {
    url: string;
  };
};

export const Detail = async ({ params }: Props) => {
  const [value, setValue] = useState<string | undefined>("");
  const res = params.url === "age" ? await getAge(value) : await getGender(value);

  const submitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValues = (e.target as HTMLFormElement).nameValue.value as string;
    setValue(nameValues);
  };
  console.log(res);

  return (
    <form onSubmit={submitBtn}>
      <div className="bg-red-500">{params.url}</div>
      <input type="text" name="nameValue" className="border-solid border-2 border-gray-500" />
      <button className="outline outline-offset-2 outline-1 hover:outline-4 outline-pink-500">
        입력
      </button>
      {value && <ResultAge />}
    </form>
  );
};
export default Detail;
