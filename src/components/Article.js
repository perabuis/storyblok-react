import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const Article = ({ blok }) => {

  console.log(blok);
      return (
        <div>
          <div className="relative bg-white border-b-2 border-gray-100 py-6">
            <div className="max-w-7xl mx-auto">
                    <a href="/home">
                    <img src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png"
                      alt="Storyblok Logo"
                      className="w-48 m-3"></img>
                      </a>
                      </div>
          </div>
          <main className="max-w-7xl container mx-auto text-center pt-8" {...storyblokEditable(blok)}>
            <img className="mx-auto  max-w-3xl object-center mb-8 rounded-xl" src={blok.image.filename} alt="feature"/>
            <h1 className="title-font sm:text-4xl text-2xl mb-2 font-bold text-slate-900 uppercase">{blok.title}</h1>
            <p className="max-w-xl mx-auto pb-24">{blok.description}</p>
          </main>
        </div>
      )
    };
 
export default Article;