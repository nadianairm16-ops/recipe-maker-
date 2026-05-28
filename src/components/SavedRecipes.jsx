import { motion } from 'framer-motion';
import RecipeCard from './RecipeCard.jsx';

export default function SavedRecipes({ savedRecipes, onSave }) {
  return (
    <div className="space-y-6 pb-16">
      <div className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Saved recipes</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Your personal cookbook is stored locally so you can revisit inspiration anytime.</p>
      </div>
      {savedRecipes.length ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {savedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onSave={onSave} saved={true} />
          ))}
        </motion.div>
      ) : (
        <div className="rounded-[32px] border border-dashed border-slate-300/60 bg-slate-50/80 p-10 text-center text-slate-600 shadow-soft dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300">
          <p className="text-lg font-semibold">No saved recipes yet.</p>
          <p className="mt-3 text-sm">Visit Discover or Premium to start collecting beautiful recipes.</p>
        </div>
      )}
    </div>
  );
}
