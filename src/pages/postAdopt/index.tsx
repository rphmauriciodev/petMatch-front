import { Typography } from "@mui/material";
import { SimpleChat } from "components/SimpleChat";
import { useUser } from "contexts/UserContext";

export const PostAdoptPage = () => {
  const { user } = useUser();
  if (user?.hasAdoption) {
    return <SimpleChat />;
  } else {
    return (
      <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
        Página indisponível
      </Typography>
    );
  }
};
