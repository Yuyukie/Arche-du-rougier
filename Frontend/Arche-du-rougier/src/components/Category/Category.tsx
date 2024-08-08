import "./Category.css";
// Définir l'interface pour les props
interface CategoryProps {
  title: string;
}

const Category: React.FC<CategoryProps> = ({ title }) => {
  return (
    <div className="category">
      <p>{title}</p>
    </div>
  );
};

export default Category;
