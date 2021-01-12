import { useEffect, RefObject } from 'react';

export default function(ref: RefObject<HTMLElement>, callback: Function) {
    useEffect(() => {
        document.addEventListener('click', checkClick);

        return () => document.removeEventListener('click', checkClick);
    });

    function checkClick(e: MouseEvent) {
        if (!ref.current.contains(e.target as HTMLElement)) callback();
    }
}
