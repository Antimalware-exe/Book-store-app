import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      height={500}
    >
      <Typography variant="h5">
        This application is build to practice MERN stack and apply CRUD
        operation.
      </Typography>
      <Typography variant="h5">
        Contact developer in case of any suggestions or queries via github
      </Typography>
      <Typography variant="h6">
       https://github.com/Antimalware-exe
      </Typography>
    </Box>
  );
};

export default About;
