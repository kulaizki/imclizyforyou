export default function Attire() {
  return (
    <div className="bg-[#fcecc0] bg-opacity-80 rounded-lg shadow-lg p-20 max-w-5xl w-full">
      <h1 className="text-5xl select-none font-wedding font-bold text-gray-800 tracking-wide text-center mb-8">
        Guest Attire
      </h1>

      <div className="text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
        <p className="mb-6 select-none">
          <span className="select-none text-gray-800">
            FORMAL, STRICTLY NO JEANS NOR SHORTS.
          </span>
        </p>
        <p className="select-none">
          WE ASK VISITORS TO WEAR OUR COLOR SCHEME TO COALESCE WITH THE THEME.
        </p>
        <div className="flex justify-center mt-8">
          <div
            className="w-10 h-10 rounded-full mr-2"
            style={{ backgroundColor: "#040035" }}
          />
          <div
            className="w-10 h-10 rounded-full mr-2"
            style={{ backgroundColor: "#02347c" }}
          />
          <div
            className="w-10 h-10 rounded-full mr-2"
            style={{ backgroundColor: "#808080" }}
          />
          <div
            className="w-10 h-10 rounded-full mr-2"
            style={{ backgroundColor: "#50007b" }}
          />
          <div
            className="w-10 h-10 rounded-full mr-2"
            style={{ backgroundColor: "#aa01c4" }}
          />
          <div
            className="w-10 h-10 rounded-full"
            style={{ backgroundColor: "#9e73d2" }}
          />
        </div>
      </div>
    </div>
  );
}
