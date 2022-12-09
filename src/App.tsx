import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Logout, Register, Visualizer, VotingForm } from "./components";
import { Details, Home, Layout, Profile } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin/" element={<Login />} />
          <Route path="signup/" element={<Register />} />
          <Route path="votacion/:id" element={<Details />} />
          <Route path="votacion/create/" element={<VotingForm />} />
          <Route path="logout/" element={<Logout />} />
          <Route path="visualizer/:id" element={<Visualizer />} />
          <Route path="profile/" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
