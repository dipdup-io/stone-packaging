import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from 'clsx';
import {} from 'react';
import * as styles from './Callout.css.js';
export function Callout({ className, children, type }) {
    return _jsx("aside", { className: clsx(className, styles.root, styles[type]), children: children });
}
//# sourceMappingURL=Callout.js.map