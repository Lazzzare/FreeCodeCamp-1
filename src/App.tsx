import ReactImg from "./assets/react.png";
import BackgroundReact from "./assets/backgroundReact.png";

function App() {
  return (
    <div className="w-full mx-auto min-h-screen bg-[#282D35]">
      {/* Header */}
      <div className="bg-[#21222A] flex justify-between p-7 items-center">
        <div className="flex gap-2 items-center">
          <img src={ReactImg} alt="ReactIcon" className="w-[28px] h-[28px]" />
          <h1 className="text-[#61DAFB] font-bold text-[22px]">ReactFacts</h1>
        </div>
        <h2 className="font-semibold text-white">React Course - Project 1</h2>
      </div>

      {/* Content - Body */}
      <div className="relative px-7">
        <h1 className="mt-14 mb-12 text-white font-bold text-[40px]">
          Fun facts about React
        </h1>

        {/* Facts-List */}
        <div className="flex flex-col space-y-[20px] text-white pl-5">
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#61DAFB] rounded-full"></span>
            <p>Was first released in 2013</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#61DAFB] rounded-full"></span>
            <p>Was originally created by Jordan Walke</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#61DAFB] rounded-full"></span>
            <p>Has well over 100K stars on GitHub</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#61DAFB] rounded-full"></span>
            <p>Is maintained by Facebook</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#61DAFB] rounded-full"></span>
            <p>Powers thousands of enterprise apps, including mobile apps</p>
          </div>
        </div>
        <div className="absolute top-[100px] right-0">
          <img src={BackgroundReact} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
