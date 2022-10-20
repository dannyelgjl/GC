import { Routes, Route } from "react-router-dom";
import { Home } from "../screens";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Router;
