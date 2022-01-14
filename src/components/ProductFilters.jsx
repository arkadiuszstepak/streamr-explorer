import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

import PopupMenu from "./PopupMenu";
import Api from "../hooks/api";

const ProductFilters = (props) => {
  const SORTBYOPTIONS = ["Price", "Creation Date"];

  const categories = Api.useCategories();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#fff" }}>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "start" }}
          >
            <TextField
              id="outlined-basic"
              variant="standard"
              onChange={props.handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <PopupMenu
              options={SORTBYOPTIONS}
              onSelect={(sortby) => props.handleSortby(sortby)}
            ></PopupMenu>
            <PopupMenu
              options={categories.map((category) => category.name)}
              onSelect={(category) => props.handleCategory(category)}
            ></PopupMenu>
            <PopupMenu
              options={["desc", "asc"]}
              onSelect={(order) => props.handleOrder(order)}
            ></PopupMenu>
            <div
              style={{ display: "flex", alignItems: "center", color: "#000" }}
            >
              <Checkbox onChange={props.handleCheckbox} />
              <span>Only free</span>
            </div>
          </div>
          <Button onClick={() => props.handleViewChange("grid")}>
            <GridViewIcon />
          </Button>
          <Button onClick={() => props.handleViewChange("table")}>
            <TableRowsIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ProductFilters;
