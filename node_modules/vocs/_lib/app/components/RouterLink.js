import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { routes } from 'virtual:routes';
import { mergeRefs } from '../utils/mergeRefs.js';
export const RouterLink = forwardRef((props, ref) => {
    const loadRoute = () => routes.find((route) => route.path === props.to)?.lazy();
    const { ref: intersectionRef, inView } = useInView();
    useEffect(() => {
        if (inView)
            loadRoute();
    }, [inView, loadRoute]);
    return _jsx(Link, { ref: mergeRefs(ref, intersectionRef), ...props });
});
//# sourceMappingURL=RouterLink.js.map