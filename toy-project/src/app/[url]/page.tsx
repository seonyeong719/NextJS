"use client";

import { useState } from "react";

import { getAge } from "../api/getAge";
import { getGender } from "../api/getGender";
import ResultAge from "@/components/resultAge";
import ResultGender from "@/components/resultGender";

type Props = {
  params: {
    url: string;
  };
};

interface Test {
  age?: number;
  gender?: string;
}

// export type TodoType<T extends Test = Test> = Extract<T, Test> extends { age: number }
//   ? number
//   : string;

export type TodoType = Pick<Test, "age">;
export type TodoTypes = Pick<Test, "gender">;

export const Detail = async ({ params }: Props) => {
  const [value, setValue] = useState<string | undefined>("");
  const param = params.url;

  // const res:TodoType|TodoTypes = param === "age" ? await getAge(value) : await getGender(value);
  const res = param === "age" && (await getAge(value));
  console.log(typeof res);
  const ress = param === "gender" && (await getGender(value));
  console.log(value);

  // if (param === "age") {
  //   const res: TodoType = await getAge(value);
  //   console.log(res.age);
  // } else {
  //   const res: TodoTypes = await getGender(value);
  //   console.log(res.gender);
  // }

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
      {value && param === "age" ? <ResultAge data={value} /> : <ResultGender data={ress} />}
    </form>
  );
};
export default Detail;
