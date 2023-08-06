import { Box, Image, Link, Tag, Text } from "@chakra-ui/react";
import React from "react";

const Bodyfourchildcard = ({ src, OFF, Product, Price, SPrice }) => {
  return (
    <>
      <Link 
      // border={"2px solid red"}
        fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
        textDecoration={"none!important"}
        // pb={"-50px"}
      >
        <Box mb={4}>
          <Image src={src} w={"100%"} h={"250"} />
        </Box>
        <Box gap={2}>
          <Box lineHeight="1.5">
            {OFF ? (
              <Tag
                variant="solid"
                px={5}
                bg="rgb(254,189,105)"
                color={"black"}
                borderRadius="5"
              >
                {OFF} OFF
              </Tag>
            ) : (
              ""
            )}
            <Text fontSize="14px" fontWeight={400}>
              {Product}
            </Text>
            {SPrice ? (
              <Text as="s" fontSize="14px" color={"gray"}>
                {SPrice}
              </Text>
            ) : (
              ""
            )}
            <Text fontWeight={400} fontSize="15px">
              {Price}
            </Text>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default Bodyfourchildcard;
