import { Box, Typography } from "@mui/material";
import { AdoptionForm } from "components/AdoptForm";
import PetCard from "components/PetCard";
import { useApi } from "hooks/useApi";
import { useSearchParams } from "react-router-dom";
import { PetDetail } from "utils/types";

export const AdoptNowPage = () => {
  const [searchParams] = useSearchParams();

  const petId = searchParams.get("pet");

  const { data: pet } = useApi<PetDetail>(petId ? `pets/${petId}` : null);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          maxWidth: "768px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          color="primary.dark"
          sx={{ fontWeight: "bold" }}
        >
          Adote agora!
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 500, marginTop: "28px" }}
        ></Typography>
        <AdoptionForm pet={pet}/>
      </Box>
    </Box>
  );
};
