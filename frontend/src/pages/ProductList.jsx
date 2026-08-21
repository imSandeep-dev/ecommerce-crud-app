import { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setError("Failed to load products. Is the backend running?");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="mx-auto max-w-7xl px-6 py-20 text-center font-semibold text-[#9f3d3d]">{error}</p>;

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-16">
      <section className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#d45b3f]">The good shelf</p>
          <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#18302b] md:text-7xl">Useful things, beautifully chosen.</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#60716c]">A small collection of everyday objects made to earn their place in your home, desk, and weekend bag.</p>
        </div>
        <div className="border-l-2 border-[#d45b3f] pl-5 text-sm text-[#60716c]">
          <p className="font-black text-[#18302b]">{products.length} objects</p>
          <p>Ready to find a home.</p>
        </div>
      </section>
      {products.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-[#cbd4cb] bg-white p-10 text-center text-[#60716c]">No products yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default ProductList;