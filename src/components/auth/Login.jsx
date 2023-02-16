import { useSession, signIn, signOut } from "next-auth/react";

import UserCard from "./UserCard";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <span>
        <button
          onClick={() => signOut({ callbackUrl: "/" })} // ! since we override the default callback to redirect to /journals, we need to override it again to redirect to / when we sign out
          type="button"
          className="button"
        >
          Sign Out of Google Account
        </button>
        <UserCard user={session?.user} />
      </span>
    );
  } else {
    return (
      <>
        <button
          onClick={() => signIn("google", { callbackUrl: "/journals" })}
          type="button"
          className="button"
        >
          Sign In with Google Account
        </button>
      </>
    );
  }
}
