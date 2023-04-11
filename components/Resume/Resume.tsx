"use client";

import { Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";

const mySkills = [
  `Good understanding basic technologies and principes like:
   HTML, CSS, SCSS, TailwindCSS, BEM`,
  `JavaScript, ES6, TypeScript`,
  `React, NextJS are my main tolls that i am using for creating my sites with 
  server-side-rendering, server-components and newest features in web development sphere`,
  `Have good understanding the main React princips like: optimization (useCallback, useMemo, memo),
  automatic batching, hook rules, SOLID, right data fetching (useQuery). 
  `,
  `I've had an expirience with different state managers like: Redux/Tollkit, Recoil, Zustand.
  But today i prefer to use simple React context instead any state manager. 
   `,
];

const Resume: FC = () => {
  return (
    <Stack direction="column">
      <Stack gap="30px" direction="row">
        <Stack minWidth="30%" direction="column">
          <Typography fontWeight="700" color="#5D3974" variant="h5">
            Start 2022 - 2025
          </Typography>
          <Typography fontWeight="700" variant="h6" pt="30px" color="#575757">
            My front-end skills
          </Typography>
        </Stack>
        <Divider
          sx={{
            width: "5px",
            background: "#A60AC7",
            boxShadow: "0px 4px 4px #A60AC7",
            borderRadius: "10px",
          }}
        />
        <Stack direction="column" gap="30px">
          <Typography variant="h5" fontWeight="700" pt="10px" color="#E8E8E8">
            Junior React Front-end Developer
          </Typography>
          {mySkills.map((skill, idx) => (
            <Typography
              key={idx}
              fontSize="14px"
              fontWeight="700"
              color="#E8E8E8"
              display="list-item"
            >
              {skill}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Resume;
