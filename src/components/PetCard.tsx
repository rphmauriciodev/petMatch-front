import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pet } from "utils/types";

export default function PetCard({ pet }: { pet: Pet }) {
  const dataCadastro = new Date(pet.dataCadastro);
  const dia = String(dataCadastro.getDate()).padStart(2, "0");
  const mes = String(dataCadastro.getMonth() + 1).padStart(2, "0");
  const ano = dataCadastro.getFullYear();

  const fullData = `${dia}/${mes}/${ano}`;

  return (
    <Card sx={{ maxWidth: 345, width: "100%" }}>
      <CardMedia
        component="img"
        alt={pet.nome}
        height="320"
        image={pet.fotoBase64}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet.nome}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Idade: {pet.idade} {pet.idade > 1 ? "meses" : "mês"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Está conosco desde: {fullData}
        </Typography>
        <Button
          variant="contained"
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
      </CardContent>
    </Card>
  );
}
