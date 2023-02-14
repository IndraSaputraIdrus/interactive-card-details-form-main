import clsx from "clsx";

function CardFront({ cardName, cardNumber, cardDate }) {
  return (
    <div className="relative rounded-lg shadow-xl">
      <img src="/images/bg-card-front.png" />
      <img className="absolute top-5 left-5" src="/images/card-logo.svg" />
      <p
        className={clsx(
          "absolute bottom-16 left-5",
          "text-white tracking-wide",
          "text-2xl sm:text-3xl"
        )}
      >
        {cardNumber}
      </p>
      <span
        className={clsx(
          "absolute bottom-5 left-5",
          "text-white uppercase tracking-widest",
          "text-md sm:text-lg"
        )}
      >
        {cardName}
      </span>
      <span
        className={clsx(
          "absolute right-5 bottom-5",
          "text-white tracking-wider",
          "text-md sm:text-lg"
        )}
      >
        {cardDate?.month}/{cardDate?.year}
      </span>
    </div>
  );
}
export default CardFront;
