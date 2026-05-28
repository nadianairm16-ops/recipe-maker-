import { motion } from 'framer-motion';
import { communityChefs, recipeCategories } from '../data/recipes.js';

export default function ProfilePage({ darkMode }) {
  return (
    <section className="space-y-8 pb-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-amber-600">Profile</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Your kitchen atelier.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">A calm hub for recipe collections, taste preferences, and luxury cooking notes.</p>
          </div>
          <div className="rounded-3xl border border-amber-100/80 bg-amber-50 px-6 py-5 text-sm text-slate-900 shadow-glow dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-white">
            <p className="font-semibold">Experience</p>
            <p className="mt-2">Warm, premium, and cozy—built for a polished culinary lifestyle.</p>
          </div>
        </div>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Cooking attitude</h3>
          <div className="mt-5 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-950/70">
              <p className="font-semibold text-slate-900 dark:text-white">Favorite cuisine</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Modern fusion with soulful comfort.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-950/70">
              <p className="font-semibold text-slate-900 dark:text-white">Preferred pace</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Slow, mindful prep with luxe touches.</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Collections</h3>
          <div className="mt-5 grid gap-3">
            {recipeCategories.map((category) => (
              <div key={category} className="rounded-3xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-950/70 dark:text-slate-200">
                {category}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Community highlights</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {communityChefs.map((chef) => (
            <div key={chef.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 text-center dark:border-slate-700/70 dark:bg-slate-950/70">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-lg font-semibold text-amber-800 dark:bg-amber-300/15 dark:text-amber-200">
                {chef.initials}
              </div>
              <p className="font-semibold text-slate-900 dark:text-white">{chef.name}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{chef.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
