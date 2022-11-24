import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Logout, Register } from './components';
import { Details, Home, Layout } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin/" element={<Login />} />
          <Route path="signup/" element={<Register />} />
          <Route path="votacion/:id" element={<Details />} />
          <Route path="logout/" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
