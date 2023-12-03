import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Item from "~/Components/Home/Item";
import { getPosts } from "~/models/post.service";

export interface IPost {
  id: number;
  title: string;
  href: string;
  description: string;
  created_at: string;
  category: { title: string; href: string };
  imageUrl: string;
}

export interface IPosts {
  posts: IPost[];
}

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  return json<IPosts>({
    posts: (posts.data as unknown as Array<IPost>) ?? [],
  });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts && posts.map((post: IPost) => <Item key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
}
