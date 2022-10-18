import { storyblokEditable } from "@storyblok/react";
 
const Teaser = ({ blok }) => {
  //title-font sm:text-4xl text-2xl mb-2 font-medium text-gray-900
  return (
  <p className="body-font text-center text-gray-500 mb-4 mt-8 italic"
    {...storyblokEditable(blok)} >{blok.headline}</p>
    )
};
 
export default Teaser;