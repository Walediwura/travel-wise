import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountriesList from './components/CountriesList';
import { useEffect, useState } from 'react';
import City from './components/City';

const BASE_URL = 'http://localhost:9100';

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('An error loading data');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='login' element={<Login />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='product' element={<Product />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='app' element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route
            path='cities'
            element={<CityList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route path='cities/:id' element={<City />}></Route>
          <Route
            path='countries'
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route path='form' element={<p>Form</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
