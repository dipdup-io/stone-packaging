import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from 'clsx';
import {} from 'react';
import { CalloutTitle } from '../CalloutTitle.js';
import * as styles from './Strong.css.js';
export function Strong(props) {
    if ('data-callout-title' in props && typeof props.children === 'string')
        return (_jsx(CalloutTitle, { ...props, className: clsx(props.className, styles.root), children: props.children }));
    return _jsx("strong", { ...props, className: clsx(props.className, styles.root) });
}
//# sourceMappingURL=Strong.js.map