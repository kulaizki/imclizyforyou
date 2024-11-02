import React from "react";
import Image from "next/image";

const ReceptionGuest = () => {
  return (
    <div className="flex flex-col gap-y-16 md:flex-row bg-[#fef1cf] px-8 select-none">
      <div className="bg-[#faf5e7] bg-opacity-80 rounded-lg shadow-lg p-10 flex-1 mx-4 flex flex-col justify-top max-w-md md:max-w-2xl">
        <h1 className="text-5xl select-none font-wedding font-bold text-gray-800 tracking-wide text-center mb-12">
          Reception
        </h1>

        <div className="text-center text-gray-700 text-lg leading-relaxed mx-auto mb-6">
          <p className="mb-4">
            <span className="select-none font-regular text-gray-800">
              PEOPLE&apos;S CENTER, TACLOBAN, LEYTE.
            </span>
          </p>
          <p className="select-none">Scan here for the directions:</p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/reception-qr.png"
            alt="QR Code for Directions"
            width={180}
            height={180}
            draggable="false"
            className="rounded-xl no-select"
          />
        </div>
      </div>

      <div className="bg-[#faf5e7] bg-opacity-80 rounded-lg shadow-lg p-10 flex-1 mx-4 flex flex-col justify-top max-w-md md:max-w-2xl">
        <h1 className="text-5xl select-none font-wedding font-bold text-gray-800 tracking-wide text-center mb-12">
          Guest Attire
        </h1>

        <div className="text-center text-gray-700 text-lg leading-relaxed mx-auto">
          <p className="mb-4 select-none">
            <span className="select-none text-gray-800">
              FORMAL, STRICTLY NO JEANS NOR SHORTS.
            </span>
          </p>
          <p className="select-none max-w-xl">
            WE ASK VISITORS TO WEAR OUR COLOR SCHEME TO COALESCE WITH THE THEME.
          </p>
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-6">
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: "#040035" }}
              />
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: "#02347c" }}
              />
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: "#808080" }}
              />
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: "#50007b" }}
              />
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: "#aa01c4" }}
              />
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: "#9e73d2" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceptionGuest;
