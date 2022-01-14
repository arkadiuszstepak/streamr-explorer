import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SelectedProductContext from "./context/context";
import ProductDetails from "./components/ProductDetails";
import ProductsView from "./components/ProductsView";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "IBM Plex Sans",
    },
  });
  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <SelectedProductContext.Provider
        value={[selectedProduct, setSelectedProduct]}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsView />} />
            <Route path="product" element={<ProductDetails></ProductDetails>} />
          </Routes>
        </BrowserRouter>
      </SelectedProductContext.Provider>
    </ThemeProvider>
  );
};

export default App;
