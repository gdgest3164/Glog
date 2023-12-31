import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = parseInt(localStorage.getItem("darkMode")!);
      setDarkMode(storedValue);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode ? true : false);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode ? 0 : 1));
  };
  const brandVars = {
    start: {
      fill: "rgba(255,255,255,0)",
      pathLength: 0,
    },
    end: {
      fill: darkMode ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
      pathLength: 1.8,
      transition: {
        default: { duration: 5 },
        fill: { duration: 1, delay: 1 },
      },
    },
  };

  return (
    <>
      <div className="m-3 flex justify-between px-3 items-center">
        <Link to={"/"}>
          <div className="text-4xl ">
            <svg
              version="1.1"
              width="20%"
              height="20%"
              viewBox="7.694999694824219 13.744559288024902 84.60900115966797 72.50543975830078"
              style={{ stroke: darkMode ? "white" : "black", strokeWidth: ".1", fill: "transparent" }}
            >
              <g fill="url(#SvgjsLinearGradient1000)">
                <motion.path
                  variants={brandVars}
                  initial="start"
                  animate="end"
                  d="M73.176 86.25H26.824c-10.547 0-19.129-8.582-19.129-19.129 0-5.094 1.996-9.89 5.617-13.516a19.172 19.172 0 0 1 9.235-5.129 12.692 12.692 0 0 1-.61-3.887c0-3.402 1.336-6.613 3.754-9.035a12.711 12.711 0 0 1 9.043-3.758h9.922c2.89-1.316 5.402-3.855 4.941-12.312a5.408 5.408 0 0 1 2.875-5.09c1.864-.995 4.07-.84 5.754.419 6.57 4.921 11.48 11.918 13.031 18.48a12.796 12.796 0 0 1 6.797 11.293c0 1.332-.207 2.644-.605 3.89 8.52 1.969 14.855 9.684 14.855 18.641 0 5.094-1.996 9.895-5.617 13.516-3.633 3.625-8.43 5.617-13.512 5.617zM34.735 35.801c-2.344 0-4.55.918-6.215 2.586-1.664 1.668-2.586 3.871-2.586 6.207 0 1.559.422 3.094 1.22 4.437l1.64 2.762-3.2.254c-3.546.281-6.902 1.84-9.453 4.39-2.867 2.868-4.445 6.66-4.445 10.689 0 8.343 6.79 15.129 15.13 15.129h46.351c4.016 0 7.813-1.578 10.688-4.446 2.863-2.863 4.442-6.66 4.442-10.684 0-7.824-6.11-14.445-13.91-15.074l-3.211-.261 1.656-2.762a8.582 8.582 0 0 0 1.215-4.43 8.805 8.805 0 0 0-5.344-8.082l-.98-.422-.192-1.05c-1.086-5.899-5.566-12.418-11.703-17.012-.625-.465-1.238-.223-1.473-.098-.191.101-.812.504-.77 1.351.485 8.868-1.906 13.918-7.742 16.367l-.37.157z"
                ></motion.path>
                <motion.path
                  variants={brandVars}
                  initial="start"
                  animate="end"
                  d="M25.258 75.496a8.641 8.641 0 0 1-3.602-5.64 8.672 8.672 0 0 1 1.442-6.54 8.68 8.68 0 0 1 7.191-3.738c1.7 0 3.371.5 4.809 1.46.25-.03.512-.058.77-.07-.102-.078-.212-.16-.31-.23-4.179-2.922-9.948-1.89-12.87 2.29-2.93 4.19-1.899 9.96 2.28 12.878a9.243 9.243 0 0 0 10.489.07 6.388 6.388 0 0 1-.762-.109c-2.945 1.738-6.597 1.61-9.437-.37z"
                ></motion.path>
                <motion.path
                  variants={brandVars}
                  initial="start"
                  animate="end"
                  d="M36.18 60.578c-.102-.09-.219-.172-.328-.25a9.727 9.727 0 0 0-7.29-1.602 9.664 9.664 0 0 0-6.28 4.012 9.743 9.743 0 0 0-1.61 7.29 9.669 9.669 0 0 0 4.02 6.288 9.738 9.738 0 0 0 5.578 1.739 9.742 9.742 0 0 0 5.469-1.66c.98-.66 1.828-1.5 2.52-2.5a9.692 9.692 0 0 0-2.079-13.317zm-1.082.457c-2 .29-3.871 1.36-5.11 3.129a7.537 7.537 0 0 0 1.872 10.488 7.512 7.512 0 0 0 3.601 1.32 9.243 9.243 0 0 1-10.488-.07c-4.18-2.922-5.21-8.692-2.281-12.88 2.922-4.179 8.691-5.21 12.871-2.288.102.07.211.148.309.23-.262.012-.524.043-.774.07zm14.711 14.461a8.715 8.715 0 0 1-3.602-5.64 8.678 8.678 0 0 1 1.45-6.54 8.628 8.628 0 0 1 7.18-3.738c1.71 0 3.37.5 4.82 1.46.25-.038.511-.058.761-.07-.101-.078-.199-.16-.308-.23-4.18-2.922-9.942-1.89-12.871 2.29-2.922 4.19-1.899 9.96 2.289 12.878 3.23 2.262 7.398 2.16 10.48.07a6.388 6.388 0 0 1-.762-.109c-2.937 1.738-6.598 1.61-9.437-.37z"
                ></motion.path>
                <motion.path
                  variants={brandVars}
                  initial="start"
                  animate="end"
                  d="M60.73 60.578c-.102-.09-.219-.172-.328-.25a9.704 9.704 0 0 0-7.281-1.602 9.7 9.7 0 0 0-6.29 4.012 9.704 9.704 0 0 0-1.601 7.29 9.644 9.644 0 0 0 4.012 6.288 9.753 9.753 0 0 0 5.59 1.77c1.898 0 3.8-.559 5.46-1.692.98-.66 1.828-1.5 2.532-2.5a9.71 9.71 0 0 0-2.094-13.316zm-1.07.457a7.486 7.486 0 0 0-5.11 3.129c-2.39 3.41-1.539 8.11 1.86 10.488a7.512 7.512 0 0 0 3.601 1.32c-3.078 2.09-7.25 2.192-10.48-.07-4.191-2.922-5.21-8.692-2.289-12.88 2.93-4.179 8.692-5.21 12.871-2.288.11.07.211.148.309.23a7.075 7.075 0 0 0-.762.07z"
                ></motion.path>
              </g>
              <defs>
                {darkMode ? (
                  <linearGradient gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1000" x1="10.720890045166028" y1="89.27588939666748" x2="89.27811050415039" y2="10.718668937683104">
                    <stop stop-color="#8841ec" offset="0.05"></stop>
                    <stop stop-color="#108f9d" offset="0.95"></stop>
                  </linearGradient>
                ) : (
                  <linearGradient gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1000" x1="10.720890045166028" y1="89.27588939666748" x2="89.27811050415039" y2="10.718668937683104">
                    <stop stop-color="#ec9441" offset="0.05"></stop>
                    <stop stop-color="#9d7510" offset="0.95"></stop>
                  </linearGradient>
                )}
              </defs>
            </svg>
          </div>
        </Link>
        <button
          onClick={toggleDarkMode}
          className={`p-2 w-8 h-8 flex justify-center items-center rounded-full ${darkMode ? "bg-yellow-400" : "bg-gray-800"} ${
            darkMode ? "text-gray-900" : "text-white"
          } transition-colors duration-200 float-right`}
        >
          {darkMode ? (
            <svg data-toggle-icon="sun" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
          ) : (
            <svg data-toggle-icon="moon" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default ThemeSwitcher;
