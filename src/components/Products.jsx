import Card from "./Card";
import ProductsTable from "./ProductsTable";

import Button from "@mui/material/Button";

const Products = ({ products, type, getMoreProducts, selectProduct }) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "40px",
        flexWrap: "wrap",
        height: "1vw",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {type === "grid" &&
        products.map((item) => (
          <Card key={item.id} selectProduct={selectProduct} product={item} />
        ))}

      {type === "table" && (
        <ProductsTable selectProduct={selectProduct} products={products} />
      )}
      {products.length % 20 === 0 && (
        <Button onClick={getMoreProducts} variant="contained">
          Load more products
        </Button>
      )}
    </div>
  );
};

export default Products;
