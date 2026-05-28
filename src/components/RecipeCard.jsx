import { motion } from 'framer-motion';

function Stars({ value }) {
  return (
    <div className="flex items-center gap-1 text-sm text-amber-600">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < Math.round(value) ? 'opacity-100' : 'opacity-40'}>★</span>
      ))}
      <span className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-300">{value.toFixed(1)}</span>
    </div>
  );
}

export default function RecipeCard({ recipe, onSave, saved }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[32px] border border-white/50 bg-gradient-to-br from-white/70 via-amber-50/80 to-white/80 p-6 shadow-soft backdrop-blur-xl transition duration-500 hover:border-amber-200/80 hover:shadow-glow dark:border-slate-700/70 dark:from-slate-900/70 dark:via-slate-900/80 dark:to-slate-900/90">
      <div className="absolute inset-x-6 top-6 h-28 rounded-[28px] bg-amber-100/20 blur-2xl" />
      <div className="relative space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800 dark:bg-amber-300/15 dark:text-amber-200">{recipe.mealType}</span>
            <div className="mt-3 flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span>{recipe.cuisine}</span>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
          <button onClick={() => onSave(recipe)} className={`rounded-full px-3 py-2 text-sm font-semibold transition ${saved ? 'bg-amber-400 text-slate-950 shadow-glow' : 'border border-slate-200 bg-white text-slate-700 hover:bg-amber-100 dark:border-slate-700/80 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800'}`}>
            {saved ? '❤️ Saved' : 'Save'}
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{recipe.title}</h3>
            <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{recipe.calories}</span>
          </div>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{recipe.description}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-100/80 px-3 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{recipe.difficulty}</div>
          <div className="rounded-3xl bg-slate-100/80 px-3 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{recipe.prepTime}</div>
          <div className="rounded-3xl bg-slate-100/80 px-3 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{recipe.rating ? `${recipe.rating} ★` : 'New'}</div>
        </div>
        <Stars value={recipe.rating ?? 4.2} />
        <div className="flex flex-wrap gap-2">
          {recipe.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-300/15 dark:text-amber-200">{tag}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
