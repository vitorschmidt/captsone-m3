import { Container } from "./style";
import { useEffect } from "react";
import CardNoticia from "../CardNoticias";
import { useNoticia } from "../../Providers/Noticia";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
const ListNoticia = () => {
  //caso va utilizar a api fake
  // const { noticia, getNoticiaPropria } = useNoticia();
  // useEffect(() => {
  //     getNoticiaPropria();
  //   }, [getNoticiaPropria]);

  //api real

  const { noticia, getNoticia } = useNoticia();
  console.log(noticia);
  useEffect(() => {
    getNoticia();
  }, []);

  return (
    <Container>
      <Carousel selectedItem={30} showArrows={true}>
        {noticia.map((noticia, index) => (
          <CardNoticia key={index} noticia={noticia} />
        ))}
      </Carousel>
    </Container>
  );
};

export default ListNoticia;
