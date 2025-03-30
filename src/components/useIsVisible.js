import { useState, useEffect } from "react";

export default function useIsVisible(ref) {

    const [isIntersecting, setIntersecting] = useState(false);
    // This entire line of code is essentially a useState for whether the object is in frame (interesecting with our screen bounds)

    const options = {
        threshold: 0.7,
    };

    useEffect(() => { // Runs after the DOM refreshses, and anytime DOM flushes


        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        ,options // The callback here, is that when entry event runs, we setInterescting based on the return value of entry.IsInterescting which can be false/true
        );

        observer.observe(ref.current); // observe the current reference of the useIsVisible function

        // I guess this is a provided clean up method

        return () => {
            //destructor?
            observer.disconnect();
        }

    }, [ref]); // I understand it now, this is literally a list of whats needed for the function to work, in the parameter

    return {isIntersecting};
}