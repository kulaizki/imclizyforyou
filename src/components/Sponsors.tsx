export default function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fef1cf] gap-y-8 p-8">
      <div className="bg-[#faf5e7] bg-opacity-80 rounded-lg shadow-lg p-20 max-w-5xl w-full">
        <h1 className="text-5xl font-wedding text-gray-800 tracking-wide text-center mb-12">
          Sponsors
        </h1>

        {/* Principal Sponsors Section */}
        <div className="text-center max-w-4xl mb-16">
          <h2 className="text-4xl font-wedding text-blue-700 mb-8">Principal Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
            <p>ATTY. JONATHAN <span className="text-purple-700">DAGA</span> & ATTY. VEVELYN <span className="text-purple-700">MONSANTO</span></p>
            <p>DR. VICTOR <span className="text-purple-700">CAÑEZO</span>, JR. & PROS. MA. ARLENE <span className="text-purple-700">HUÑAMAYOR-CORDOVEZ</span></p>
            <p>ATTY. JOSEPH KIRBY <span className="text-purple-700">CALIPAYAN</span> & JUDGE DJHOANA GENE <span className="text-purple-700">CLEMENCIO</span></p>
            <p>ATTY. GERENSTEIN <span className="text-purple-700">BANZON</span> & MS. MELINDA <span className="text-purple-700">BANZON</span></p>
            <p>DR. ANTONIO <span className="text-purple-700">LIM</span> JR. & DR. MONINA M. <span className="text-purple-700">MANALANG</span></p>
            <p>PROF. EDILBERTO <span className="text-purple-700">MANAHAN</span> & PROF. ALETH THERESE <span className="text-purple-700">DACANAY</span></p>
            <p>ATTY. CLINT OCTAVIUS <span className="text-purple-700">LABTIC</span> & JUDGE MA. CIELO <span className="text-purple-700">VELASQUEZ-MARTINEZ</span></p>
            <p>JUDGE ADRYAN <span className="text-purple-700">MAURO</span> & ATTY. SHARILEE ANGELA <span className="text-purple-700">MAURO</span></p>
            <p>ATTY. DARWIN <span className="text-purple-700">BIBAR</span> & JUDGE HASMIN CRISTY <span className="text-purple-700">AVILA-BIBAR</span></p>
            <p>ASST. PROF. ROBERTO <span className="text-purple-700">MANAOIS</span> & PROF. MARIA RUTH <span className="text-purple-700">PINEDA-CORTEL</span></p>
            <p>SIR BERNIE JUDE <span className="text-purple-700">LAMOGRAR</span> & HON. SUSAN <span className="text-purple-700">PARILLA</span></p>
            <p>MS. RUTH <span className="text-purple-700">BANGAOIL</span> & MR. ELBERT ALDWIN <span className="text-purple-700">DE JESUS</span></p>
          </div>
        </div>

        {/* Secondary Sponsors Section */}
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl font-wedding text-blue-700 mb-8">Secondary Sponsors</h2>
          <div className="flex flex-col gap-8 text-lg text-gray-800">
            <div>
              <h3 className="text-2xl font-wedding text-gray-700">(To Light Our Path)</h3>
              <p>ARNOLD <span className="text-purple-700">JUDD</span> & CHELISSA <span className="text-purple-700">MAE</span></p>
            </div>
            <div>
              <h3 className="text-2xl font-wedding text-gray-700">(To Clothe Us As One)</h3>
              <p>STEVE <span className="text-purple-700">CHUCKIE</span> & MARIA <span className="text-purple-700">ELENA</span></p>
            </div>
            <div>
              <h3 className="text-2xl font-wedding text-gray-700">(To Bind Us Together)</h3>
              <p>OLIVER <span className="text-purple-700">NORMAN</span> & LEISA <span className="text-purple-700">JEANNE</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
