import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); //! SSR is false because it doesn't work with Next.js

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

// import { prisma } from "@/services/prismadb";

export default function Page() {
  const [textAreaValue, setTextAreaValue] = useState("");

  console.log("TextAreaValue", textAreaValue);
  return (
    <main className="h-screen w-full">
      <ReactQuill
        theme="snow"
        value={textAreaValue}
        onChange={setTextAreaValue}
        className="h-full w-full"
      />
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
