import { Box, Typography } from "@mui/material";
import PetCard from "components/PetCard";
import { useApi } from "hooks/useApi";
import { Pet } from "utils/types";

export const PetsPage = () => {
  const { data: pets } = useApi<Pet[]>("/pets");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold" }}>
        Nossos Pets
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "28px",
          flexWrap: "wrap",
        }}
      >
        {pets?.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </Box>
    </Box>
  );
};
