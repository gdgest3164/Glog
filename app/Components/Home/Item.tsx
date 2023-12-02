import Image from "../Images/Image";

export default function Item(post: any) {
  return (
    post && (
      <article key={post.post.id} className="flex max-w-xl flex-col items-start justify-between">
        <div className="ab tn">
          <Image src={post.post.imageUrl} />
        </div>
        <div className="flex items-center gap-x-4 text-xs mt-3">
          <time dateTime={post.post.datetime}>{post.post.date}</time>
          <a href={post && post.post.category.href ? post.post.category.href : "#"} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {post.post.category.title}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6  group-hover:">
            <a href={post.post.href}>
              <span className="absolute inset-0" />
              {post.post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 ">{post.post.description}</p>
        </div>
      </article>
    )
  );
}