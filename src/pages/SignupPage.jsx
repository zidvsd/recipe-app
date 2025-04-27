import React from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
const SignupPage = () => {
  return (
    <div className="md:py-64 p-0 ">
      {/* hero left */}
      <div className="flex  flex-col md:flex-row w-full custom-container justify-start items-center gap-y-4">
        <div className="flex flex-col w-1/2 space-y-4">
          <Logo size={6} textSize={"text-5xl"} />
          <h1 className="heading-size font-poppins">
            Discover and share the flavors of the world on Spoonful.
          </h1>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <h1>Sign Up to Spoonful</h1>
        </div>
      </div>

      {/* form */}
    </div>
  );
};

export default SignupPage;
