import React, { FC } from "react";
import Image from "next/image";
const HeroSection: FC = ({}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen p-8 relative">
        <div className="flex flex-col justify-center items-center gap-8  ">
          <h2 className="text-4xl text-center ">
            Creating perfect <br />
            lines and imposing <br />
            presence
          </h2>
          <p className="pb-2 text-center md:w-80 md:text-left">
            Developed the concept of exclusivity, a DecoFurni features timeless
            furniture, with natural fabrics, curved lines, plenty of mirrors and
            classic design, which can be incorporated into any decor project.
            The pieces enchant for their sobriety, to last for generations,
            faithful to the shapes of each period, with a touch of the present.
          </p>
        </div>

        <Image
          className=" p-4 md:absolute right-20 top-20 "
          src={"/images/hero/hero4.png"}
          width={400}
          height={200}
          alt="hero"
        />
        <Image
          className="p-4 md:absolute left-20 top-10  "
          src={"/images/hero/heroo3.jpg"}
          width={400}
          height={200}
          alt="hero"
        />
        <Image
          className="absolute bottom-10 left-10 hidden md:block"
          src={"/images/hero/hero2.png"}
          width={300}
          height={200}
          alt="hero"
        />
        <Image
          className="absolute bottom-20 right-20 hidden md:block"
          src={"/images/hero/hero1.png"}
          width={300}
          height={200}
          alt="hero"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col  justify-center text-center items-center p-12 gap-8 flex-1 bg-opal text-white">
          <h3 className="text-3xl">Native light chair</h3>
          <p className="text-lg md:basis-1/2">
            Refinement Chair with Ripped Seat, made of retro Eucalyptus <br />{" "}
            wood, of great resistance, Kiln dried, made with a spike system{" "}
            <br /> and painted with P.U. (Polyurethane) With its entire
            structure <br /> painted in wood, it offers a lot of elegance to
            your environment <br /> and when cleaning is very easy, as it is
            washable and light for <br /> movement. Enough of receiving visitors
            and not having a place <br /> to accommodate them. With the chair,
            your days as a host will be <br /> marked by a lot of elegance and
            sophistication.
          </p>
        </div>
        <img
          src={"/images/hero/hero.png"}
          alt="hero"
          className="md:basis-1/2"
        />
      </div>
      <div className="h-screen bg-hero bg-cover bg-no-repeat relative">
        <Image
          src="/images/hero/hero7.png"
          width={200}
          height={100}
          className="absolute right-20 bottom-20 md:w-1/6"
          alt=""
        />
        <Image
          src="/images/hero/hero8.png"
          width={200}
          height={100}
          className="absolute left-20 top-10 md:w-1/6 "
          alt=""
        />
      </div>
    </>
  );
};

export default HeroSection;
