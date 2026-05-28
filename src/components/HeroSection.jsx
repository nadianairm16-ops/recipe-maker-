import { motion } from 'framer-motion';

const featureBadges = ['AI guided', 'Seasonal', 'Premium', 'Community'];

export default function HeroSection({ darkMode }) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/30 bg-[radial-gradient(circle_at_top_right,_rgba(255,210,180,0.25),_transparent_35%),linear-gradient(180deg,_#FFF5ED_0%,_#F5E3DA_100%)] p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-[radial-gradient(circle_at_top_right,_rgba(220,180,255,0.16),_transparent_35%),linear-gradient(180deg,_#201B27_0%,_#322B3D_100%)] sm:p-10">
      <div className="absolute left-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute right-0 top-20 h-40 w-40 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="inline-flex rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800 shadow-glow">
            Cozy menu
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }} className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Recipe Wonderlab — warm, premium cooking for the curious kitchen.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.55 }} className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Discover sumptuous recipes, generate custom menus with AI, and save your favorite culinary moments in a beautifully calm kitchen experience.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="flex flex-wrap gap-3">
            {featureBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/70 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/75">
          <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-amber-200/30 blur-2xl" />
          <div className="space-y-4">
            <div className="rounded-[32px] bg-gradient-to-br from-amber-100 via-petal to-rose-100 p-4 text-sm text-slate-900 shadow-glow">
              <p className="font-semibold">Today’s kitchen prompt</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">Use leftover peaches, ricotta, and honey to create a dessert that feels elegant and warm.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Prep time', 'Difficulty', 'Mood', 'Cuisine'].map((label, index) => (
                <div key={label} className="rounded-3xl border border-white/70 bg-white/80 p-4 text-sm dark:border-slate-700/80 dark:bg-slate-950/70">
                  <p className="font-semibold text-slate-900 dark:text-white">{label}</p>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{index === 0 ? '28 min' : index === 1 ? 'Easy' : index === 2 ? 'Cozy' : 'Fusion'}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -right-6 bottom-0 h-40 w-40 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="absolute bottom-6 left-6 hidden h-20 w-20 rounded-full bg-slate-900/15 blur-2xl dark:block" />
        </motion.div>
      </div>
    </section>
  );
}
