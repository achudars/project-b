import tailwindPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./src/css/tailwind.config.ts";

export default {
  plugins: [tailwindPostcss(tailwindConfig), autoprefixer],
};
