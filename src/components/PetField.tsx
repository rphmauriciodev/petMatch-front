import { TextField, TextFieldProps } from "@mui/material";

export const PetField = ({ sx, ...others }: TextFieldProps) => {
  return (
    <TextField
      variant="outlined"
      sx={{
        marginTop: "28px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderColor: "primary.main",
          borderRadius: "20px",
          backgroundColor: "#f5f5f5",
        },
        ...sx,
      }}
      {...others}
    />
  );
};
