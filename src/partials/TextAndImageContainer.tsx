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
    <div
      className="relative overflow-hidden rounded-2xl bg-gray-800/40 aspect-[4/3]"
      data-aos="fade-up"
    >
      <img
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        src={`./images/${bike.imgFolder}/${bike.mainImg}`}
        width="540"
        height="405"
        alt={bike.title}
      />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
    </div>
  );

  const contentBlock = (
    <div
      className="flex flex-col justify-center gap-6"
      data-aos={isImageOnTheRightSide ? "fade-right" : "fade-left"}
    >
      {/* Index + price */}
      <div className="flex items-center gap-4">
        <span className="select-none font-mono text-xs font-bold text-gray-700">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="inline-flex items-center rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
          {bike.price}
        </span>
      </div>

      {/* Title */}
      <h3 className="h3 text-gray-100">{bike.title}</h3>

      {/* Description */}
      <p className="text-lg leading-relaxed text-gray-400">{bike.subText}</p>

      {/* Spec chips */}
      {displaySpecs.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {displaySpecs.map(([key, value]) => (
            <span
              key={key}
              className="inline-flex flex-col gap-0.5 rounded-xl border border-gray-700/40 bg-gray-800/50 px-3.5 py-2.5 text-xs"
            >
              <span className="font-semibold uppercase tracking-wide text-gray-500">
                {key}
              </span>
              <span className="text-gray-300">{value}</span>
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
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
        >
          View Bike
          <svg
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
    <div className="group grid items-center gap-10 md:grid-cols-2 lg:gap-20">
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
    </div>
  );
};

export default TextAndImageContainer;
