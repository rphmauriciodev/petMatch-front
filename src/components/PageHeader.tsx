import {
  Box,
  Button,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "../assets/css/styles.css";
import logo from "../assets/images/PetMatch.png";
import { useNavigate } from "react-router-dom";
export const PageHeader = () => {
  const menuOptions = [
    { label: "Home", href: "/" },
    { label: "Encontre seu PET", href: "/find-your-pet" },
    { label: "Sobre Nós", href: "/about-us" },
  ];

  const navigate = useNavigate();

  return (
    <Box className="header" sx={{ textTransform: "uppercase" }}>
      <IconButton
        id="MenuLogo"
        sx={{ "&:hover": { backgroundColor: "inherit" } }}
        color="primary"
      >
        <img src={logo} alt="PetMatch logo" />
      </IconButton>
      <List id="MenuOptions">
        {menuOptions.map((option) => (
          <ListItemButton
            onClick={(e) => {
              e.preventDefault();
              navigate(option.href);
            }}
            type="button"
            sx={{
              borderRadius: "8px",
              "&:hover": {
                background: "none",
              },
            }}
            href={option.href}
          >
            <ListItemText
              primary={option.label}
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: "600",
                  color: "#4e5156",
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Button
          variant="contained"
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
          }}
        >
          Adote agora
        </Button>
      </Box>
    </Box>
  );
};
