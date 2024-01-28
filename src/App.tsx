import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import Root from "./routes/root";
import ProductView from "./views/ProductView";
import StoreView from "./views/StoreView";
import MenView from "./views/MenView";
import NotFoundView from "./views/NotFoundView";
import WomenView from "./views/WomenView";
import ContactView from "./views/ContactView";
import AboutView from "./views/AboutView";
import JewelryView from "./views/JewelryView";
import ElectronicsView from "./views/ElectronicsView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<HomeView />} />
          <Route path="store" element={<StoreView />} />
          <Route path="men-clothing" element={<MenView />} />
          <Route path="women-clothing" element={<WomenView />} />
          <Route path="jewelery" element={<JewelryView />} />
          <Route path="electronics" element={<ElectronicsView />} />
          <Route path="women-clothing" element={<WomenView />} />
          <Route path="contact" element={<ContactView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="product/:slug" element={<ProductView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Router>
  );
}

export default App;
