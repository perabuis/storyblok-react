
import { storyblokEditable } from "@storyblok/react";

const MenuLink = ({blok}) => {
    return (
        <div>
        <a href={blok.link.cached_url} {...storyblokEditable(blok)}>
            <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                {blok.name}
            </p>
        </a>
        </div>
    );

}
 
export default MenuLink