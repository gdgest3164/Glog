import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getPost } from "~/models/post.service";

export const loader: LoaderFunction = async ({ request, params }) => {
  const postId = params.postId as string;
  const post = await getPost(parseInt(postId));
  if (post.data !== null) {
    return json<any>({ post: post.data });
  } else {
    return redirect("/");
  }
};

export default function PostContent() {
  const loaderData = useLoaderData<typeof loader>();
  const [post, setPost] = useState(loaderData.data);

  useEffect(() => {
    setPost(loaderData.post);
  }, [loaderData.data, loaderData.post]);

  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* <Link to={"/"} className="cursor-pointer">
            <svg className="w-6 h-6 mb-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path>
            </svg>
          </Link> */}
          <h2 className="font-bold tracking-tight sm:text-4xl w-full">{post && post.title}</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl gap-x-8 gap-y-16 border-t pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none ">{post && post.content}</div>
      </div>
    </div>
  );
}
