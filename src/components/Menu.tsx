import Link from "next/link";

function Menu() {
  return (
    <div className="absolute right-0 h-screen bg-black/80 z-50 w-[200px]">
      <div className="flex flex-col p-4 gap-y-2">
        <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
          <Link href={"/"}>Home</Link>
        </div>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
        <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
          <Link href={"/about"}>About</Link>
        </div>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
        <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
          <Link href={"/events"}>Events</Link>
        </div>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
        <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
          <Link href={"/blogs"}>Blogs</Link>
        </div>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
        {/* <div className="px-2 hover:bg-gradient-to-r from-secondary/60 to-primary/60 rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
          <Link href={"/"}>Resources</Link>
        </div>
        <p className="w-[98%] h-[1px] bg-slate-300"></p> */}
        <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
          <Link href={"/teams"}>Team</Link>
        </div>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
      </div>
    </div>
  );
}

export default Menu;
