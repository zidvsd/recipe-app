import React from "react";
import NewsLetter from "../../components/NewsLetter";
const CTASection = () => {
  return (
    <div className="peach-gradient w-full py-12 mt-12">
      <div className="custom-container mx-auto flex flex-col gap-y-6 text-center items-center text-white">
        <h1 className="heading-text heading-size"> Let's Stay in Touch!</h1>
        <p className="subheading-text text-xl">
          Join our newsletter, so that we can reach out to you with our news and
          offers.
        </p>
        <NewsLetter width={70} textColor={`#ffffff`} />
      </div>
    </div>
  );
};

export default CTASection;
