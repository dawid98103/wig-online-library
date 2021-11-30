import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "./page/HomePage";
import CatalogPage from "./page/CatalogPage";
import DetailsPage from "./page/DetailsPage";
import FavoritePage from "./page/FavoritePage";
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
