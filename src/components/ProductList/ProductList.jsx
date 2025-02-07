import { useStore } from '../../context/StoreContext';
 
export const ProductList = () => {
  const { products, loading, error } = useStore();
 
  if (loading) return <div className="text-center py-4">Loading products...</div>;
  if (error) return <div className="text-red-500 text-center py-4">Error: {error}</div>;
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg p-4 shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <p className="text-sm text-gray-500 mb-4">{product.category}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
