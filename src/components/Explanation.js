import { storyblokEditable } from "@storyblok/react";
 
const Explanation = ({ blok }) => (
  <div>
    {blok.layout == 'layout_two' && (
      <div {...storyblokEditable(blok)} className="column feature" >
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{blok.title}</h1>
            <p className="mb-8 leading-relaxed">{blok.description}</p>

        </div>
    )}
     {blok.layout == 'layout_one' && (
       <div {...storyblokEditable(blok)} className="column feature" >
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{blok.title}</h1>
            <p className="mb-8 leading-relaxed">{blok.description}</p>

        </div>

     )}
    </div>
 
);
 



export default Explanation; 