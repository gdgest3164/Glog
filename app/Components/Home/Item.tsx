import Image from "../Images/Image";

export default function Item(post: any) {
  return (
    post && (
      <article key={post.post.id} className="flex max-w-xl flex-col items-start justify-between">
        <div className="ab tn">
          <Image src={post.post.imageUrl} />
        </div>
        <div className="flex justify-between w-full">
          <div className="mt-3 group relative flex gap-2 items-center">
            <h3 className="text-lg font-semibold leading-6  group-hover:">
              <a href="#">
                <span className="absolute inset-0" />
                {post.post.title}
              </a>
            </h3>
            <a href="#" className="text-sm relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-600 hover:bg-gray-100">
              {post.post.category.title}
            </a>
          </div>
          <div className="flex items-center gap-x-4 text-xs mt-3">
            <time>{new Date(post.post.created_at).toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })}</time>
          </div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 ">{post.post.description}</p>
      </article>
    )
  );
}
