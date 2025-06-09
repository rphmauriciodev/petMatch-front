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
import { PetButton } from "./PetButton";
import { useUser } from "contexts/UserContext";
import { useApi } from "hooks/useApi";
import { User } from "utils/types";
import { useEffect } from "react";

export const PageHeader = () => {
  const { user, setUser } = useUser();

  const { data: fetchedUser, refetch } = useApi<User>(
    user ? `users/${user.id}` : null
  );
  const menuOptions = [
    { label: "Home", href: "/" },
    { label: "Encontre seu PET", href: "/find-your-pet" },
    { label: "Sobre Nós", href: "/about-us" },
  ];

  if (user?.hasAdoption) {
    menuOptions.push({ label: "Pós - Adoção", href: "/post-adoption" });
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, [fetchedUser]);

  return (
    <Box
      className="header"
      sx={{
        textTransform: "uppercase",
        position: "fixed",
        width: "100%",
        left: 0,
        top: 0,
        zIndex: 100,
      }}
    >
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
            key={option.label}
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
        <PetButton title="Adote agora" onClick={() => navigate("/adopt-now")} />
      </Box>
    </Box>
  );
};
