import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Pet } from "utils/types";
import { useState } from "react";
import { PetsDetail } from "./PetDetail";
import { Modal } from "@mui/material";
import { PetButton } from "./PetButton";

export default function PetCard({ pet }: { pet: Pet }) {
  const dataCadastro = new Date(pet.dataCadastro);
  const dia = String(dataCadastro.getDate()).padStart(2, "0");
  const mes = String(dataCadastro.getMonth() + 1).padStart(2, "0");
  const ano = dataCadastro.getFullYear();

  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  const fullData = `${dia}/${mes}/${ano}`;

  return (
    <>
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
          <PetButton
            title="Detalhes"
            color="secondary"
            onClick={() => setOpen(!open)}
            sx={{
              marginTop: "8px",
              padding: "8px 16px",
            }}
          />
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PetsDetail onClose={handleOpenModal} id={pet.id} />
      </Modal>
    </>
  );
}
