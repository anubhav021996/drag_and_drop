import AddIcon from "@mui/icons-material/Add";
import { Stack, Typography } from "@mui/material";

export const AddOutline = () => {
  return (
    <Stack
      direction="row"
      border="1px solid #873def"
      color="#873def"
      p={1}
      mt={1}
      gap={2}
      sx={{ cursor: "pointer" }}
    >
      <AddIcon />
      <Typography>Add Outline</Typography>
    </Stack>
  );
};
