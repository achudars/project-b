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
  const displaySpecs = (featured.length > 0 ? featured : allSpecs).slice(0, 5);

  const imageBlock = (
    <div className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-14">
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
      className="flex flex-col justify-center gap-8 px-5 sm:px-8 md:px-4 lg:px-10 mx-auto w-full max-w-[80%] md:max-w-none py-6"
      data-aos={isImageOnTheRightSide ? "fade-right" : "fade-left"}
    >
      {/* Index */}
      <span aria-hidden="true" className="select-none font-mono text-xs font-bold text-gray-600">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title + Price */}
      <div className="flex flex-col gap-2">
        <h3 className="h3 text-gray-100">{bike.title}</h3>
        <p className="text-2xl font-bold text-white">{bike.price}</p>
      </div>

      {/* Description */}
      <p className="text-lg leading-relaxed text-gray-300">{bike.subText}</p>

      {/* Spec table — LIOS-style definition list with divider rows */}
      {displaySpecs.length > 0 && (
        <dl className="border-t border-gray-700/60" aria-label="Key specifications">
          {displaySpecs.map(([key, value]) => (
            <div
              key={key}
              className="flex items-start justify-between gap-6 border-b border-gray-700/60 py-4"
            >
              <dt className="shrink-0 pt-0.5 text-xs font-bold uppercase tracking-widest text-gray-500">
                {key}
              </dt>
              <dd className="text-right text-sm text-gray-200">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {/* External link */}
      <div>
        <a
          href={bike.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${bike.title} on manufacturer website (opens in new tab)`}
          className="group/link inline-flex items-center gap-2 text-base font-bold tracking-wide transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          style={{ color: 'deeppink' }}
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
