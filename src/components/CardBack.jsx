import clsx from "clsx";

function CardBack({ cardCvc }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl">
      <img src="/bg-card-back.png" />
      <span
        className={clsx(
          "absolute right-12 top-[44%]",
          "text-white tracking-wider"
        )}
      >
        {cardCvc}
      </span>
    </div>
  );
}

export default CardBack;
