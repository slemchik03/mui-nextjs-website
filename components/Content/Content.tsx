"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";

const Content: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box maxWidth={"485px"} width="100%">
      <motion.div
        initial={{ translateX: "1000px", opacity: 0, width: "100%" }}
        animate={{ translateX: "0px", opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default Content;
