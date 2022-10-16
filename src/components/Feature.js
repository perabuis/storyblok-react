import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="column feature" >
      <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{blok.name}</h1>
      <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={blok.image.filename} alt="feature"/>
  </div>
);
 



export default Feature; 