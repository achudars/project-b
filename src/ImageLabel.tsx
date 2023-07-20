import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const ImageLabel = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  marginBottom: "18px",
}));
