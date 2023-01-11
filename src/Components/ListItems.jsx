import { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Stack, Typography } from "@mui/material";

const items = [
  "Shopping in Barcelona",
  "Famous Shopping Streets",
  "Shopping Malls",
  "Markets",
  "Opening Times",
  "Sales Tax Refunds",
  "You may also be interested in",
  "Where to Stay",
];

export const ListItems = () => {
  const [data, setData] = useState(items);
  const [startPoint, setStartPoint] = useState("");

  const swapList = (start, stop) => {
    let newList = [...data];
    let temp = newList.splice(start, 1);
    let remList = newList.splice(stop);
    newList.push(temp);
    newList = [...newList, ...remList];
    setData(newList);
  };

  return (
    <Stack p={1} sx={{ background: "#eceff1" }}>
      {data.map((e, i) => (
        <Stack
          draggable={true}
          p={1}
          key={i}
          direction="row"
          justifyContent="space-between"
          onDragStart={() => setStartPoint(i)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => swapList(startPoint, i)}
        >
          <Typography>{e}</Typography>
          <DragIndicatorIcon cursor="move" />
        </Stack>
      ))}
    </Stack>
  );
};
