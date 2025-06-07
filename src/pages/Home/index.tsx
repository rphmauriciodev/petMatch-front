import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useApi } from "hooks/useApi";
import { Pet } from "utils/types";
import PetCard from "components/PetCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data: pets } = useApi("/pets/destaques");

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
        <TextField
          variant="outlined"
          placeholder="Buscar por nome, espécie, ou cidade"
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ marginRight: "4px", color: "#85868a" }} />
            ),
          }}
          sx={{
            marginTop: "28px",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderColor: "primary.main",
              borderRadius: "20px",
              backgroundColor: "#f5f5f5",
            },
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
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("find-your-pet")}
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
              width: "100%",
            }}
          >
            Ver todos os animais
          </Button>
          <Button
            onClick={() => navigate("/how-adopt")}
            variant="outlined"
            size="large"
            sx={{
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: 600,
              width: "100%",
            }}
            color="secondary"
          >
            Como funciona
          </Button>
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
