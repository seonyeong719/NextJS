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
    <form
      onSubmit={submitBtn}
      className="bg-gradient-to-r from-cyan-500 to-blue-500  h-screen  flex justify-center items-center  flex-col"
    >
      <div className="text-5xl text-white cursor-grab pb-20">
        Enter your name, it will tell you your {params.url}!
      </div>
      <div className="">
        <input
          type="text"
          name="nameValue"
          className="border-solid border-2 border-gray-400 p-2 rounded-lg"
        />
        <button className="hover:text-red-500 hover:font-semibold">Enter</button>
      </div>
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
