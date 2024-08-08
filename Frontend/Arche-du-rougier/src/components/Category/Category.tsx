import "./Category.css";
// Définir l'interface pour les props
interface CategoryProps {
  id: string;
  title: string;
  image?: string;
}

const Category: React.FC<CategoryProps> = ({ id, title, image }) => {
  return (
    <div id={id} className="category">
      <p>{title}</p>
      {image && <img src={image} alt={title} className="image" />}
    </div>
  );
};

export default Category;
