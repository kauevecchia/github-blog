import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="font-nunito min-h-screen leading-[1.6]">
      <Header />
      <main className="bg-base-background flex flex-col items-center pb-12">
        <Outlet />
      </main>
    </div>
  );
}
