import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Admin = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-5xl">Admin Page</h1>
    </div>
  );
};

export default Admin;
