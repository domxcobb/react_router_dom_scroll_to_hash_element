
import {useLocation} from "react-router-dom";
import { useLayoutEffect } from "react";

const ScrollToHashElement = () => {

    /*
    Original repo for this component: 
    https://github.com/ncoughlin/scroll-to-hash-element/blob/main/ScrollToHashElement.js

    This component was created to solve the problem of 
    react-router-hash-link no longer functioning with React Router v6+.

    It works by listening to the hash property of 
    React-Router location and scrolling to the identified 
    element if it exists.

    Scrolling itself is provided by the native browser 
    method Element.scrollIntoView()
    */

    const location = useLocation();
    
    useLayoutEffect( () => {
        
        const {hash} = location;

        const removeHashCharacter = (str) => {
            const result = str.slice(1);
            return result;
        }

        if(hash) {
            const element = document.getElementById( removeHashCharacter(hash) );

            if(element) {
                element.scrollIntoView();
            }
        }

    },[location]);

    return null;

};

export default ScrollToHashElement;