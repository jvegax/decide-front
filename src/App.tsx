import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Login } from './components';
import { Details, Home, Layout } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Register />} />
          <Route path="signup" element={<Login />} />
          <Route path="votacion/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
