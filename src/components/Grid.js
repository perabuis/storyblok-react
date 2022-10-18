import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const Grid = ({ blok }) => {
  return (
    <div className="flex flex-row justify-between max-w-7xl mx-auto mt-12"
      {...storyblokEditable(blok)}>
      {blok.columns.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;