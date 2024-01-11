import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import AddFood from 'pages/AddFood';
import AddIngredient from 'pages/AddIngredient';

function Router() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addFood" element={<AddFood />} />
            <Route path="/addIngredient" element={<AddIngredient />} />
          </Routes>
      </BrowserRouter>
    );
  };

  export default Router;