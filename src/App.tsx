import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemPage from './pages/ItemPage';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

const categories = [ 'TVs & Video', 'Laptops', 'Cell Phones', 'Headphones', 'iPads & Tablets', 'Gaming Consoles' ]

function App() {
  return (
    <>
      <Header categories={categories} />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/item/:id">
            <ItemPage />
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
