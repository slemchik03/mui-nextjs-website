import { Grid, GridProps, styled } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const ContentImageGrid = styled((props: GridProps) => <Grid {...props} />)(
  ({ theme }) => ({
    position: "relative",
    zIndex: "0",
    height: "900px",
    width: "1200px",
    bottom: "20px",
    left: "-60px",
    [theme.breakpoints.down(980)]: {
      width: "440px",
      height: "350px",
      position: "absolute",
      bottom: "-50px",
      opacity: "0.6",
    },
  })
);

const ContentImage: FC = () => {
  return (
    <ContentImageGrid>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Image fill style={{ objectFit: "cover" }} src="/bg.png" alt="" />\
      </motion.div>
    </ContentImageGrid>
  );
};

export default ContentImage;
