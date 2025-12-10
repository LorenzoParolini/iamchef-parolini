import { useEffect, useRef } from 'react';
import RecipeCard from './recipe-card/RecipeCard';
import './Recipecarousel.css'
import type { RecipeCarouselProps } from '../../types';

function Recipecarousel({ recipes, onRecipeClick, currentIndex, setCurrentIndex, selectedRecipe }: RecipeCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Quando l'indice della ricetta corrente cambia (ad esempio dopo uno swipe o un click),
  // facciamo scrollare il carousel in modo fluido fino a mostrare la card giusta.
  useEffect(() => {
    if (carouselRef.current && recipes.length > 0) {
      const cardHeight = carouselRef.current.scrollHeight / recipes.length;
      carouselRef.current.scrollTo({
        top: cardHeight * currentIndex,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, recipes.length]);

  // gestione dello scrolling
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollTimeout: number;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cardHeight = carousel.scrollHeight / recipes.length;
        const newIndex = Math.round(carousel.scrollTop / cardHeight);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < recipes.length) {
          setCurrentIndex(newIndex);
        }
      }, 150);
    };
    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimeout);
      carousel.removeEventListener('scroll', handleScroll);
    };
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
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id}
          recipe={recipe}
          onClick={onRecipeClick}
          selectedRecipe={selectedRecipe}
        />
      ))}
    </div>
  );
}

export default Recipecarousel;
