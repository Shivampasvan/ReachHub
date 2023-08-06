import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Bestbuy = () => {
  return (
    <>
      <Link>
        <Box marginY={"40px"} marginX={"20px"}>
          <Image
            border={"1px solid silver"}
            width={"100%"}
            margin={"auto"}
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/da63a8ba-7f7c-4eda-91a5-ca42ec7d5036.gif"
          />
        </Box>
      </Link>
    </>
  );
};
