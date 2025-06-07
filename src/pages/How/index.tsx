import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export const HowPage = () => {
  const etapasAdocao = [
    {
      index: 1,
      titulo: "Cadastre-se",
      descricao:
        "Preencha um formulário rápido com suas informações básicas. Isso nos ajuda a garantir que os pets sejam adotados por pessoas responsáveis e preparadas para cuidar com carinho.",
    },
    {
      index: 2,
      titulo: "Conheça os pets disponíveis",
      descricao:
        "Acesse nossa galeria e navegue por diversos animais que estão em busca de um novo lar. Cada pet tem um perfil com fotos, idade, porte, temperamento e outras informações importantes.",
    },
    {
      index: 3,
      titulo: "Escolha o seu match",
      descricao:
        "Se apaixonou por um pet? É só clicar e demonstrar interesse! Nossa equipe ou o responsável pela doação entrará em contato para seguir com o processo de adoção.",
    },
    {
      index: 4,
      titulo: "Pronto para começar uma nova história",
      descricao:
        "Após a aprovação, é só combinar os últimos detalhes e receber o novo membro da família com muito amor.",
    },
  ];

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
        <Typography variant="h2" color="secondary" sx={{ fontWeight: "bold" }}>
          Como funciona?
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 500, marginTop: "28px" }}>
          Adotar um pet nunca foi tão fácil e seguro!
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 500, marginTop: "28px" }}>
          Na{" "}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontWeight: "bold", display: "inline" }}
          >
            Pet Match
          </Typography>
          , criamos uma jornada simples e intuitiva para ajudar você a encontrar
          o companheiro ideal:
        </Typography>
        <List>
          {etapasAdocao.map((etapa) => (
            <ListItem
              key={etapa.index}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", width: "100%" }}>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  {etapa.index} -{" "}
                </Typography>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  {etapa.titulo}
                </Typography>
              </Box>
              <Typography variant="h6">{etapa.descricao}</Typography>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" sx={{ fontWeight: 500, marginTop: "28px" }}>
          Na Pet Match, unir lares cheios de amor a animais cheios de esperança
          é o que nos move. Vem fazer parte dessa transformação!
        </Typography>
      </Box>
    </Box>
  );
};
