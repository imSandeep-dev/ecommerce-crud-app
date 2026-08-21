import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import Button from "../components/Button";
import Loader from "../components/Loader";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setForm(res.data);
      } catch (err) {
        setError("Product not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/products/${id}`, form);
      navigate(`/products/${id}`);
    } catch (err) {
      setError("Failed to update product.");
    }
  };

  if (loading) return <Loader />;
  if (error) return <p className="mx-auto max-w-7xl px-6 py-20 text-center font-semibold text-[#9f3d3d]">{error}</p>;

  return (
    <main className="mx-auto max-w-2xl px-5 py-10 md:px-10 md:py-16">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d45b3f]">Refine the details</p>
      <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.06em] text-[#18302b]">Edit product</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-3xl border border-[#e1e4dc] bg-white p-6 shadow-[0_12px_40px_rgba(24,48,43,0.06)] md:p-8">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          className="w-full rounded-xl border border-[#d5ddd3] bg-[#fbfcf9] px-4 py-3 outline-none transition focus:border-[#d45b3f] focus:ring-2 focus:ring-[#d45b3f]/15"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="min-h-28 w-full rounded-xl border border-[#d5ddd3] bg-[#fbfcf9] px-4 py-3 outline-none transition focus:border-[#d45b3f] focus:ring-2 focus:ring-[#d45b3f]/15"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full rounded-xl border border-[#d5ddd3] bg-[#fbfcf9] px-4 py-3 outline-none transition focus:border-[#d45b3f] focus:ring-2 focus:ring-[#d45b3f]/15"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full rounded-xl border border-[#d5ddd3] bg-[#fbfcf9] px-4 py-3 outline-none transition focus:border-[#d45b3f] focus:ring-2 focus:ring-[#d45b3f]/15"
        />
        <input
          name="stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          placeholder="Stock quantity"
          className="w-full rounded-xl border border-[#d5ddd3] bg-[#fbfcf9] px-4 py-3 outline-none transition focus:border-[#d45b3f] focus:ring-2 focus:ring-[#d45b3f]/15"
        />
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full rounded-xl border border-[#d5ddd3] bg-[#fbfcf9] px-4 py-3 outline-none transition focus:border-[#d45b3f] focus:ring-2 focus:ring-[#d45b3f]/15"
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </main>
  );
}

export default EditProduct;