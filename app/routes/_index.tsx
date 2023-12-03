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
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Boost your conversion rate",
  //     href: "#",
  //     description:
  //       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  //     created_at: "Mar 16, 2020",
  //     category: { title: "Marketing", href: "#" },
  //     imageUrl: "https://picsum.photos/576/350?random=1",
  //   },
  // ];

  // return json<IPosts>({ posts: posts });
  console.log(posts);
  return json<IPosts>({
    posts: (posts.data as unknown as Array<IPost>) ?? [],
  });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 ">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts && posts.map((post: IPost) => <Item key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
}
