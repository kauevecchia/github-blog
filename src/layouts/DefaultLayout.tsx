import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="font-nunito min-h-screen">
      <Header />
      <main className="bg-base-background max-w-6xl">
        <Outlet />
      </main>
    </div>
  );
}
