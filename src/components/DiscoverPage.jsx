import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { allRecipes, cuisineTypes, dietaryOptions, mealTypes } from '../data/recipes.js';
import RecipeFilters from './RecipeFilters.jsx';
import DiscoverSection from './DiscoverSection.jsx';

export default function DiscoverPage({ onSave, savedIds }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');
  const [selectedMeal, setSelectedMeal] = useState('All');

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((recipe) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || [recipe.title, recipe.description, ...(recipe.ingredients || [])].some((value) => value.toLowerCase().includes(query));
      const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
      const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
      const matchesDiet = selectedDiet === 'All' || recipe.tags?.some((tag) => tag.toLowerCase() === selectedDiet.toLowerCase());
      const matchesMeal = selectedMeal === 'All' || recipe.mealType === selectedMeal;
      return matchesSearch && matchesCuisine && matchesDifficulty && matchesDiet && matchesMeal;
    });
  }, [searchQuery, selectedCuisine, selectedDifficulty, selectedDiet, selectedMeal]);

  return (
    <section className="space-y-10 pb-16">
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Discover recipes faster</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">Use filters, search by ingredients, and find the perfect recipe for tonight.</p>
        </motion.div>
        <RecipeFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedDiet={selectedDiet}
          setSelectedDiet={setSelectedDiet}
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
          cuisines={[...new Set([...allRecipes.map((item) => item.cuisine), ...cuisineTypes])].filter(Boolean).sort()}
          dietaries={dietaryOptions}
          mealTypes={mealTypes}
        />
      </div>
      <div className="rounded-[32px] border border-white/30 bg-white/70 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-300">Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredRecipes.length}</span> recipes of <span className="font-semibold text-slate-900 dark:text-white">{allRecipes.length}</span></p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Refine your search using ingredients, difficulty, meal type, and dietary tags.</p>
        </div>
      </div>
      <DiscoverSection recipes={filteredRecipes} onSave={onSave} savedIds={savedIds} />
    </section>
  );
}
