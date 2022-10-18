
import { storyblokEditable } from "@storyblok/react";


const HeroSection = ({ blok }) => {
   return (
       <div {...storyblokEditable(blok)}>
           {blok.layout === 'layout_one' && (
               <section className="text-slate-600 body-font max-w-5xl mx-auto">
               <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                 <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                   <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-slate-900">{blok.title}
                   </h2>
                   <p className="mb-8 leading-relaxed max-w-xl">{blok.subtitle}</p>
                   <div className="flex justify-center">
                     <button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"><a  href="/home" >Learn more</a></button>
                     <button className="ml-4 inline-flex text-slate-700 bg-slate-200 border-0 py-2 px-6 focus:outline-none hover:bg-slate-300 rounded text-lg"><a href="/about">About Silke</a></button>
                   </div>
                 </div>
                 <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
                   <img className="object-cover object-center rounded " alt="hero" src={blok.image.filename}/>
                 </div>
               </div>
             </section>
           )}
           {blok.layout === 'layout_two' && (
               <section className="text-slate-600 body-font max-w-7xl mx-auto">
               <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                 <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
                   <img className="object-cover object-center rounded" alt="hero" src={blok.image.filename}/>
                 </div>
                 <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-slate-900">{blok.title}
                   </h2>
                   <p className="mb-8 leading-relaxed">{blok.subtitle}</p>
                 
                 </div>
               </div>
             </section>
           )}
       </div>
   )
}

export default HeroSection