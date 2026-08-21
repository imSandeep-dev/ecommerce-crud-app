import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import Button from "../components/Button";
import Loader from "../components/Loader";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Product not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await api.delete(`/products/${id}`);
      navigate("/");
    } catch (err) {
      alert("Failed to delete product.");
    }
  };

  if (loading) return <Loader />;
  if (error) return <p className="mx-auto max-w-7xl px-6 py-20 text-center font-semibold text-[#9f3d3d]">{error}</p>;

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:px-10 md:py-16">
      <Link to="/" className="mb-8 inline-flex text-sm font-bold text-[#60716c] hover:text-[#d45b3f]">← Back to collection</Link>
      <div className="grid overflow-hidden rounded-3xl border border-[#e1e4dc] bg-white shadow-[0_12px_40px_rgba(24,48,43,0.08)] md:grid-cols-2">
        <img src={product.imageUrl} alt={product.name} className="aspect-square h-full w-full object-cover" />
        <div className="flex flex-col justify-center p-7 md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d45b3f]">{product.category}</p>
          <h1 className="mt-4 text-4xl font-black leading-none tracking-tighter text-[#18302b] md:text-5xl">{product.name}</h1>
          <p className="mt-6 text-3xl font-black text-[#18302b]">₹{product.price.toLocaleString("en-IN")}</p>
          <p className="mt-5 leading-7 text-[#60716c]">{product.description}</p>
          <p className="mt-6 border-t border-[#e1e4dc] pt-5 text-sm font-bold text-[#60716c]">{product.stock > 0 ? `${product.stock} available now` : "Currently out of stock"}</p>

        <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="secondary" onClick={() => navigate("/")}>
          Back
        </Button>
        <Link to={`/products/${id}/edit`}>
          <Button variant="primary">Edit</Button>
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;