import { useEffect } from "react";


export function onScroll({targetRef, menuRef}) {
    useEffect(() => {
        const handleScroll = () => {

        if (!targetRef.current) return;

        const top = targetRef.current.getBoundingClientRect().top;
        const bottom = targetRef.current.getBoundingClientRect().top;

        if (top <= 0 && bottom > 0) {
            menuRef.current.style.backgroundColor = 'salmon';
        } else {
            menuRef.current.style.backgroundColor = '';
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
}