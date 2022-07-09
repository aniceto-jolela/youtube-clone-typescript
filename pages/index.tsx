import type { NextPage } from "next";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Clone Youtube @mui/material - TypeScript</h1>

      <Button variant="outlined" color="secondary">
        Clique-me
      </Button>
    </div>
  );
};

export default Home;
