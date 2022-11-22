import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin, Signup } from './components';
import { Details, Home, Layout } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="votacion/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
