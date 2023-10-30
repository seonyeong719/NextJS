import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Todo</h1>
      <div>
        <div>
          <span>ID</span>
          <input placeholder="id" />
        </div>
        <div>
          <span>Password</span>
          <input placeholder="password" />
        </div>
        <div>
          <span>Age</span>
          <input placeholder="age" />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}
