import {
  Box,
  Button,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useApi } from "hooks/useApi";
import CloseIcon from "@mui/icons-material/Close";
import { PetDetail } from "utils/types";
import { useNavigate } from "react-router-dom";
import { PetButton } from "./PetButton";

export const PetsDetail = ({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const { data: pet } = useApi<PetDetail>(`pets/${id}`);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
        width: "100%",
        outline: "none",
        maxWidth: "520px",
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8 }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h4">{pet?.nome}</Typography>
      <Divider />
      <Box sx={{ marginTop: "12px" }}>
        <CardMedia
          sx={{ borderRadius: "8px" }}
          component="img"
          alt={pet?.nome}
          height="480"
          image={pet?.fotoBase64}
        />
        <Box sx={{ marginTop: "12px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Gênero:{" "}
            <Typography variant="h6" component="span">
              {pet?.genero}
            </Typography>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Cor:{" "}
            <Typography variant="h6" component="span">
              {pet?.cor}
            </Typography>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Raça:{" "}
            <Typography variant="h6" component="span">
              {pet?.raca ?? "Não definida"}
            </Typography>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            História:{" "}
            <Typography variant="h6" component="span">
              {pet?.historia}
            </Typography>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Qualidades:{" "}
            <Typography variant="h6" component="span">
              {pet?.qualidades}
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "12px",
            display: "flex",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <PetButton
            title="Adotar"
            onClick={() => navigate(`/adopt-now?pet=${pet?.id}`)}
          />
        </Box>
      </Box>
    </Box>
  );
};
