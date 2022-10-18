import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
const HeaderMenu = ({blok}) => {
    return (
    <div className="relative bg-white border-b-2 border-gray-100" {...storyblokEditable(blok)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                 <a href="/home">
                    <img src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png"
                      alt="Storyblok Logo"
                      className="w-48 m-3"></img>
                      </a>
                    <div className="md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10" {...storyblokEditable({blok})}>
                        { blok.links.map((nestedBlok) => (
                            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                    ))}
                    </div>
            </div>
        </div>
    </div>
    );
}
export default HeaderMenu