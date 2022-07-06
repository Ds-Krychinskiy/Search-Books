import HeaderComponent from "./component/organism/header";
import { useAction } from "./redux/hooks/useAction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ComponentRoutes } from "./route/route";
import { useTypedSelector } from "./redux/hooks/useTypedSelector";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const { fetchListProductByIntitle, fetchValueFromInput,fetchOrderBy, fetchSubject } = useAction();
  const { valueInput } = useTypedSelector((state) => state.listProduct);

  const onChange = (e: string) => {
    dispatch(fetchValueFromInput(e));
  };

  return (
    <Router>
      <HeaderComponent
        valueInput={valueInput}
        onChange={onChange}
        fetchOrderBy={fetchOrderBy}
        fetchSubject={fetchSubject}
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
