import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import convertToPerH from "../helpers/convert";

const ProductsTable = ({ products, selectProduct }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="large">
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { backgroundColor: "#f1f1f1" },
                cursor: "pointer",
              }}
              onClick={() => selectProduct(product)}
            >
              <TableCell>
                <img width="70" src={product.thumbnailUrl} alt="product" />
              </TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">{product.owner}</TableCell>
              <TableCell align="right">
                {convertToPerH(product.pricePerSecond)} {product.priceCurrency}{" "}
                / hr
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
