import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const lowStock = product.stock > 0 && product.stock <= 5;
  const outOfStock = product.stock === 0;

  return (
    <div className="group overflow-hidden rounded-2xl border border-[#e1e4dc] bg-white shadow-[0_8px_30px_rgba(24,48,43,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(24,48,43,0.12)]">
      <div className="relative aspect-4/3 overflow-hidden bg-[#e9ede5]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {outOfStock && (
            <span className="absolute right-3 top-3 rounded-full bg-[#9f3d3d] px-3 py-1 text-xs font-bold text-white">
            Out of stock
          </span>
        )}
        {lowStock && (
            <span className="absolute right-3 top-3 rounded-full bg-[#d18a35] px-3 py-1 text-xs font-bold text-white">
            Low stock
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d45b3f]">
          {product.category}
        </p>
        <h3 className="mt-2 truncate text-lg font-bold text-[#18302b]">
          {product.name}
        </h3>
        <p className="mt-2 text-xl font-black text-[#18302b]">₹{product.price.toLocaleString("en-IN")}</p>
        <Link
          to={`/products/${product.id}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#60716c] transition-all group-hover:gap-3 group-hover:text-[#d45b3f]"
        >
          View Details <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;