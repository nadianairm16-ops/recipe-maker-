import { motion } from 'framer-motion';

export default function RecipeCard({ recipe, onSave, saved }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[32px] border border-white/50 bg-white/80 p-6 shadow-soft backdrop-blur-xl transition duration-500 hover:border-amber-200/70 dark:border-slate-700/70 dark:bg-slate-900/75">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-amber-50/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">{recipe.cuisine}</span>
          <button onClick={() => onSave(recipe)} className="rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-amber-100/90 dark:border-slate-700/80 dark:bg-slate-950/90 dark:text-slate-200">
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{recipe.title}</h3>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{recipe.description}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <span className="rounded-3xl bg-slate-100/80 px-3 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{recipe.difficulty}</span>
          <span className="rounded-3xl bg-slate-100/80 px-3 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{recipe.prepTime}</span>
          <span className="rounded-3xl bg-slate-100/80 px-3 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{recipe.calories}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {recipe.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-300/15 dark:text-amber-200">{tag}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
