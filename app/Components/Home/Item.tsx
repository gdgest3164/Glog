import Image from "../Images/Image";

export default function Item(post:any){
    return (<article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
    <div className="ab tn">
      <Image src={post.imageUrl} />
    </div>
    <div className="flex items-center gap-x-4 text-xs mt-3">
      <time dateTime={post.datetime}>
        {post.date}
      </time>
      <a
        href={post.category.href}
        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
      >
        {post.category.title}
      </a>
    </div>
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6  group-hover:">
        <a href={post.href}>
          <span className="absolute inset-0" />
          {post.title}
        </a>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 ">{post.description}</p>
    </div>
  </article>)
}