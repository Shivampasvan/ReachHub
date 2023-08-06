import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Trendingdeals = () => {
  return (
    <>
      <Link>
        <Box marginY={"40px"} marginX={"20px"}>
          <Image
            border={"1px solid silver"}
            width={"100%"}
            margin={"auto"}
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5a134acc-3112-4df4-b231-7b4a37772544.gif"
          />
        </Box>
      </Link>
    </>
  );
};
