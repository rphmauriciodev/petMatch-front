import { Box, Typography } from "@mui/material";

export const AboutUsPage = () => {

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
          Quem somos?
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 500, marginTop: "28px" }}>
          Na Pet Match, acreditamos que todo animal merece um lar cheio de amor.
          Somos uma plataforma criada para conectar pets que precisam de um novo
          lar com pessoas dispostas a dar carinho, cuidado e uma nova chance
          para esses companheiros fiéis. Nosso objetivo é facilitar o encontro
          entre animais resgatados, abandonados ou que precisam ser doados, com
          adotantes responsáveis e apaixonados por pets. Através de uma
          experiência simples, rápida e segura, ajudamos a transformar histórias
          e criar laços que duram uma vida inteira. Mais do que um site de
          adoção, somos uma comunidade movida pelo respeito à vida animal, à
          empatia e ao compromisso com o bem-estar de todos os envolvidos. Se
          você quer adotar, doar ou apoiar essa causa, a Pet Match é o lugar
          certo. Junte-se a nós e ajude a mudar vidas — uma adoção por vez. 🐾
        </Typography>
      </Box>
    </Box>
  );
};
