import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Headers } from "./Headers";
import { AddOutline } from "./AddOutline";
import { ListItems } from "./ListItems";

export const DraggableList = () => {
  return (
    <>
      <Typography variant="h4" mt={2}>
        Draggable List
      </Typography>
      <Stack
        width="25%"
        border="1px solid black"
        m="auto"
        mt={5}
        p={2}
        textAlign="left"
      >
        <Headers />
        <ListItems />
        <AddOutline />
      </Stack>
    </>
  );
};
