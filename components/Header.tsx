"use client";

import { Box, Stack, StackProps, styled, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import HeaderNav from "./HeaderNav";
import HeaderNavMobile from "./HeaderNavMobile";

const labels = ["About", "Resume", "Gallary", "Cetificates", "Contact"];

const HeaderStack = styled((props: StackProps) => <Stack {...props} />)(
  ({ theme }) => ({
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
      justifyContent: "center",
      gap: "35px",
      paddingBottom: "40px",
    },
  })
);

const Header: FC = () => {
  const [position, setPosition] = useState(0);
  const handleChange = useCallback((newValue: number) => {
    setPosition(newValue);
  }, []);

  return (
    <HeaderStack
      zIndex="2"
      mt="45px"
      px="20px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        zIndex="2"
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "'Phudu', cursive",
          color: "#E8E8E8",
        }}
      >
        Vadim Savin
      </Typography>
      
      {/* Show for mobile */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <HeaderNavMobile handleChange={handleChange} />
      </Box>
      {/* Hide for mobile */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <HeaderNav position={position} handleChange={handleChange} />
      </Box>

    </HeaderStack>
  );
};

export default Header;
