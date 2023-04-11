"use client";

import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <Stack direction="column" gap="30px">
      <Typography variant="h5" color="white" fontWeight="bold">
        Email: vadimmaster228@gmail.com
      </Typography>
      <Typography variant="h5" color="white" fontWeight="bold">
        Github: <Link target="_blank" href="https://github.com/slemchik03">slemchik_03</Link>
      </Typography>
    </Stack>
  );
};

export default Contact;
