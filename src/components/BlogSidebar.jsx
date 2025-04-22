import React, { useContext } from "react";
import { BlogContext } from "../context/BlogProvider";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import CTASidebar from "./CTASidebar";
const BlogSidebar = ({ currentSlug }) => {
  const { blogs } = useContext(BlogContext);
  const relatedBlogs = blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, 4);
  return (
    <aside className=" w-full flex-col space-y-4">
      <h1 className="heading-text text-xl text-custom-peach">Related Blogs</h1>
      {relatedBlogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col md:flex-row gap-x-2 items-start md:items-center"
        >
          <Link
            to={`/blog/${blog.slug}`}
            className="block w-full md:w-[8rem] lg:w-[8rem] "
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-full md:h-[5rem] lg:h-[8rem] object-cover"
            />
          </Link>
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-col mt-4 gap-y-2">
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
      <CTASidebar />
    </aside>
  );
};

export default BlogSidebar;
