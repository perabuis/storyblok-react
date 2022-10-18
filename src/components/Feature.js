import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="column body-font" >
  
      <p className="mx-auto text-center title-font sm:text-xl text-2xl mb-4 font-medium text-teal-500">{blok.name}</p>
      <img className="mx-auto object-cover object-center w-4/5 mb-8 rounded-xl" src={blok.image.filename} alt="feature"/>
  </div>
);
 



export default Feature; 