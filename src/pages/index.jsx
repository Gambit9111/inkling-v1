import Head from "next/head";
import Link from "next/link";

import Login from "@/components/auth/Login";

import ContentWrapper from "@/components/widgets/ContentWrapper";

// ! ALERT
// * IMPORTANT
// TODO TODO
// ?  QUESTION
//// COMPLETED

export default function Home() {
  return (
    <>
      <Head>
        <title>Inkling version 1</title>
        <meta
          name="description"
          content="Daily journal application that encrypts your entries"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper>
        <Login />
        <h1 className="pt-20 text-4xl">Landing page</h1>
        <Link href="/journals" className="button">
          Go To Your Journals
        </Link>
      </ContentWrapper>
    </>
  );
}
