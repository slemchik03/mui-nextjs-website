"use client";

import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  img: string;
  title: string;
  stack: string[];
  repoUrl: string;
}

const WorkItem: FC<IProps> = ({ img, title, stack, repoUrl }) => {
  return (
    <Link href={repoUrl} target="_blank">
      <Grid
        item
        position="relative"
        bgcolor="white"
        width="222px"
        height="223px"
        borderRadius="30px"
        sx={{ cursor: "pointer" }}
      >
        <Image
          fill
          style={{ objectFit: "cover", borderRadius: "30px" }}
          src={img}
          alt="work img"
        />
        <Stack
          position="absolute"
          sx={{
            borderRadius: "30px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            paddingX: "10px",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            opacity: 0,
            background: "rgba(64, 33, 102, 0.79)",
            transition: "0.2s all ease-in-out",
            "&:hover": {
              opacity: "1",
              transition: "0.2s all ease-in-out",
            },
          }}
        >
          <Typography color="white" fontSize="20px" fontWeight="bold">
            {title}
          </Typography>
          <Typography color="white" fontSize="18px" fontWeight="bold">
            {stack.reduce((acc, item) => acc + item + ", ", "")}
          </Typography>
        </Stack>
      </Grid>
    </Link>
  );
};

export default WorkItem;
