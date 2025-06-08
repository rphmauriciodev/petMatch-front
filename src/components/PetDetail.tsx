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

export const PetsDetail = ({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) => {
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
          <Button
            variant="contained"
            size="large"
            // onClick={() => setOpen(!open)}
            sx={{
              fontWeight: 600,
              padding: "8px 16px",
              borderRadius: "20px",
              boxShadow: "none",
              marginTop: "8px",
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
            Adotar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
