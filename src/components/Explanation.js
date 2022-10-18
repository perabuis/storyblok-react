import { storyblokEditable } from "@storyblok/react";
 
const Explanation = ({ blok }) => (
 
       <div {...storyblokEditable(blok)} className="container mx-auto text-center" >
            <h1 className="title-font sm:text-4xl text-2xl mb-2 font-bold text-slate-900 uppercase">{blok.title}</h1>
            <p className="mb-4 text-slate-600 max-w-md mx-auto ">{blok.description}</p>
        </div>
);
 



export default Explanation; 