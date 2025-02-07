import { useStore } from '../../context/StoreContext';
 
export const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useStore();
 
  return (
    <div className="p-4">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border rounded p-2"
      >
        <option value="all">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};