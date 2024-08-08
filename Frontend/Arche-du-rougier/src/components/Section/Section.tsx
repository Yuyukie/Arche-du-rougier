// Section.tsx
import React from "react";
import "./Section.css";
import Category from "../Category/Category";

interface SectionProps {
  title: string;
  image: string;
  reverse?: boolean; // Ajouter une prop pour inverser l'ordre
}

const Section: React.FC<SectionProps> = ({ title, image, reverse = false }) => {
  return (
    <div className={`section ${reverse ? "reverse" : ""}`}>
      <Category title={title} image={image} />
      <div className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, sequi
        ipsum? Vitae cumque at odit voluptate, vel laudantium nemo cupiditate
        quibusdam doloribus distinctio praesentium sint soluta, temporibus
        incidunt. Dolorem, non! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatum ab ea nostrum accusamus suscipit veritatis
        dolorem! Soluta cum deleniti id natus minima officia. Vero illo
        laudantium, quas velit voluptatum unde. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Distinctio, ipsa amet minus harum quas
        recusandae, consequatur voluptatibus sunt quaerat nam nisi nulla velit
        labore ipsam earum nostrum fugit officia iure.
      </div>
    </div>
  );
};

export default Section;
