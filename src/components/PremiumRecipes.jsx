import { motion } from 'framer-motion';
import RecipeCard from './RecipeCard.jsx';

export default function PremiumRecipes({ recipes, onSave, savedIds }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {recipes.slice(0, 2).map((recipe) => (
          <motion.div key={recipe.id} whileHover={{ y: -4 }} className="overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-br from-amber-50 to-rose-50 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:from-slate-900/80 dark:to-slate-950/90">
            <div className="grid gap-4 sm:grid-cols-[0.9fr_0.6fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Premium</p>
                <h3 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{recipe.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{recipe.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 dark:bg-slate-800/80 dark:text-slate-200">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-amber-200 via-petal to-white p-4 shadow-inner">
                <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white/60 text-center text-slate-900 shadow-soft dark:bg-slate-800/80 dark:text-white">
                  <p className="text-sm uppercase tracking-[0.35em]">Visual</p>
                  <p className="mt-3 text-2xl font-semibold">Art</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">Placeholder for elegant photography</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-slate-700 dark:text-slate-300">{recipe.prepTime} · {recipe.difficulty}</div>
              <button onClick={() => onSave(recipe.id)} className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                {savedIds.includes(recipe.id) ? 'Saved' : 'Bookmark'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {recipes.slice(2).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onSave={onSave} saved={savedIds.includes(recipe.id)} />
        ))}
      </div>
    </div>
  );
}
