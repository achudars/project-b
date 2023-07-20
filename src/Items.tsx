import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import bicycles from "./data/data.json";
import { ImageLabel } from "./ImageLabel.tsx";

export interface BicycleSpecifications {
  [key: string]: string;
}

export interface Bicycle {
  mainImg: string;
  imgFolder: string;
  title: string;
  subText: string;
  price: string;
  url: string;
  specifications: BicycleSpecifications;
}

export const Items = () => {
  return (
    <Box sx={{ width: 800, minHeight: 800 }}>
      <Masonry columns={1} spacing={2}>
        {(bicycles as unknown as Bicycle[]).map((item, index) => (
          <div
            key={index}
            style={{
              border: "8px solid tomato",
              borderRadius: "8px",
              padding: "8px",
              background: "#FFF",
            }}
          >
            <ImageLabel>{item.title}</ImageLabel>
            <img
              src={`./images/${item.imgFolder}/${item.mainImg}`}
              srcSet={`./images/${item.imgFolder}/${item.mainImg}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 2,
                borderBottomRightRadius: 2,
                borderRadius: "8px",
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};
