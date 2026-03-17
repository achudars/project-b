import TextAndImageContainer from "./TextAndImageContainer.tsx";
import bicycles from "./../data/data.json";
import { Fragment } from "react";

export interface BicycleSpecifications {
  [key: string]: string;
}

export interface Bicycle {
  mainImg: string;
  imgFolder: string;
  title: string;
  subText: string;
  price: string;
  url: string;
  specifications: BicycleSpecifications;
}

const TextAndImageContainerRows = () => (
  <section aria-labelledby="collection-heading">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t border-gray-800/50 pt-10 pb-20 md:pt-14 md:pb-32">
        {/* Section label */}
        <div className="mb-16 flex flex-col items-center gap-3 md:mb-24">
          <h2 id="collection-heading" className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            The Collection
          </h2>
          <div className="h-px w-10 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
        </div>

        {/* Bikes */}
        <div className="flex flex-col gap-24 md:gap-36">
          {(bicycles as unknown as Bicycle[]).map((bike, index) => {
            const isImageOnTheRightSide = index % 2 === 0;
            return (
              <Fragment key={bike.title}>
                <TextAndImageContainer
                  isImageOnTheRightSide={isImageOnTheRightSide}
                  bike={bike}
                  index={index}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default TextAndImageContainerRows;
