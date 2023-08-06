import { Box, Flex, Image, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Bodyfourchildcard from "./Bodyfourchildcard";

const Details = [
  {
    src: "https://img.freepik.com/premium-psd/kids-fashion-sale-social-media-banner_118099-390.jpg?w=360",
    OFF: "Upto 25% ",
    Product: "Cool Summer Tshirts",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kids-fashion-sale-poster-template-67fc3c6c32ff01cf79d73035095f6d4e_screen.jpg?ts=1636970570",
    OFF: "Upto 50% ",
    Product: "Kids Track Pants",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://img.freepik.com/premium-psd/kids-fashion-sale-social-media-banner_118099-389.jpg?w=360",
    OFF: "Upto 30% ",
    Product: "Trending Tshirts",
    Price: "",
    SPrice: "",
  },

  {
    src: "https://mikimiette.com/cdn/shop/files/Mobile-Banner-15-Launch_300x.jpg?v=1679276908",
    OFF: "Upto 15% ",
    Product: "New Arrival",
    Price: "",
    SPrice: "",
  },
];
//https://i.ytimg.com/vi/HdgOjHr0nx0/maxresdefault.jpg
const Bodyeightcard = () => {
  return (
    <Flex bg={"white"} justifyContent={"space-around"}>
      <Box display={{ base: "none", lg: "block" }}>
        <Image
          height={"300px"}
          width="450px"
          src="https://cdn.dribbble.com/users/2185384/screenshots/6862263/kids_sale_banner.gif"
        />
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        // justifyContent={{ base: "center", sm: "center" }}
        align="center"
        gap={7}
      >
        {Details.map((el) => (
          <Bodyfourchildcard key={el.Product} {...el} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Bodyeightcard;
