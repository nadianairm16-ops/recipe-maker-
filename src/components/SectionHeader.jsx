import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="space-y-3 rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70">
      <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </motion.h2>
      <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{subtitle}</p>
    </div>
  );
}
