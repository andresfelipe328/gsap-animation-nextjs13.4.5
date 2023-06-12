import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-[5rem] bg-sub-bg rounded-md p-2 shadow-small-shadow">
        <h3>Bar</h3>
      </header>
      <div className="w-[25rem] bg-sub-bg rounded-md p-2 shadow-small-shadow">
        <h3>Management Bar</h3>
      </div>
      <div className="flex-1 bg-sub-bg rounded-md p-2 shadow-small-shadow">
        <h3>Contents</h3>
      </div>
    </>
  );
}
