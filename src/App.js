import React from "react";
import { PiStackLight } from "react-icons/pi";

const App = () => {
  return (
    <main>
      <div className="h-screen w-screen flex items-center justify-center sticky left-0 top-0">
        {/* <div className="absolute -z-10 top-0 left-0 w-full h-full opacity-30 bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAMRJREFUaEPtljEOwjAAxJrf8SOE0jER4kf8Loi1EpuvSoM7dnBzdoaWbbGnLLZn+zmotfbc9/1xtcEOmr2YhS5RqPd+Px60lHIbY7yP72utr5lHeeVmrvM9m4UsdLKB//mXO1ks9jkLYSpDIAuFxGJYC2EqQyALhcRiWAthKkMgC4XEYlgLYSpDIAuFxGJYC2EqQyALhcRiWAthKkMgC4XEYlgLYSpDIAuFxGJYC2EqQyALhcRiWAthKkMgC4XEYtjlCn0AC+8wNY7+9VoAAAAASUVORK5CYII=)]"></div> */}

        <div className="flex flex-col items-center">
          <h1 className="text-9xl mb-3 font-medium">
          <span className="block">CREATIVE</span>
          <span className="indent-60 block">FULL—STACK</span>
          <span className="block indent-20">DEVELOPER</span>
        </h1>
          {/* <p className="text-black/80 font-light">Full—stack Developer</p>

        <div className="p-2 border rounded-2xl">
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-xl w-10 h-10 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden [box-shadow:rgba(0,0,0,0.16)_0px_1px_4px;]">
              <div className="absolute h-1/2 w-full top-0 left-0 bg-gradient-to-b from-white/80 to-white/20"></div>
              <PiStackLight className="text-xl" />
            </button>
            <button className="flex items-center justify-center rounded-xl w-10 h-10 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden [box-shadow:rgba(0,0,0,0.16)_0px_1px_4px;]">
              <div className="absolute h-1/2 w-full top-0 left-0 bg-gradient-to-b from-white/80 to-white/20"></div>
              <PiStackLight className="text-xl" />
            </button>
          </div>
        </div> */}
        </div>
      </div>
        <div className="h-10 w-full bg-red-400 fixed bottom-10 z-10"></div>
        <div className="h-10 w-full bg-blue-400 fixed bottom-0 z-20"></div>
      <div className="h-[200vh] w-full bg-red-400 sticky top-0 z-[15]">
      </div>
      <div className="h-[200vh] w-full bg-blue-400 sticky top-0 z-30"></div>
    </main>
  );
};

export default App;
