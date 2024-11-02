export default function Children() {
  return (
    <div className="bg-[#fcecc0] bg-opacity-80 rounded-lg shadow-lg p-20 max-w-5xl w-full">
      <h1 className="text-5xl select-none font-wedding text-gray-800 tracking-wide text-center mb-12">
        Children & Plus Ones
      </h1>

      <div className="text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
        <p className="mb-6 select-none">
          DUE TO SPACE & CAPACITY RESTRICTIONS, WE CAN ONLY ACCOMMODATE
          <span className="font-bold select-none text-gray-800">
            {" "}
            THE GUESTS NAMED ON THIS INVITATION.
          </span>
        </p>
        <p className="select-none">FOR QUESTIONS/CONCERNS PLEASE REACH OUT TO US.</p>
      </div>
    </div>
  );
}
