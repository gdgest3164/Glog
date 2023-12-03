import { Link } from "@remix-run/react";
import Image from "../Images/Image";

export default function Item(post: any) {
  return (
    post && (
      <article key={post.post.id} className="transition-all rounded-lg  group">
        <Link to={`/${post.post.id}`}>
          <div className="ab tn rounded-lg overflow-hidden relative transition duration-300 transform group-hover:-translate-y-6">
            <Image src={post.post.imageUrl} />
          </div>
          <p className="mt-3 line-clamp-3 leading-6 transition duration-700 transform group-hover:-translate-y-4">{post.post.title}</p>

          <div className="flex justify-between w-full">
            <div className="mt-3 group relative flex gap-2 items-center">
              {/* <h3 className="text-lg font-semibold leading-6  group-hover:">
                <span className="absolute inset-0" />
                {post.post.title}
              </h3> */}
              <Link
                to={`/${post.post.category.id}`}
                className="text-sm relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-600 transition duration-1000 transform group-hover:-translate-y-2"
              >
                {post.post.category.title}
              </Link>
            </div>
            <div className="flex items-center gap-x-4 text-xs mt-3 transition duration-1000 transform group-hover:-translate-y-2">
              <time>{new Date(post.post.created_at).toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })}</time>
            </div>
          </div>
        </Link>
      </article>
    )
  );
}
