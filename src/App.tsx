import { useState } from "react";
import HeaderComponent from "./component/organism/header";
import { useAction } from "./redux/hooks/useAction";
import { ComponentRoutes } from "./route";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const { fetchListProductByIntitle } = useAction();
  const [value, setValue] = useState("");
  return (
    <Router>
      <HeaderComponent
        value={value}
        setValue={setValue}
        fetchListProductByIntitle={fetchListProductByIntitle}
      />

      {ComponentRoutes.map(({ Component, path }) => (
        <Routes key={path}>
          <Route path={`/${path}`} element={<Component />} />
        </Routes>
      ))}
    </Router>
  );
};

export default App;
