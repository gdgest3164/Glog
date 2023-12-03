// import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LinksFunction, type LoaderFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import ThemeSwitcher from "./src/components/ThemeSwitcher";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export const loader: LoaderFunction = async ({ request }) => {
  const cookies = request.headers.get("Cookie");
  const darkMode = cookies?.includes("darkMode=1") ? true : false;

  return json({ darkMode });
};

export default function App() {
  const [darkMode, setDarkMode] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = parseInt(localStorage.getItem("darkMode")!);
      setDarkMode(storedValue);
    }
  }, []);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <img src="/Images/background.avif" className="absolute mt-0 blur-sm -z-10" alt="test" />
        <ThemeSwitcher />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
