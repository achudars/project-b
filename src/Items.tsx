import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import items from "./data/data.json";
import {ImageLabel} from "./ImageLabel.tsx";


export const Items = () => (
    <Box sx={{width: 500, minHeight: 800}}>
        <Masonry
            columns={3} spacing={2}>
            {items.map((item, index) => (
                <div key={index}>
                    <ImageLabel>{index + 1}</ImageLabel>
                    <img
                        src={`${item.img}?w=162&auto=format`}
                        srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                        }}
                    />
                </div>
            ))}
        </Masonry>
    </Box>
);