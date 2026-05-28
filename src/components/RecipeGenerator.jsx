import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { cuisineTypes, dietaryOptions, generatorPresets, sampleRecipes } from '../data/recipes.js';

export default function RecipeGenerator({ onGenerate, generatedRecipe, onSave, savedIds }) {
  const [ingredients, setIngredients] = useState('');
  const [diet, setDiet] = useState('Vegetarian');
  const [cuisine, setCuisine] = useState('Italian');

  const presetText = useMemo(
    () => generatorPresets.map((item) => item.hint).join(', '),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const prompt = ingredients.trim().split(',').map((item) => item.trim()).filter(Boolean);
    const base = sampleRecipes[Math.floor(Math.random() * sampleRecipes.length)];
    const recipe = {
      id: `ai-generated-${Date.now()}`,
      title: `${diet} ${cuisine} Harmony`,
      description: `A comforting recipe created from ${prompt.join(', ')} with {dietaryOption} style and elegant plating.`,
      difficulty: 'Medium',
      prepTime: '40 min',
      calories: '470 kcal',
      cuisine,
      tags: [diet, cuisine, 'AI-assisted'],
      ingredients: prompt.length ? prompt : ['seasonal produce', 'herbs', 'bright citrus'],
      favorite: false,
    };

    recipe.description = recipe.description.replace('{dietaryOption}', diet.toLowerCase());
    onGenerate(recipe);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">Ingredients</label>
            <textarea
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              rows="4"
              placeholder={presetText}
              className="w-full rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Dietary Preference
              <select value={diet} onChange={(event) => setDiet(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100">
                {dietaryOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-900 dark:text-white">
              Cuisine Type
              <select value={cuisine} onChange={(event) => setCuisine(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100">
                {cuisineTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          <button type="submit" className="w-full rounded-3xl bg-gradient-to-r from-amber-400 to-orange-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 shadow-glow transition hover:scale-[1.01]">
            Generate recipe
          </button>
        </div>
      </motion.form>

      <div className="space-y-6">
        <div className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">AI preview</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Crafted in a cozy, premium tone, your recipe will arrive with rich detail, warm plating cues, and nourishing flavor notes.</p>
          <div className="mt-5 rounded-3xl border border-dashed border-slate-200/80 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700/70 dark:bg-slate-950/70 dark:text-slate-200">
            {generatedRecipe ? (
              <div className="space-y-3">
                <p className="font-semibold">{generatedRecipe.title}</p>
                <p>{generatedRecipe.description}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-700">Ingredients</p>
                <div className="flex flex-wrap gap-2">
                  {generatedRecipe.ingredients.map((ingredient) => (
                    <span key={ingredient} className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-800">{ingredient}</span>
                  ))}
                </div>
                <button onClick={() => onSave(generatedRecipe)} className="mt-4 rounded-3xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                  {savedIds.includes(generatedRecipe.id) ? 'Saved' : 'Save recipe'}
                </button>
              </div>
            ) : (
              <p className="text-slate-600 dark:text-slate-300">Start by entering ingredients, choosing your preference, and generating a recipe that feels premium and comforting.</p>
            )}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="rounded-[32px] border border-white/40 bg-gradient-to-br from-amber-50 to-white/70 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:from-slate-900/60 dark:to-slate-950/90">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Nutrition + tips</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <li className="rounded-3xl bg-white/80 p-4 dark:bg-slate-950/70">Use seasonal produce for brighter color and flavor.</li>
            <li className="rounded-3xl bg-white/80 p-4 dark:bg-slate-950/70">Balance creamy textures with crisp herbs for contrast.</li>
            <li className="rounded-3xl bg-white/80 p-4 dark:bg-slate-950/70">Swap one ingredient to keep the recipe pantry-friendly.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
