import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogProvider";
import { formatToOriginal } from "../utils/urlTextHandler";
import profilePlaceholder from "../assets/images/thumbnails/profile-placeholder.jpeg";
import { CalendarFold } from "lucide-react";
import { Star } from "lucide-react";
import BlogSidebar from "../components/BlogSidebar";
import SectionHeader from "../components/SectionHeader";
import RecipeSidebar from "../components/RecipeSidebar";
import PostMeta from "../components/PostMeta.jsx";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible.jsx";
const SingleBlogPage = () => {
  const { blogs } = useContext(BlogContext);
  const { slug } = useParams();
  const decodedTitle = formatToOriginal(slug); // Decode the URL slug

  // Find the blog using the decoded title
  const selectedItem = blogs.find((blog) => blog.slug === slug);

  if (!selectedItem) {
    return <div>Blog not found</div>; // If no blog is found with the matching title
  }

  return (
    <FadeInWhenVisible>
      <section className="custom-container mx-auto space-y-4  flex flex-col md:flex-row gap-x-4 ">
        <div className="w-full md:w-[70%] lg:w-[75%]">
          <h1 className="heading-text heading-size">{selectedItem.title}</h1>
          <PostMeta selectedItem={selectedItem} />
          {selectedItem.thumbnail && (
            <img
              className="object-cover w-full max-h-[42rem]"
              src={selectedItem.thumbnail}
              alt={selectedItem.title}
            />
          )}
          <article className="mt-8 subheading-text text-justify">
            {selectedItem.content}
          </article>
        </div>
        <div className="flex-col space-y-4  w-full md:w-[30%] lg:wd-[25%]">
          <BlogSidebar currentSlug={slug} />
          <RecipeSidebar currentSlug={slug} />
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default SingleBlogPage;
