import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { PostDetails } from "./pages/PostDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/post/:issueNumber" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}
