export default function Venue() { return (
  <div className="flex flex-col items-center justify-center bg-[#fef1cf] gap-y-8 px-8">
    <div className="flex flex-col gap-16 bg-[#faf5e7] bg-opacity-80 rounded-lg shadow-lg p-20 max-w-5xl w-full">
      <div className="text-center max-w-4xl">
        <div className="flex flex-col gap-4 text-lg sm:text-xl select-none text-gray-800">
          <p className="uppercase">Wedding will be held at 1:30 PM, Saturday</p>
          <p className="uppercase">Sacred Heart of Jesus Parish,</p>
          <p className="uppercase">Tacloban City</p>
        </div>
      </div>
    </div>
  </div>
);
}
