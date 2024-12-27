import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ProductList from "./Components/ProductList";
import ThemeToggle from "./Components/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Fake Store</h1>
        <ThemeToggle />
        <ProductList />
      </div>
    </ThemeProvider>
  );
};

export default App;
