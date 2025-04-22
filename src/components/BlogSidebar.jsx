import React, { useContext } from "react";
import { BlogContext } from "../context/BlogProvider";
import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
const BlogSidebar = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <aside className=" w-full flex-col space-y-4">
      <h1 className="heading-text text-xl text-custom-peach">Related Blogs</h1>
      {blogs.slice(1, 4).map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col md:flex-row gap-x-2 items-start md:items-center"
        >
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-[full] md:h-[5rem] lg:h-[8rem] object-cover"
          />
          <div className="w-1/2 flex flex-col gap-y-2">
            <h1 className="heading-text text-sm">{blog.title}</h1>
            <div className="flex flex-row gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-honey-yellow fill-honey-yellow"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default BlogSidebar;
