import { Fragment } from "react/jsx-runtime";
import { PageHeader } from "./PageHeader";
import { ReactNode } from "react";
import { Box } from "@mui/material";

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <PageHeader />
      <Box
        sx={{
          marginTop: "80px",
          marginBottom: "80px",
        }}
      >
        {children}
      </Box>
    </Fragment>
  );
};
