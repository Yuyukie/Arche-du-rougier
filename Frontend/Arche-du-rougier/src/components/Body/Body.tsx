import Event from "../Event/Event";
import Category from "../Category/Category";
import "./Body.css";
import image1 from "../../assets/chevre-1.jpg";
import image2 from "../../assets/chevre-2.jpg";
import image3 from "../../assets/chevre-3.jpg";
import image4 from "../../assets/chevre-4.webp";
import image5 from "../../assets/chevre-5.webp";

function Body() {
  const images: string[] = [image1, image2, image3, image4, image5];

  return (
    <div className="body-event">
      <Category title="Nouveautés" />
      <Event images={images} />
      <Category title="L'arche du Rougier" />
      <Category title="A propos de nous" />
      <Category title="Contact" />
      <Category title="Tarifs" />
    </div>
  );
}

export default Body;
