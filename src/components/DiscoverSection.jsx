import { motion } from 'framer-motion';
import RecipeCard from './RecipeCard.jsx';

export default function DiscoverSection({ recipes, onSave, savedIds }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {recipes.map((recipe, index) => (
        <motion.div key={recipe.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
          <RecipeCard recipe={recipe} onSave={onSave} saved={savedIds.includes(recipe.id)} />
        </motion.div>
      ))}
    </div>
  );
}
