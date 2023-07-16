import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import items from "./data/data.json";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Label = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));


export const Items = () => (
    <Box sx={{width: 500, minHeight: 800}}>
        <Masonry
            columns={3} spacing={2}>
            {items.map((item, index) => (
                <div key={index}>
                    <Label>{index + 1}</Label>
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