import Link from "next/link";

function Menu() {
  return (
    <div className="absolute right-0 h-screen bg-black/80 z-50 w-[200px]">
      <div className="flex flex-col p-4 gap-y-2">
        <Link href={"/"}>
          <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
            <a>Home</a>
          </div>
        </Link>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
        <Link href={"/about"}>
          <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
            <a>About</a>
          </div>
        </Link>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
        <Link href={"/events"}>
          <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
            <a>Events</a>
          </div>
        </Link>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
        <Link href={"/blogs"}>
          <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
            <a>Blogs</a>
          </div>
        </Link>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
        {/* <div className="px-2 hover:bg-gradient-to-r from-secondary/60 to-primary/60 rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
          <Link href={"/"}>Resources</Link>
        </div>
        <p className="w-[98%] h-[1px] bg-slate-300"></p> */}
        <Link href={"/teams"}>
          <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
            <a>Team</a>
          </div>
        </Link>
        <p className="w-[98%] h-[1px] bg-slate-300"></p>
      </div>
    </div>
  );
}

export default Menu;
