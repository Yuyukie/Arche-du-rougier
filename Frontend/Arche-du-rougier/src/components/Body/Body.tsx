import Event from "../Event/Event";
import Category from "../Category/Category";
import "./Body.css";
import image1 from "../../assets/chevre-1.jpg";
import image2 from "../../assets/chevre-2.jpg";
import image3 from "../../assets/chevre-3.jpg";
import image4 from "../../assets/chevre-4.webp";
import image5 from "../../assets/chevre-5.webp";
import image6 from "../../assets/img-1.jpg";
import image7 from "../../assets/img-2.jpg";
import image8 from "../../assets/img-3.jpg";
import image9 from "../../assets/img-4.jpg";
import Section from "../Section/Section";

function Body() {
  const images: string[] = [image1, image2, image3, image4, image5];

  return (
    <div className="body-event">
      <Category title="Événements au sein de l'arche" image={undefined} />
      <Event images={images} />
      <Section title="Arche du Rougier" image={image6} />
      <Section title="A propos de nous" image={image7} reverse={true} />
      <Section title="Tarifs" image={image8} />
      <Section title="Nous retrouver" image={image9} reverse={true} />
    </div>
  );
}

export default Body;
