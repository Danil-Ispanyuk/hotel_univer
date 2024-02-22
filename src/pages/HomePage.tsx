import React, { useEffect, useState } from "react";
import { AppLayout } from "../layouts/AppLayout";
import {
  Advantages,
  FormSection,
  GallerySection,
  Introduction,
  RoomsSection,
  Services,
  Welcome,
} from "../containers";
import { Footer } from "../components";
import * as Styled from "./style";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const HomePage = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  if (windowDimensions.width < 1440) {
    return (
      <Styled.Container>
        <Styled.Text>Мобільна версія в розробці, будь-ласка скористайтесь веб-додатком через компʼютер</Styled.Text>
      </Styled.Container>
    );
  }

  return (
    <AppLayout>
      <Introduction />
      <Welcome />
      <Advantages />
      <Services />
      <GallerySection />
      <RoomsSection />
      <FormSection />
      <Footer />
    </AppLayout>
  );
};
