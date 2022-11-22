import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout } from "./pages";
import { Register, Login } from './components';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
