import Lanyard from "../components/Lanyard";

function Kepengurusan(){

    const dummyData = [
        { id: 1, src: 'assets/lanyard card/yaysir masyal.png', name: 'SEKRETARIS 2024' },
        { id: 2, src: 'assets/lanyard card/yaysir masyal.png', name: 'WAKIL KETUA UMUM' },
        { id: 3, src: 'assets/lanyard card/yaysir masyal.png', name: 'KETUA UMUM' },
        { id: 4, src: 'assets/lanyard card/yaysir masyal.png', name: 'BENDAHARA 2024' },
        { id: 5, src: 'assets/lanyard card/yaysir masyal.png', name: 'KETUA DINAS ADM' },
        { id: 6, src: 'assets/lanyard card/yaysir masyal.png', name: 'KETUA DINAS AKADEMIK' },
        { id: 7, src: 'assets/lanyard card/yaysir masyal.png', name: 'NKETUA DINAS PMB' },
        { id: 8, src: 'assets/lanyard card/yaysir masyal.png', name: 'KETUA DINAS PSDM' },
        { id: 9, src: 'assets/lanyard card/yaysir masyal.png', name: 'KETUA DINAS DANUS' },
        { id: 10, src: 'assets/lanyard card/yaysir masyal.png', name: 'KETUA DINAS KASTRAD' },
        { id: 11, src: 'assets/lanyard card/yaysir masyal.png', name: 'KETUA DINAS INFOKOM' },
      ];
      
      const firstEight = dummyData.slice(0, 8);
      const lastThree = dummyData.slice(8);
    return(
        <div className="w-full" style={{marginTop:'200px'}}>
            <div style={{marginBottom:"100px"}} className="w-full flex items-center justify-center text-5xl font-[jaro] font-[400] text-[#1e293b]">
            kepenegurusan
            </div>
        
          
          
              {/* Bagian 8 orang pertama (4 per baris) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {firstEight.map((data) => (
          <div key={data.id} className="flex flex-col items-center">
            <p className="mt-2 text-sm font-bold text-center text-[#1e293b]">{data.name}</p>
            <Lanyard src={data.src} />
          </div>
        ))}
      </div>

      {/* Bagian 3 orang terakhir (3 per baris) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 mt-6">
        {lastThree.map((data) => (
          <div key={data.id} className="flex flex-col items-center">
            <p className="mt-2 text-sm font-bold text-center text-[#1e293b]">{data.name}</p>
            <Lanyard src={data.src} />
          </div>
        ))}
      </div>
    
    


        </div>
    )
}

export default Kepengurusan;