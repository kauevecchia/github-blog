import effectL from "../assets/effect-l.svg";
import effectR from "../assets/effect-r.svg";
import logo from "../assets/vector.svg";

export function Header() {
  return (
    <header className="bg-base-profile flex h-[296px] items-center justify-between">
      <img src={effectL} alt="" />
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="h-[40px] w-[45px]">
          <img src={logo} alt="" />
        </div>
        <p className="font-coda text-blue text-2xl">GITHUB BLOG</p>
      </div>
      <img src={effectR} alt="" />
    </header>
  );
}
