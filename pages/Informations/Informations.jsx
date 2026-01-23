import { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import NavbarDown from "../components/Layout/NavbarDown";

const Informations = () => {
  const [isAdult, setIsAdult] = useState(null);

  useEffect(() => {
    const ageConfirmed = localStorage.getItem("ageConfirmed");
    if (ageConfirmed === "true") {
      setIsAdult(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <NavbarDown />

      <section className="mx-auto my-24">
        <div
          className="w-[800px] h-full mx-auto flex justify-center items-center shadow-xl shadow-slate-900 transition-transform bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35"
          role="alert"
        >
          <div className="bg-white flex flex-col items-center justify-center w-[800px] h-[200px] text-center p-4 m-2">
            <p className="text-red-600 text-lg font-serif text-black">
              Responsible Enjoyment:
            </p>
            <p className="text-lg font-serif text-black">
              This website contains content related to alcoholic beverages. You
              must be 18 years or older to access this site. Please drink
              mindfully and responsibly.
            </p>
          </div>
        </div>
        <div className="w-[800px] mx-auto my-6 flex justify-center items-center shadow-xl shadow-slate-900 transition-transform bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35">
          <p className="bg-white flex items-center justify-center w-[800px] h-[200px] font-serif text-black text-center text-lg p-4 m-2">
            William MacMiron is the founder and creative mind behind this
            whisky-focused website. With over a decade of experience in the
            world of fine spirits, William works professionally as a certified
            whisky sommelier. His deep appreciation for tradition,
            craftsmanship, and the art of distillation is at the heart of this
            platform.
          </p>
        </div>
        <div className="w-[800px] mx-auto flex justify-center items-center shadow-xl shadow-slate-900 transition-transform bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35">
          <p className="bg-white flex items-center justify-center w-[800px] h-[200px] text-lg font-serif text-black text-center p-4 m-2">
            Through this site, William shares his personal insights, tasting
            notes, and recommendations—whether you're a seasoned connoisseur or
            just beginning your whisky journey. His goal is to create a
            welcoming space where education and passion meet, celebrating the
            rich heritage and diversity of whisky from around the world.
          </p>
        </div>
      </section>
    </>
  );
};

export default Informations;
