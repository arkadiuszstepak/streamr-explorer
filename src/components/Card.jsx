import Paper from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import convertToPerH from "../helpers/convert";

const Card = ({ product, selectProduct }) => {
  return (
    <Paper elevation={1} sx={{ m: 2 }} onClick={() => selectProduct(product)}>
      <Box
        sx={{
          width: 300,
          m: 1,
        }}
      >
        <div style={{ position: "relative", textAlign: "left" }}>
          {product.type === "DATAUNION" && (
            <div style={{ position: "absolute", zIndex: "2" }}>
              <Chip
                label="Data Union"
                sx={{ backgroundColor: "rgba(200,200,200)" }}
              />
            </div>
          )}

          <div>
            <img width="300" src={product.imageUrl} alt="product" />
          </div>
          <div id="product-name">{product.name}</div>
          <Typography variant="caption" component="div">
            {product.owner}
          </Typography>

          <div>
            {product.isFree ? (
              <span>free</span>
            ) : (
              <span>
                {convertToPerH(product.pricePerSecond)} {product.priceCurrency}{" "}
                / hr
              </span>
            )}
          </div>
        </div>
      </Box>
    </Paper>
  );
};

export default Card;
