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
      <section className="p-6 max-w-3xl mx-auto my-36 bg-[url(/assets/corkTable.png)] border-8 border-black border-opacity-35">
        <h1 className="text-3xl font-bold mb-4 bg-white flex justify-center items-center border-4 border-black border-opacity-80">
          About William MacMiron
        </h1>
        <div
          className="bg-yellow-300 p-4 rounded border-4 border-black "
          role="alert"
        >
        <p className="font-bold text-red-600 flex justify-center items-center 
                    shadow-2xl 
                    shadow-slate-900  
                    text-2xl">Responsible Enjoyment:</p>
          <p className="text-red-700 font-bold">
            This website contains content related to alcoholic beverages.You
            must be 18 years or older to access this site. Please drink
            mindfully and responsibly.
          </p>
        </div>
        <p className="mb-4 p-4 text-zinc-900 bg-white font-bold border-4 border-black border-opacity-80">
          William MacMiron is the founder and creative mind behind this
          whisky-focused website. With over a decade of experience in the world
          of fine spirits, William works professionally as a certified whisky
          sommelier. His deep appreciation for tradition, craftsmanship, and the
          art of distillation is at the heart of this platform.
        </p>
        <p className="mb-4 p-4 text-zinc-900 bg-white font-bold border-4 border-black border-opacity-80">
          Through this site, William shares his personal insights, tasting
          notes, and recommendations—whether you're a seasoned connoisseur or
          just beginning your whisky journey. His goal is to create a welcoming
          space where education and passion meet, celebrating the rich heritage
          and diversity of whisky from around the world.
        </p>

        
      </section>
    </>
  );
};

export default Informations;
