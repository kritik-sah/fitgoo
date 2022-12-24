import { Button } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import WebLayout from "../components/Layout/WebLayout";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavClose } from "../redux/website/Navigation/NavigationSlice";

export default function Home() {
  const navToggleState = useSelector((state) => state.navigation.isToggle);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(navToggleState);
    if (navToggleState) {
      dispatch(toggleNavClose());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WebLayout>
          <Hero />
        </WebLayout>
      </main>
    </>
  );
}
