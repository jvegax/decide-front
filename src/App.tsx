import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout } from "./pages";
import Register from './components/signin'
import Login from './components/signup'

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
