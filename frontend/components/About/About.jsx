import React from "react";
import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { HiCurrencyRupee, HiFire } from "react-icons/hi2";
import Image from "next/image";

const About = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>Get Ready Adventurer</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            FitGoo is a digital platform which helps you to find ideal nearby
            gyms,Pools, health clubs for you, which you can use and pay only for
            those days where you hit the ground :p
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={HiFire} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Travel, Work or low on budget we got you covered"}
            />
            <Feature
              icon={
                <Icon as={HiCurrencyRupee} color={"green.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={'"Pay per day" or "Get a subscription"'}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Find gym nearby & use"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            className="rounded"
            alt="feature image"
            src={"/assets/images/lets-go-fitgoo-sq.jpg"}
            width={"500"}
            height="500"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default About;
