import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="heading-text">Newsletter</h1>
      <p className="subheading-text text-xs">
        Subscribe to our newsletter to get more free tip
      </p>
      <input
        type="text"
        className="w-full border p-2 pl-4 border-neutral-300 rounded-md"
        placeholder="Enter Your Email"
      />
      <button className="bg-custom-peach rounded-md py-2 subheading-text text-white">
        Subscribe
      </button>
    </div>
  );
};

export default NewsLetter;
