import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {
}

function Routers({}: IRouterProps) {
  return (
    <Router>
      <Routes>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          element={<Coins />}
        />
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </Router>
  );
}
export default Routers;
