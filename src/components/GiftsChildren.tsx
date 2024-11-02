import React from "react";

const GiftsChildren = () => {
  return (
    <div className="flex flex-col gap-y-16 md:flex-row bg-[#fef1cf] px-8 select-none">
      <div className="bg-[#faf5e7] bg-opacity-80 rounded-lg shadow-lg p-10 mx-4 flex flex-col justify-between max-w-2xl">
        <h1 className="text-5xl font-wedding font-bold text-gray-800 text-center mb-12">
          Gifts
        </h1>

        <div className="flex flex-col items-center gap-4 text-center text-gray-800 text-lg leading-relaxed mx-auto">
          <p className="uppercase max-w-md">
            YOUR LOVE, LAUGHTER AND COMPANY ON OUR WEDDING DAY IS THE GREATEST
            GIFT OF ALL.
          </p>
          <p className="uppercase max-w-md">
            BUT IF A GIFT IS ON YOUR MIND, A MONETARY CONTRIBUTION WOULD BE
            KIND.
          </p>
          <p className="uppercase max-w-md">
            IT WILL HELP US MORE THAN WORDS CAN SAY TO CELEBRATE OUR SPECIAL
            DAY.
          </p>
        </div>
      </div>
      <div className="bg-[#faf5e7] bg-opacity-80 rounded-lg shadow-lg p-10 mx-4 flex flex-col justify-top max-w-2xl">
        <h1 className="text-5xl font-wedding font-bold text-gray-800 text-center mb-12">
          Children & Plus Ones
        </h1>

        <div className="text-center text-gray-700 text-lg leading-relaxed mx-auto">
          <p className="mb-6 select-none max-w-md">
            DUE TO SPACE & CAPACITY RESTRICTIONS,
            <br />
            WE CAN ONLY ACCOMMODATE THE GUESTS NAMED ON THIS INVITATION.
          </p>
          <p className="select-none max-w-md">
            FOR QUESTIONS/CONCERNS PLEASE REACH OUT TO US.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftsChildren;
