import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useApi } from "hooks/useApi";
import { Pet } from "utils/types";
import PetCard from "components/PetCard";
import { useNavigate } from "react-router-dom";
import { PetButton } from "components/PetButton";
import { PetField } from "components/PetField";

const Home = () => {
  const { data: pets } = useApi<Pet[]>("/pets/destaques");

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            color="primary.dark"
            sx={{ fontWeight: "bold" }}
          >
            Encontre seu novo
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            sx={{ fontWeight: "bold" }}
          >
            melhor amigo
          </Typography>
        </Box>
        <Box>
          <Typography color="#4e5156" variant="h6" sx={{ marginTop: "28px" }}>
            Conectamos corações e animais que precisam de uma segunda chance.
            Simplifique o processo de adoção e transforme vidas
          </Typography>
        </Box>
        <PetField
          placeholder="Buscar por nome, espécie, ou cidade"
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ marginRight: "4px", color: "#85868a" }} />
            ),
          }}
        />
        <Box
          sx={{
            marginTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <PetButton
            title="Ver todos animais"
            onClick={() => navigate("/find-your-pet")}
            sx={{
              width: "100%",
            }}
          />
          <PetButton
            title="
            Como funciona"
            onClick={() => navigate("/how-adopt")}
            variant="outlined"
            size="large"
            sx={{ width: "100%" }}
            color="secondary"
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: "74px" }}></Box>
      <Box sx={{ maxWidth: "500px" }}>
        <Typography
          variant="h4"
          color="primary.dark"
          sx={{ fontWeight: "bold" }}
        >
          Animais em destaque
        </Typography>
        <Typography color="#4e5156" variant="h6" sx={{ marginTop: "28px" }}>
          Conheça alguns dos nossos amigos especiais que estão esperando por uma
          família amorosa
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "28px",
        }}
      >
        {pets?.map((pet: Pet) => (
          <PetCard pet={pet} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
