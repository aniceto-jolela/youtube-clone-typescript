import type { NextPage } from "next";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title='YouTube'>
      <h1>Clone Youtube @mui/material - TypeScript</h1>
      
      <Button variant="outlined" color="secondary">
        Clique-me
      </Button>
    </Layout>
  );
};

export default Home;
