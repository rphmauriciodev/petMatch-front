import { Button, ButtonProps } from "@mui/material";

export const PetButton = ({
  title,
  sx,
  ...others
}: { title: string } & ButtonProps) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        fontWeight: 600,
        padding: "8px 16px",
        borderRadius: "20px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        "&:focus": {
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
        },
        ...sx
      }}
      {...others}
    >
      {title}
    </Button>
  );
};
