import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

const routes = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

const Links = () => {
  const router = useRouter();
  const path = router.asPath;

  const { data: session } = useSession();

  const logoutHandler = async () => {
    await router.replace("/");
    signOut();
  };

  let linksContent;

  if (session) {
    linksContent = (
      <>
        <button
          onClick={logoutHandler}
          className="p-1 border-2 border-black rounded-lg"
        >
          Logout
        </button>
        <Link href="/admin">
          <span
            className={`${
              path === "/admin" ? "m-3 border-b-2 border-black" : "m-3"
            }`}
          >
            Admin
          </span>
        </Link>
      </>
    );
  }

  return (
    <>
      <div>
        {linksContent}
        {routes.map((route) => (
          <Link key={route.title} href={route.href}>
            <span
              className={`${
                path === route.href ? "m-3 border-b-2 border-black" : "m-3"
              }`}
            >
              {route.title}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Links;
