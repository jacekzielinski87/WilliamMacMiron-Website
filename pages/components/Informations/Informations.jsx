import React from "react";
import NavBar from "../Layout/Navbar";
import NavbarLeft from "../Layout/NavbarLeft";
import NavbarRight from "../Layout/NavbarRight";
import Logo from "../Ui/Logo";

const Informations = () => {
  return (
    <div className="min-h-screen bg-[#d4b483] bg-[url('/assets/cork-texture.png')] bg-repeat">
      <NavBar />
      <NavbarLeft />
      <NavbarRight />
      <Logo />

      <div className="pt-20 px-4 md:px-8 lg:px-16">
        {/* Age Restriction Notice - Styled as a pinned note */}
        <div
          className="w-[475px] bg-white/90 p-6 mb-8 rounded-lg border-2 border-[#8b6b43] 
                      shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-200
                      relative before:content-[''] before:absolute before:top-2 before:left-1/2 
                      before:-translate-x-1/2 before:w-8 before:h-8 before:bg-red-500 
                      before:rounded-full before:shadow-md before:z-10 mx-auto"
        >
          <p className="text-sm text-red-800 text-center font-serif">
            <span className="font-bold block mb-2">Age Restriction Notice</span>
            The content on this page is intended for individuals of legal
            drinking age (21+ in the US, 18+ in most other countries). Please
            consume alcohol responsibly.
          </p>
        </div>

        {/* Main Title - Styled as a pinned note */}
        <div
          className="bg-white/90 p-8 rounded-lg border-2 border-[#8b6b43] 
                      shadow-lg transform rotate-[1deg] hover:rotate-0 transition-transform duration-200
                      relative before:content-[''] before:absolute before:top-2 before:left-1/2 
                      before:-translate-x-1/2 before:w-8 before:h-8 before:bg-red-500 
                      before:rounded-full before:shadow-md before:z-10 max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-serif text-[#5c3d1e] text-center">
            <b>Information Center</b>
          </h1>
          <p className="text-xl text-[#5c3d1e] font-serif mt-4 text-center">
            Welcome to our Information Center. Here you'll find everything you
            need to know about our whiskey collection, services, and expertise.
          </p>
        </div>

        {/* Information Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {/* About Our Whiskey */}
          <div
            className="bg-white/90 p-6 rounded-lg border-2 border-[#8b6b43] 
                        shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-200
                        relative before:content-[''] before:absolute before:top-2 before:left-1/2 
                        before:-translate-x-1/2 before:w-8 before:h-8 before:bg-red-500 
                        before:rounded-full before:shadow-md before:z-10"
          >
            <h2 className="text-2xl font-serif text-[#5c3d1e] mb-4">
              About Our Whiskey
            </h2>
            <p className="text-lg text-[#5c3d1e] font-serif">
              Discover our carefully curated selection of premium whiskeys from
              around the world. Learn about different styles, regions, and
              tasting notes.
            </p>
          </div>

          {/* Expert Guidance */}
          <div
            className="bg-white/90 p-6 rounded-lg border-2 border-[#8b6b43] 
                        shadow-lg transform rotate-[1deg] hover:rotate-0 transition-transform duration-200
                        relative before:content-[''] before:absolute before:top-2 before:left-1/2 
                        before:-translate-x-1/2 before:w-8 before:h-8 before:bg-red-500 
                        before:rounded-full before:shadow-md before:z-10"
          >
            <h2 className="text-2xl font-serif text-[#5c3d1e] mb-4">
              Expert Guidance
            </h2>
            <p className="text-lg text-[#5c3d1e] font-serif">
              Our team of whiskey experts is here to help you find the perfect
              bottle and answer any questions you might have about our
              collection.
            </p>
          </div>

          {/* Services & Events */}
          <div
            className="bg-white/90 p-6 rounded-lg border-2 border-[#8b6b43] 
                        shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-200
                        relative before:content-[''] before:absolute before:top-2 before:left-1/2 
                        before:-translate-x-1/2 before:w-8 before:h-8 before:bg-red-500 
                        before:rounded-full before:shadow-md before:z-10"
          >
            <h2 className="text-2xl font-serif text-[#5c3d1e] mb-4">
              Services & Events
            </h2>
            <p className="text-lg text-[#5c3d1e] font-serif">
              Join our tasting events, educational sessions, and exclusive
              member programs to enhance your whiskey journey.
            </p>
          </div>

          {/* Contact & Support */}
          <div
            className="bg-white/90 p-6 rounded-lg border-2 border-[#8b6b43] 
                        shadow-lg transform rotate-[1deg] hover:rotate-0 transition-transform duration-200
                        relative before:content-[''] before:absolute before:top-2 before:left-1/2 
                        before:-translate-x-1/2 before:w-8 before:h-8 before:bg-red-500 
                        before:rounded-full before:shadow-md before:z-10"
          >
            <h2 className="text-2xl font-serif text-[#5c3d1e] mb-4">
              Contact & Support
            </h2>
            <p className="text-lg text-[#5c3d1e] font-serif">
              Need assistance? Our customer service team is ready to help with
              any inquiries about our products and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
