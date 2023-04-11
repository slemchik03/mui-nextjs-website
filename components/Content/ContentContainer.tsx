"use client";

import { Stack, StackProps, styled } from "@mui/material";
import { FC } from "react";

import ContentImage from "./ContentImage";

const ContentStack = styled((props: StackProps) => <Stack {...props} />)(
  ({ theme }) => ({
    height: "100%",
    paddingRight: "135px",
    justifyContent: "space-between",
    flexDirection: "row",
    [theme.breakpoints.down(1200)]: {
      paddingRight: "30px",
    },
    [theme.breakpoints.down(980)]: {
      justifyContent: "center",
      paddingRight: "0",
    },
  })
);

const ContentContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
      <ContentStack justifyContent="center" alignItems="center">
        <ContentImage />
        {children}
      </ContentStack>
  );
};

export default ContentContainer;
