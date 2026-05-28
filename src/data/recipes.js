export const sampleRecipes = [
  {
    id: 'golden-pancake-tower',
    title: 'Golden Pancake Tower',
    description: 'A light, regal stack layered with honey cream and edible petals.',
    difficulty: 'Medium',
    prepTime: '35 min',
    calories: '420 kcal',
    rating: 4.8,
    servings: 2,
    cuisine: 'Brunch',
    mealType: 'Breakfast',
    tags: ['Breakfast', 'Luxury', 'Floral', 'Quick'],
    ingredients: ['flour', 'milk', 'honey', 'vanilla', 'edible flowers'],
    favorite: false,
  },
  {
    id: 'royal-truffle-pasta',
    title: 'Royal Truffle Pasta',
    description: 'Silky pasta in a fragrant truffle cream with microgreens.',
    difficulty: 'Hard',
    prepTime: '45 min',
    calories: '620 kcal',
    rating: 4.9,
    servings: 4,
    cuisine: 'Italian',
    mealType: 'Dinner',
    tags: ['Dinner', 'Gourmet', 'Rich', 'Comfort'],
    ingredients: ['pasta', 'cream', 'truffle oil', 'parmesan', 'microgreens'],
    favorite: false,
  },
  {
    id: 'diamond-milkshake',
    title: 'Diamond Milkshake',
    description: 'Sparkling vanilla and berry milkshake served with sugar crystals.',
    difficulty: 'Easy',
    prepTime: '10 min',
    calories: '360 kcal',
    rating: 4.5,
    servings: 1,
    cuisine: 'Dessert',
    mealType: 'Drink',
    tags: ['Sweet', 'Drink', 'Glam', 'Quick'],
    ingredients: ['milk', 'vanilla', 'berries', 'cream', 'sugar crystals'],
    favorite: false,
  },
  {
    id: 'galaxy-rainbow-cake',
    title: 'Galaxy Rainbow Cake',
    description: 'Layers of dreamy velvet cake with shimmering buttercream.',
    difficulty: 'Medium',
    prepTime: '70 min',
    calories: '540 kcal',
    rating: 4.6,
    servings: 8,
    cuisine: 'Bakery',
    mealType: 'Dessert',
    tags: ['Celebration', 'Colorful', 'Dessert', 'Party'],
    ingredients: ['flour', 'eggs', 'butter', 'food coloring', 'cream cheese'],
    favorite: false,
  },
  {
    id: 'luxury-lava-dessert',
    title: 'Luxury Lava Dessert',
    description: 'Molten chocolate cake with caramel pearls and gold dust.',
    difficulty: 'Medium',
    prepTime: '40 min',
    calories: '610 kcal',
    rating: 4.7,
    servings: 2,
    cuisine: 'Dessert',
    mealType: 'Dessert',
    tags: ['Decadent', 'Rich', 'Warm', 'Romantic'],
    ingredients: ['dark chocolate', 'butter', 'eggs', 'sugar', 'caramel pearls'],
    favorite: false,
  },
];

export const premiumRecipes = [
  ...sampleRecipes,
  {
    id: 'sunset-saffron-risotto',
    title: 'Sunset Saffron Risotto',
    description: 'Silken arborio infused with saffron and citrus zest.',
    difficulty: 'Hard',
    prepTime: '55 min',
    calories: '540 kcal',
    rating: 4.9,
    servings: 3,
    cuisine: 'Mediterranean',
    mealType: 'Dinner',
    tags: ['Elegant', 'Comfort', 'Saffron', 'Fine Dining'],
    ingredients: ['arborio rice', 'saffron', 'white wine', 'parmesan', 'lemon'],
    favorite: false,
  },
];

export const trendingRecipes = [
  {
    id: 'honey-roasted-fig-toast',
    title: 'Honey Roasted Fig Toast',
    description: 'Crunchy bread topped with ricotta, figs, and toasted seeds.',
    difficulty: 'Easy',
    prepTime: '20 min',
    calories: '320 kcal',
    rating: 4.4,
    servings: 2,
    cuisine: 'Brunch',
    mealType: 'Breakfast',
    tags: ['Trendy', 'Fresh', 'Savory-sweet', 'Healthy'],
    ingredients: ['bread', 'ricotta', 'figs', 'honey', 'seeds'],
  },
  {
    id: 'spiced-coconut-broth',
    title: 'Spiced Coconut Broth',
    description: 'Warm broth with ginger, lime, and coconut cream.',
    difficulty: 'Easy',
    prepTime: '25 min',
    calories: '210 kcal',
    rating: 4.7,
    servings: 3,
    cuisine: 'Asian',
    mealType: 'Dinner',
    tags: ['Healthy', 'Comforting', 'Light', 'Vegan'],
    ingredients: ['coconut milk', 'ginger', 'lime', 'broth', 'cilantro'],
  },
  {
    id: 'paprika-roasted-carrots',
    title: 'Paprika Roasted Carrots',
    description: 'Carrots glazed with orange honey and toasted almonds.',
    difficulty: 'Easy',
    prepTime: '30 min',
    calories: '200 kcal',
    rating: 4.6,
    servings: 4,
    cuisine: 'Vegetarian',
    mealType: 'Side',
    tags: ['Seasonal', 'Garden', 'Side Dish', 'Gluten-Free'],
    ingredients: ['carrots', 'orange', 'honey', 'paprika', 'almonds'],
  },
];

export const allRecipes = [
  ...sampleRecipes,
  ...trendingRecipes,
  ...premiumRecipes.filter((recipe) => !sampleRecipes.some((item) => item.id === recipe.id)),
];

export const mealTypes = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Side', 'Drink'];

export const communityChefs = [
  { name: 'Mariela C.', specialty: 'Cozy brunch rituals', initials: 'MC' },
  { name: 'André Holt', specialty: 'Luxury dessert styling', initials: 'AH' },
  { name: 'Sora Kim', specialty: 'Seasonal ingredient magic', initials: 'SK' },
];

export const recipeCategories = ['Global', 'Seasonal', 'Terracotta', 'Bloom', 'Golden'];

export const dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Low-Carb', 'Pescatarian'];

export const recipeTips = [
  { title: 'Warm your pans first', description: 'A gentle preheat brings out the aroma of spices and creates crisp edges.' },
  { title: 'Layer with texture', description: 'Build dishes with creamy, crunchy, and bright elements for cozy balance.' },
  { title: 'Finish with fresh herbs', description: 'A sprig of greenery adds elegance and a final burst of flavor.' },
];

export const cuisineTypes = ['Italian', 'French', 'Japanese', 'Mediterranean', 'American', 'Fusion'];

export const generatorPresets = [
  { name: 'Comfort Feast', hint: 'mushrooms, cream, thyme' },
  { name: 'Bright Garden', hint: 'tomatoes, basil, ricotta' },
  { name: 'Elegant Dinner', hint: 'truffle, pasta, parmesan' },
];
