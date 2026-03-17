import { Bicycle } from "./TextAndImageContainerRows.tsx";

// Preferred spec keys to surface first
const FEATURED_SPECS = [
  "Frame",
  "Front Travel",
  "Gearbox",
  "Transmission",
  "Wheel Size",
  "Tyres",
  "Suspension System",
];

const TextAndImageContainer = ({
  isImageOnTheRightSide,
  bike,
  index,
}: {
  isImageOnTheRightSide: boolean;
  bike: Bicycle;
  index: number;
}) => {
  const allSpecs = Object.entries(bike.specifications);
  const featured = allSpecs.filter(([k]) => FEATURED_SPECS.includes(k));
  const displaySpecs = (featured.length > 0 ? featured : allSpecs).slice(0, 3);

  const imageBlock = (
    <div className="flex items-center justify-center px-6 py-4 sm:px-10 sm:py-6">
      <div
        className="relative w-4/5 rounded-2xl bg-gray-800/40 overflow-hidden"
        data-aos="fade-up"
      >
        <img
          className="w-full h-auto object-contain rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          src={`./images/${bike.imgFolder}/${bike.mainImg}`}
          width="540"
          height="405"
          alt={bike.title}
        />
      </div>
    </div>
  );

  const contentBlock = (
    <div
      className="flex flex-col justify-center gap-6 px-5 sm:px-8 md:px-4 lg:px-10 mx-auto w-full max-w-[80%] md:max-w-none"
      data-aos={isImageOnTheRightSide ? "fade-right" : "fade-left"}
    >
      {/* Index */}
      <span aria-hidden="true" className="select-none font-mono text-xs font-bold text-gray-600">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Price */}
      <div>
        <span className="inline-flex items-center rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-base font-semibold tracking-wide text-purple-300">
          {bike.price}
        </span>
      </div>

      {/* Title */}
      <h3 className="h3 text-gray-100">{bike.title}</h3>

      {/* Description */}
      <p className="text-lg leading-relaxed text-gray-300">{bike.subText}</p>

      {/* Spec chips */}
      {displaySpecs.length > 0 && (
        <div className="flex flex-wrap gap-2" role="list" aria-label="Key specifications">
          {displaySpecs.map(([key, value]) => (
            <span
              key={key}
              role="listitem"
              className="inline-flex flex-col gap-0.5 rounded-xl border border-gray-700/40 bg-gray-800/50 px-3.5 py-2.5 text-xs"
            >
              <span className="font-semibold uppercase tracking-wide text-gray-400">
                {key}
              </span>
              <span className="text-gray-200">{value}</span>
            </span>
          ))}
        </div>
      )}

      {/* External link */}
      <div>
        <a
          href={bike.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${bike.title} on manufacturer website (opens in new tab)`}
          className="group/link inline-flex items-center gap-2 rounded text-base font-semibold text-purple-300 underline underline-offset-4 decoration-purple-300/40 transition-all hover:text-purple-200 hover:decoration-purple-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          View Bike
          <svg
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <article aria-label={bike.title} className="group grid items-center gap-10 md:grid-cols-2 lg:gap-20">
      {isImageOnTheRightSide ? (
        <>
          <div className="md:order-2">{imageBlock}</div>
          <div className="md:order-1">{contentBlock}</div>
        </>
      ) : (
        <>
          {imageBlock}
          {contentBlock}
        </>
      )}
    </article>
  );
};

export default TextAndImageContainer;
