import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const Article = ({ blok }) => {

  console.log(blok);
      return (

      <main {...storyblokEditable(blok)}>
        <h1>{blok.title}</h1>
        {blok.body
          ? blok.body.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))
          : null}
          </main>
      )
    };
 
export default Article;