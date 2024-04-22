import React from "react";
import { NavLink } from "react-router-dom";
function BlogDetails({post}){
    return (
        <div className="max-w-[620px] w-11/12 py-3 mt-2 ml-[450px]">
           <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-sm text-[20px] ">{post.title}</span>
      </NavLink>
      <p className="text-[14px]">
        By
        <span className="italic ml-2 pr-2">{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[14px]">Posted on {post.date}</p>
      <p className="text-[16px] mt-[5px] text-justify ">{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-xs font-semibold underline text-blue-700 cursor-pointer mr-2">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
        </div>
    )
}
export default BlogDetails