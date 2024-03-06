import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <main className="flex justify-center items-center flex-col gap-3">
        <div>Ini halaman dashboard</div>
        <Link
          href="/dashboard/profile"
          className="bg-gray-50 rounded-lg text-red-500 font-bold p-2"
        >
          Profile
        </Link>
      </main>
    </>
  );
};

export default page;
