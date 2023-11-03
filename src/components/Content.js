import React from "react";
import Attribute from "./Attribute";
import Link from "next/link";

const arrayofdata = [
  {
    title: "DESCRIPTION",
    desc: `The complete tasting set. Made up of LONDON DRY heavy with juniper
            but light with citrus, rounded off with a subtle woody undertone.
            SPICED BLEND using a duo of light and white Caribbean rums from
            Martinique and Dominican Republic as its smooth base packed full of
            buttery dark caramel and spices. APERITIF a special combination of
            botanicals, from the hedgerow to the vegetable carefully blended
            with the floral sweetness of Strawberries`,
  },
  {
    title: "TASTE",
    desc: `The complete tasting set. Made up of LONDON DRY heavy with juniper
            but light with citrus, rounded off with a subtle woody undertone.
            SPICED BLEND using a duo of light and white Caribbean rums from
            Martinique and Dominican Republic as its smooth base packed full of
            buttery dark caramel and spices. APERITIF a special combination of
            botanicals, from the hedgerow to the vegetable carefully blended
            with the floral sweetness of Strawberries`,
  },
  {
    title: "SERVE",
    desc: `The complete tasting set. Made up of LONDON DRY heavy with juniper
            but light with citrus, rounded off with a subtle woody undertone.
            SPICED BLEND using a duo of light and white Caribbean rums from
            Martinique and Dominican Republic as its smooth base packed full of
            buttery dark caramel and spices. APERITIF a special combination of
            botanicals, from the hedgerow to the vegetable carefully blended
            with the floral sweetness of Strawberries`,
  },
];

const Content = () => {
  return (
    <>
      <section className="w-1/3 h-[500px] flex flex-col">
        <div className="flex justify-evenly border-b border-black p-2">
          <Link href={""}>LONDON DRY</Link>
          <Link href={""}>SPICED BLEND</Link>
          <Link href={""}>APERTIF</Link>
          <Link href={""}>TRIO</Link>
        </div>
        <div className="border-b border-black p-2  flex flex-col gap-2">
          <div className="text-3xl font-semibold">TRIO</div>
          <div className="font-serif text-2xl">
            London Dry, Spiced Blend & Aperitif
          </div>
          <div className="flex justify-between text-lg">
            <span>Made in England</span>
            <span>10%vol / 700ml x3</span>
          </div>
          <button className="w-full bg-black rounded-[100px] text-white text-2xl p-2">
            $79.85-Add to Bag
          </button>
          <div className="text-center text-blue-600">FREE UK DELIVERY</div>
        </div>
        {arrayofdata.map((data, index) => {
          return <Attribute title={data.title} desc={data.desc} />;
        })}
      </section>
    </>
  );
};

export default Content;
