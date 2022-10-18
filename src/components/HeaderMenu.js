import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
const HeaderMenu = ({blok}) => {
       //  console.log(blok);
    return (
    <div className="relative bg-white border-b-2 border-gray-100" {...storyblokEditable(blok)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <div className=" hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10" {...storyblokEditable({blok})}>
                        {
                    //console.log(blok)
                        //hier kan ik gemakkelijk de linken en het logo uithalen!
                    blok.links.map((nestedBlok) => (
                            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default HeaderMenu