import { motion } from 'framer-motion';

export default function RecipeFilters({ searchQuery, setSearchQuery, selectedCuisine, setSelectedCuisine, selectedDifficulty, setSelectedDifficulty, selectedDiet, setSelectedDiet, selectedMeal, setSelectedMeal, cuisines, dietaries, mealTypes }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-900 dark:text-white">Search by ingredient or keyword</label>
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Chicken, garlic, healthy, quick"
            className="w-full rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-slate-900 dark:text-white">
            Cuisine
            <select value={selectedCuisine} onChange={(event) => setSelectedCuisine(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100">
              <option value="All">All</option>
              {cuisines.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold text-slate-900 dark:text-white">
            Meal type
            <select value={selectedMeal} onChange={(event) => setSelectedMeal(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100">
              <option value="All">All</option>
              {mealTypes.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold text-slate-900 dark:text-white">
            Difficulty
            <select value={selectedDifficulty} onChange={(event) => setSelectedDifficulty(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100">
              <option value="All">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-slate-900 dark:text-white">
            Dietary
            <select value={selectedDiet} onChange={(event) => setSelectedDiet(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100 dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100">
              <option value="All">All</option>
              {dietaries.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </motion.div>
  );
}
