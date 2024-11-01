export default function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fef1cf] gap-y-8 p-8">
      <div className="bg-[#faf5e7] bg-opacity-80 rounded-lg shadow-lg p-20 max-w-5xl w-full">
        <h1 className="text-5xl font-wedding text-gray-800 tracking-wide text-center mb-12">
          Sponsors
        </h1>

        <div className="text-center max-w-4xl mb-16">
          <h2 className="text-4xl font-wedding text-blue-700 mb-8">Principal Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
            <p>ATTY. JONATHAN DAGA & ATTY. VEVELYN MONSANTO</p>
            <p>DR. VICTOR CAÑEZO, JR. & PROS. MA. ARLENE HUÑAMAYOR-CORDOVEZ</p>
            <p>ATTY. JOSEPH KIRBY CALIPAYAN & JUDGE DJHOANA GENE CLEMENCIO</p>
            <p>ATTY. GERENSTEIN BANZON & MS. MELINDA BANZON</p>
            <p>DR. ANTONIO LIM JR. & DR. MONINA M. MANALANG</p>
            <p>PROF. EDILBERTO MANAHAN & PROF. ALETH THERESE DACANAY</p>
            <p>ATTY. CLINT OCTAVIUS LABTIC & JUDGE MA. CIELO VELASQUEZ-MARTINEZ</p>
            <p>JUDGE ADRYAN MAURO & ATTY. SHARILEE ANGELA MAURO</p>
            <p>ATTY. DARWIN BIBAR & JUDGE HASMIN CRISTY AVILA-BIBAR</p>
            <p>ASST. PROF. ROBERTO MANAOIS & PROF. MARIA RUTH PINEDA-CORTEL</p>
            <p>SIR BERNIE JUDE LAMOGRAR & HON. SUSAN PARILLA</p>
            <p>MS. RUTH BANGAOIL & MR. ELBERT ALDWIN DE JESUS</p>
          </div>
        </div>

        <div className="text-center max-w-4xl">
          <h2 className="text-4xl font-wedding text-blue-700 mb-8">Secondary Sponsors</h2>
          <div className="flex flex-col gap-8 text-lg text-gray-800">
            <div>
              <h3 className="text-2xl font-wedding text-gray-700">(To Light Our Path)</h3>
              <p>ARNOLD JUDD & CHELISSA MAE</p>
            </div>
            <div>
              <h3 className="text-2xl font-wedding text-gray-700">(To Clothe Us As One)</h3>
              <p>STEVE CHUCKIE & MARIA ELENA</p>
            </div>
            <div>
              <h3 className="text-2xl font-wedding text-gray-700">(To Bind Us Together)</h3>
              <p>OLIVER NORMAN & LEISA JEANNE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
