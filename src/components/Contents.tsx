import { Box } from "@mui/material";
import FeedsCard from "./Cards/FeedsCard";

export default function Contents() {
  return (
    <div className="overflow-y-scroll">
      <FeedsCard/>
      <FeedsCard/>
      <FeedsCard/>
    </div>
  );
}
