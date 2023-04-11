"use client";

import myWorksList from "@/utils/myWorksList";
import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import WorkItem from "./WorkItem";


const Works: FC = () => {
  return (
    <Box textAlign="center" sx={{ flexGrow: 1 }}>
      <Typography variant="h4" color="white" fontWeight="bold" pb="40px">
        Here is piece of my gihub repo:
      </Typography>
      <Grid container gap="40px" justifyContent="center">
          {
            myWorksList.map((work) => (
              <WorkItem {...work} />
            ))
          }
      </Grid>
    </Box>
  );
};

export default Works;
