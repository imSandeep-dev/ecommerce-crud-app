import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Button from "../components/Button";

const initialForm = {
  name: "",
  description: "",
  price: "",
  category: "",
  stock: "",
  imageUrl: "",
};

function AddProduct() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.post("/products", form);
      navigate("/");
    } catch (err) {
      setError("Failed to add product. Check the fields and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-5 py-10 md:px-10 md:py-16">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d45b3f]">Add to the shelf</p>
      <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.06em] text-[#18302b]">New product</h1>
      <p className="mt-4 text-[#60716c]">Give a useful object a place in the collection.</p>
      {error && <p className="mt-6 rounded-xl bg-[#f7e7e3] px-4 py-3 font-semibold text-[#9f3d3d]">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-3xl border border-[#e1e4dc] bg-white p-6 shadow-[0_12px_40px_rgba(24,48,43,0.06)] md:p-8">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          className="w-full rounded-xl border border-[#d5ddd3] bg-[#fbfcf9] px-4 py-3 outline-none transition focus:border-[#d45b3f] focus:ring-2 focus:ring-[#d45b3f]/15"
          required
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
          required
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
        <Button type="submit" disabled={submitting}>
          {submitting ? "Adding..." : "Add Product"}
        </Button>
      </form>
    </main>
  );
}

export default AddProduct;