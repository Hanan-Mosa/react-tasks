import { Route, Routes } from "react-router-dom";
import Paths from "./routes";
import NavBar from "./components/NavBar";

const DymaicRoute = ({ children, ...route }) => (
  <Route {...route}>
    {children?.length > 0 ? <>{children?.map(DymaicRoute)}</> : null}
  </Route>
);

function App() {
  return (
    <>
      <NavBar />
      <Routes>{Paths.map(DymaicRoute)}</Routes>;
    </>
  );
}

export default App;
