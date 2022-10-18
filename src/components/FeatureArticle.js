import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const FeatureArticle = ({ blok }) => {

 console.log(blok.link.cached_url);
 /*
      <main {...storyblokEditable(blok)}>
        <h1>{blok.title}</h1>
        {blok.body
          ? blok.body.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))
          : null}
          </main>*/
      return (
        <h1>test</h1>


      )
    };
 
export default FeatureArticle;