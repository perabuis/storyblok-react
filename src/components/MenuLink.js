
import { storyblokEditable } from "@storyblok/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MenuLink = ({blok}) => {
   // console.log(blok.link.cached_url);
    return (
        <a href={blok.link.cached_url} {...storyblokEditable(blok)}>
            <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                {blok.name}
            </p>
        </a>
    );

}
 
export default MenuLink