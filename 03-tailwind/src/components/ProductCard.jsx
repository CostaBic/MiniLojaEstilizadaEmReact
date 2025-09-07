import Button from "./Button.jsx";

export default function ProductCard({ product, onAddToCart }) {
  const { title, price, image, tag, rating } = product;

  const tagStyles = {
    promo: "bg-[#ff4d4d] text-white",
    new: "bg-[#4caf50] text-white",
  };

  return (
    <div
      className="
        bg-[var(--card-bg)] border border-[var(--card-border)]
        rounded-[10px] p-4
        transition-transform duration-200 ease-out hover:-translate-y-1
      "
    >
      {/* Imagem */}
      <div className="text-center mb-4">
        <img
          src={image}
          alt={title}
          className="max-w-full h-[180px] object-contain"
          loading="lazy"
        />
      </div>

      {/* Tag */}
      <div className="flex justify-between mb-2">
        {tag && (
          <span
            className={`
              text-[0.7rem] font-bold px-2 py-[2px] rounded
              ${tagStyles[tag.toLowerCase()] || ""}
            `}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Título */}
      <h3
        className="
          text-sm my-2 min-h-[40px] line-clamp-2
        "
        title={title}
      >
        {title}
      </h3>

      {/* Preço + Rating */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">R${price.toFixed(2)}</span>
        <span className="text-xs text-[rgb(133,133,133)]">⭐ {rating}</span>
      </div>

      {/* Botões */}
      <div className="flex justify-between gap-2">
        <Button label="Adicionar" onClick={onAddToCart} variant="solid" />

        <Button
          label="Ver detalhes"
          onClick={() => console.log("Ver detalhes:", title)}
          variant="outline"
        />
      </div>
    </div>
  );
}
