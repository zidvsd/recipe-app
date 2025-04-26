import React from "react";
import profilePlaceholder from "../assets/images/thumbnails/profile-placeholder.jpeg";
import { CalendarFold } from "lucide-react";
import { Star } from "lucide-react";

const PostMeta = ({ selectedItem }) => {
  console.log(selectedItem);

  return (
    <>
      <h1 className="heading-text heading-size">
        {selectedItem.title || selectedItem.strMeal}
      </h1>
      <section className="mt-4 flex pb-4 flex-row gap-x-6 gap-y-2 items-center justify-start mb-4 flex-wrap border-b border-neutral-300">
        <div className="flex flex-row gap-x-2 items-center">
          <img
            src={profilePlaceholder}
            className="rounded-full size-8"
            alt=""
          />
          <p className="subheading-text">Mang Juan</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center ">
          <CalendarFold />
          <p className="subheading-text">{selectedItem.date || "N/A Date"}</p>
        </div>
        <div className="flex flex-row gap-x-1 items-center">
          <p className="subheading-text">5.0 Reviews</p>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-honey-yellow fill-honey-yellow"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PostMeta;
