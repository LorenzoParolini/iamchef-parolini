import { useEffect, useRef } from 'react';
import RecipeCard from './recipe-card/RecipeCard';
import './Recipecarousel.css'
import type { RecipeCarouselProps } from '../../types';

function Recipecarousel({ recipes, onRecipeClick, currentIndex, setCurrentIndex }: RecipeCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll alla ricetta corrente quando cambia l'indice o si monta il componente
  useEffect(() => {
    if (carouselRef.current && recipes.length > 0) {
      const cardHeight = carouselRef.current.scrollHeight / recipes.length;
      carouselRef.current.scrollTo({
        top: cardHeight * currentIndex,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, recipes.length]);

  // Aggiorna currentIndex durante lo scroll manuale dell'utente
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const cardHeight = carousel.scrollHeight / recipes.length;
      const newIndex = Math.round(carousel.scrollTop / cardHeight);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < recipes.length) {
        setCurrentIndex(newIndex);
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [recipes.length, currentIndex, setCurrentIndex]);

  if (recipes.length === 0) {
    return (
      <div className="recipe-carousel">
        <div className="no-recipes">
          <p>nessuna ricetta trovata con questi ingredienti</p>
          <p>prova con altri ingredienti</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-carousel" ref={carouselRef}>
      {recipes.map((recipe, index) => (
        <RecipeCard 
          key={recipe.id}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe, index)}
        />
      ))}
    </div>
  );
}

export default Recipecarousel;
