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
      className="flex flex-col justify-center gap-6 px-5 sm:px-8 md:px-4 lg:px-10 mx-auto w-full max-w-[80%] md:max-w-none py-6"
      data-aos={isImageOnTheRightSide ? "fade-right" : "fade-left"}
    >
      {/* Title + Price inline */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-gray-700/60 pb-4">
        <h3 className="h3 text-gray-100">{bike.title}</h3>
        <p className="text-xl font-bold tabular-nums" style={{ color: 'deeppink' }}>{bike.price}</p>
      </div>

      {/* Description */}
      <p className="text-lg leading-relaxed text-gray-300">{bike.subText}</p>

      {/* Spec list — stacked */}
      {displaySpecs.length > 0 && (
        <dl className="flex flex-col gap-4" aria-label="Key specifications">
          {displaySpecs.map(([key, value]) => (
            <div key={key}>
              <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{key}</dt>
              <dd className="text-sm text-gray-200">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {/* CTA button */}
      <div>
        <a
          href={bike.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${bike.title} on manufacturer website (opens in new tab)`}
          className="inline-flex items-center gap-2 border px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-colors duration-200 hover:bg-[deeppink] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          style={{ color: 'deeppink', borderColor: 'deeppink' }}
        >
          View Bike
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
