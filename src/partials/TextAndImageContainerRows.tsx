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
  <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-gray-800">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 mb-4">Bicycles I like</h2>
          <p className="text-xl text-gray-400">
            Just a collection of bikes I think are cool
          </p>
        </div>
        {/* Section body */}
        <div className="grid gap-20">
          {(bicycles as unknown as Bicycle[]).map((bike, index) => {
            const isImageOnTheRightSide = index % 2 === 0;
            return (
              <Fragment key={bike.title}>
                <TextAndImageContainer
                  isImageOnTheRightSide={isImageOnTheRightSide}
                  bike={bike}
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
