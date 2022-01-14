import Api from "../hooks/api";

import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import SelectedProductContext from "../context/context";
import StreamsTable from "./StreamsTable";


const ProductDetails = () => {
  const [streams, getStreams] = Api.useStreams();

  // eslint-disable-next-line no-unused-vars
  const [product, _] = useContext(SelectedProductContext);
  const navigate = useNavigate();
  useEffect(() => {
    getStreams(product.id);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#fff",
        height: "70vh",
        color: "#000",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <Paper elevation={1} sx={{ m: 2, p: 2 }}>
          <div>
            <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              <Button onClick={() => navigate("/")}>
                <ArrowBackIcon />
              </Button>
            </div>
            <img src={product.imageUrl} alt="Product Img" />
          </div>
          <div>{product.name}</div>

          <ReactMarkdown>{product.description}</ReactMarkdown>
          <div> </div>
        </Paper>
      </div>

      <div style={{ width: "50%", margin: "2vw" }}>
        <StreamsTable streams={streams} />
      </div>
    </div>
  );
};

export default ProductDetails;
