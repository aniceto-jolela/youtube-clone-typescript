import type { NextPage } from "next";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import { Box, Grid } from "@mui/material";
import VideoCard from "../components/Layout/videoCard";

const Home: NextPage = ({ data }: any) => {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item: any) => {
            <Grid key={item.id} item xl={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>;
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = [];

  return {
    props: {
      data: [],
    },
  };
}

export default Home;
