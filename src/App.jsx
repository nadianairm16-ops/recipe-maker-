import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { communityChefs, premiumRecipes, recipeCategories, recipeTips, sampleRecipes, trendingRecipes } from './data/recipes.js';
import { isFirebaseConfigured, loadSavedState, saveState } from './firebase.js';
import DiscoverSection from './components/DiscoverSection.jsx';
import HeroSection from './components/HeroSection.jsx';
import PremiumRecipes from './components/PremiumRecipes.jsx';
import RecipeGenerator from './components/RecipeGenerator.jsx';
import RecipeCard from './components/RecipeCard.jsx';
import SavedRecipes from './components/SavedRecipes.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import SectionHeader from './components/SectionHeader.jsx';

function AppFrame({ children, darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'bg-[#1B171F] text-slate-100' : 'bg-[radial-gradient(circle_at_top_left,_rgba(255,222,193,0.35),_transparent_38%),linear-gradient(180deg,_#FFF7F0_0%,_#F4E7DE_100%)] text-slate-900'}`}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
      <div className="fixed right-4 bottom-6 z-30 flex items-center gap-3 rounded-full border border-white/15 bg-white/80 px-3 py-2 text-sm shadow-soft backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/70">
        <span className="text-slate-600 dark:text-slate-300">Mode</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full bg-amber-400 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-900 shadow-glow transition hover:scale-105"
        >
          {darkMode ? 'Warm' : 'Night'}
        </button>
      </div>
    </div>
  );
}

function Layout({ darkMode, setDarkMode, children }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-6 sm:px-6 lg:px-8">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/30 bg-white/70 px-5 py-4 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70 lg:flex-nowrap">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600">Recipe Wonderlab</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">Cozy premium cooking in every swipe.</h1>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
          {['Home', 'Discover', 'Generator', 'Saved', 'Premium', 'Profile'].map((page) => (
            <Link key={page} to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} className="rounded-full px-4 py-2 transition hover:bg-amber-100 hover:text-amber-700 dark:hover:bg-slate-700/60 dark:hover:text-amber-300">
              {page}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}

function Home({ onSave, savedIds, darkMode }) {
  const featured = sampleRecipes.slice(0, 3);

  return (
    <section className="space-y-10 pb-16">
      <HeroSection darkMode={darkMode} />
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <SectionHeader title="Community kitchen" subtitle="Homespun recipes curated for a warm table." />
          <div className="grid gap-5 sm:grid-cols-2">
            {featured.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onSave={onSave} saved={savedIds.includes(recipe.id)} />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/40 bg-white/70 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/70">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Weekly inspiration</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">A calm, curated cooking ritual for dreamy dinners and elegant brunches.</p>
            <div className="mt-6 space-y-4">
              {recipeTips.slice(0, 3).map((tip) => (
                <div key={tip.title} className="rounded-3xl border border-amber-100/80 bg-amber-50/80 p-4 dark:border-slate-700/60 dark:bg-slate-800/70">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{tip.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/30 bg-[rgba(255,255,255,0.55)] p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Featured chefs</h2>
            <div className="mt-5 grid gap-4">
              {communityChefs.slice(0, 3).map((chef) => (
                <div key={chef.name} className="flex items-center gap-4 rounded-3xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/70">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-700">{chef.initials}</div>
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">{chef.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{chef.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Discover({ onSave, savedIds }) {
  return (
    <section className="space-y-10 pb-16">
      <SectionHeader title="Discover" subtitle="Seasonal, trending and ingredient-led recipes to spark joy." />
      <DiscoverSection recipes={trendingRecipes} onSave={onSave} savedIds={savedIds} />
    </section>
  );
}

function Generator({ onGenerate, generatedRecipe, onSave, savedIds }) {
  return (
    <section className="space-y-10 pb-16">
      <SectionHeader title="AI Recipe Generator" subtitle="Tell the kitchen what you have, and watch a recipe bloom." />
      <RecipeGenerator onGenerate={onGenerate} generatedRecipe={generatedRecipe} onSave={onSave} savedIds={savedIds} />
    </section>
  );
}

function Premium({ onSave, savedIds }) {
  return (
    <section className="space-y-10 pb-16">
      <SectionHeader title="Premium Recipes" subtitle="Deluxe dishes for elegant moments and refined taste." />
      <PremiumRecipes recipes={premiumRecipes} onSave={onSave} savedIds={savedIds} />
    </section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState(() => JSON.parse(localStorage.getItem('wonderlab-saved') || '[]'));
  const [generatedRecipe, setGeneratedRecipe] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('wonderlab-theme');
    if (stored) setDarkMode(stored === 'dark');

    if (isFirebaseConfigured) {
      loadSavedState('guest').then((data) => {
        if (data?.savedRecipes) setSavedRecipes(data.savedRecipes);
        if (typeof data?.theme === 'string') setDarkMode(data.theme === 'dark');
      });
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('wonderlab-saved', JSON.stringify(savedRecipes));
    if (isFirebaseConfigured) {
      saveState('guest', { savedRecipes, theme: darkMode ? 'dark' : 'warm' });
    }
  }, [savedRecipes, darkMode]);

  useEffect(() => {
    localStorage.setItem('wonderlab-theme', darkMode ? 'dark' : 'warm');
  }, [darkMode]);

  const handleSave = (recipe) => {
    setSavedRecipes((current) => {
      const exists = current.some((item) => item.id === recipe.id);
      if (exists) return current.filter((item) => item.id !== recipe.id);
      return [...current, recipe];
    });
  };

  const handleGenerate = (recipe) => {
    setGeneratedRecipe(recipe);
  };

  const savedIds = useMemo(() => savedRecipes.map((recipe) => recipe.id), [savedRecipes]);


  return (
    <HashRouter>
      <AppFrame darkMode={darkMode} setDarkMode={setDarkMode}>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            <Route path="/" element={<Home onSave={handleSave} savedIds={savedIds} darkMode={darkMode} />} />
            <Route path="/discover" element={<Discover onSave={handleSave} savedIds={savedIds} />} />
            <Route path="/generator" element={<Generator onGenerate={handleGenerate} generatedRecipe={generatedRecipe} onSave={handleSave} savedIds={savedIds} />} />
            <Route path="/saved" element={<SavedRecipes savedRecipes={savedRecipes} onSave={handleSave} />} />
            <Route path="/premium" element={<Premium onSave={handleSave} savedIds={savedIds} />} />
            <Route path="/profile" element={<ProfilePage darkMode={darkMode} />} />
          </Routes>
        </Layout>
      </AppFrame>
    </HashRouter>
  );
}

export default App;
