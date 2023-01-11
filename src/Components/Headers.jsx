import CloseIcon from "@mui/icons-material/Close";
import { Stack, Typography } from "@mui/material";

export const Headers = () => {
  return (
    <>
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="h6">Edit Outlines</Typography>
        <CloseIcon sx={{ cursor: "pointer", color: "#f1058f" }} />
      </Stack>
      <Typography variant="overline">Outlines</Typography>
    </>
  );
};
