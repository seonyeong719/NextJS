"use client";

import { useState } from "react";

import ResultAge from "@/components/resultAge";
import ResultGender from "@/components/resultGender";

type Props = {
  params: {
    url: string;
  };
};

export const Detail = async ({ params }: Props) => {
  const [value, setValue] = useState<string | undefined>("");

  const submitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValues = (e.target as HTMLFormElement).nameValue.value as string;
    setValue(nameValues);
  };

  return (
    <form onSubmit={submitBtn}>
      <div className="bg-red-500">{params.url}</div>
      <input type="text" name="nameValue" className="border-solid border-2 border-gray-500" />
      <button className="outline outline-offset-2 outline-1 hover:outline-4 outline-pink-500">
        입력
      </button>
      {value ? (
        params.url === "age" ? (
          <ResultAge data={value} />
        ) : (
          <ResultGender data={value} />
        )
      ) : (
        ""
      )}
    </form>
  );
};
export default Detail;
