import "./Category.css";
// Définir l'interface pour les props
interface CategoryProps {
  title: string;
  image?: string;
}

const Category: React.FC<CategoryProps> = ({ title, image }) => {
  return (
    <div className="category">
      <p>{title}</p>
      {image && <img src={image} alt={title} className="image" />}
    </div>
  );
};

export default Category;
