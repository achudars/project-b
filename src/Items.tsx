import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import items from "./data/data.json";
import { ImageLabel } from "./ImageLabel.tsx";

export const Items = () => (
  <Box sx={{ width: 1000, minHeight: 800 }}>
    <Masonry columns={3} spacing={2}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            border: "3px solid tomato",
            background: "FFF",
          }}
        >
          <ImageLabel>{item.title}</ImageLabel>
          <img
            src={`./src/images/${item.imgFolder}/${item.mainImg}`}
            srcSet={`./src/images/${item.imgFolder}/${item.mainImg}`}
            alt={item.title}
            loading="lazy"
            style={{
              borderBottomLeftRadius: 2,
              borderBottomRightRadius: 2,
              display: "block",

              width: "100%",
            }}
          />
        </div>
      ))}
    </Masonry>
  </Box>
);
