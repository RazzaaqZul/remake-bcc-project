import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dashboard: Profile",
};

const page = () => {
  return (
    <main className="flex justify-center items-center flex-col gap-3">
      <div>Ini halaman Profile</div>
      <Link
        href={{
          pathname: "/dashboard",
        }}
        className="bg-gray-50 rounded-lg text-red-500 font-bold p-2"
        replace
      >
        Menuju ke Dashboard
      </Link>
    </main>
  );
};

export default page;
