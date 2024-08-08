import { useState, useEffect, useRef, useCallback } from "react";
import "./Event.css";

// Définition des props pour le composant Carousel
interface CarouselProps {
  images: string[]; // Tableau des chemins d'images à afficher
  interval?: number; // Intervalle de temps entre les changements d'image, optionnel
}

// Composant fonctionnel Event, qui accepte les props définies
const Event: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  // État pour suivre l'index de l'image actuelle affichée
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Référence pour stocker l'identifiant de l'intervalle de temps
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fonction pour passer à l'image suivante
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Fonction pour revenir à l'image précédente
  const previousSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Fonction pour réinitialiser l'intervalle de temps
  const resetInterval = useCallback(() => {
    // Nettoyer l'intervalle actuel, s'il existe
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Définir un nouvel intervalle avec la fonction nextSlide
    intervalRef.current = setInterval(nextSlide, interval);
  }, [interval, nextSlide]);

  // Effet pour démarrer l'intervalle lorsque le composant est monté ou lorsque les dépendances changent
  useEffect(() => {
    resetInterval(); // Démarrer l'intervalle initial

    // Nettoyer l'intervalle lors du démontage du composant
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, interval, resetInterval]); // Liste des dépendances de useEffect

  return (
    <div className="event">
      {/* Bouton pour passer à l'image précédente */}
      <button
        className="event-button"
        onClick={() => {
          previousSlide(); // Changer à l'image précédente
          resetInterval(); // Réinitialiser l'intervalle
        }}
      >
        &#10094; {/* Symbole de flèche gauche */}
      </button>
      {/* Conteneur des images avec le style de translation basé sur l'index courant */}
      <div
        className="event-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Liste des images affichées dans le carrousel */}
        {images.map((image, index) => (
          <div
            className={`event-slide ${index === currentIndex ? "active" : ""}`}
            key={index}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      {/* Bouton pour passer à l'image suivante */}
      <button
        className="event-button"
        onClick={() => {
          nextSlide(); // Changer à l'image suivante
          resetInterval(); // Réinitialiser l'intervalle
        }}
      >
        &#10095; {/* Symbole de flèche droite */}
      </button>
      {/* Conteneur pour les indicateurs de l'image courante */}
      <div className="event-indicators">
        {/* Liste des indicateurs pour chaque image */}
        {images.map((_, index) => (
          <div
            key={index}
            className={`event-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => {
              setCurrentIndex(index); // Changer à l'image correspondante à l'indicateur cliqué
              resetInterval(); // Réinitialiser l'intervalle
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Event;
