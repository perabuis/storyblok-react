import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const FeatureArticle = ({ blok }) => {

 console.log(blok);
 //

    return (
      <div {...storyblokEditable(blok)} className=" body-font border-teal-500 border-2 rounded p-3 mx-auto text-center max-w-xs mb-5 flex flex-col" >  
          <p className="mx-auto title-font sm:text-xl text-2xl mb-4 font-medium text-teal-500">{blok.title}</p>
          <p className="mb-4 leading-relaxed w-3/4 mx-auto">{blok.intro}</p>
          <button className="self-center justify-self-end text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"><a  href={blok.link.cached_url} >Read more</a></button>
      </div>
    )
    };
 
export default FeatureArticle;