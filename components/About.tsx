import { Grid, styled, Typography, TypographyProps } from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";

interface AboutTypographyProps extends TypographyProps {}

const AboutDescribeTypography = styled((props: AboutTypographyProps) => (
  <Typography {...props} />
))(() => ({
  fontWeight: 700,
  color: "#C0C0C0",
}));

const AboutTitleTypography = styled((props: AboutTypographyProps) => (
  <Typography {...props} />
))(() => ({
  fontWeight: 700,
  fontSize: "52px",
  color: "#E8E8E8",
  lineHeight: "51px",
}));

const AboutUpTitleTypography = styled((props: AboutTypographyProps) => (
  <Typography {...props} />
))(() => ({
  color: "#5D3974",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "20px",
}));

const AboutDownTitleTypography = styled((props: AboutTypographyProps) => (
  <Typography {...props} />
))(() => ({
  fontWeight: 700,
  fontSize: "20px",
  color: "#575757",
  lineHeight: "14px",
}));

const About: FC = () => {
  return (
    <Stack
      fontFamily="'Roboto', sans-serif"
      sx={{zIndex: "2", width: "100%"}}
    >
      <Stack  direction="column">
        <AboutUpTitleTypography>Chef</AboutUpTitleTypography>
        <AboutTitleTypography>Front-end Developer</AboutTitleTypography>
        <AboutDownTitleTypography>
          Design & Development
        </AboutDownTitleTypography>
      </Stack>
      <Stack direction="column" gap="30px" pt="35px">
        <AboutDescribeTypography>
          An AI wizard, possesses a keen intellect and a natural affinity for
          technology. Constantly seeking out new ways to merge artificial
          intelligence with user interface design, they are a true innovator in
          their field.
        </AboutDescribeTypography>
        <AboutDescribeTypography>
          Leading a team of skilled designers and developers, they use their
          powers for good, striving to make the world a better place through
          exceptional user experiences. Whether it's crafting beautiful apps or
          designing seamless websites, no challenge is too great for them to
          tackle.
        </AboutDescribeTypography>
        <AboutDescribeTypography >
          With a deep understanding of the mystical arts of tech and design,
          always on the cutting-edge, seeking out new ways to improve and
          evolve. Join them on their journey to make a lasting impact on the
          world, one user at a time.
        </AboutDescribeTypography>
      </Stack>
    </Stack>
  );
};

export default About;
