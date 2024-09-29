import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import {} from 'react';
import { useLocation } from 'react-router-dom';
import { useActiveNavIds } from '../hooks/useActiveNavIds.js';
import { useConfig } from '../hooks/useConfig.js';
import { useLayout } from '../hooks/useLayout.js';
import { useTheme } from '../hooks/useTheme.js';
import { visibleDark, visibleLight } from '../styles/utils.css.js';
import { DesktopSearch } from './DesktopSearch.js';
import * as styles from './DesktopTopNav.css.js';
import { Icon } from './Icon.js';
import { NavLogo } from './NavLogo.js';
import * as NavigationMenu from './NavigationMenu.js';
import { RouterLink } from './RouterLink.js';
import { Discord } from './icons/Discord.js';
import { GitHub } from './icons/GitHub.js';
import { Moon } from './icons/Moon.js';
import { Sun } from './icons/Sun.js';
import { Telegram } from './icons/Telegram.js';
import { Warpcast } from './icons/Warpcast.js';
import { X } from './icons/X.js';
DesktopTopNav.Curtain = Curtain;
export function DesktopTopNav() {
    const config = useConfig();
    const { showLogo, showSidebar } = useLayout();
    return (_jsxs("div", { className: clsx(styles.root, showLogo && !showSidebar && styles.withLogo), children: [_jsx(DesktopSearch, {}), showLogo && (_jsx("div", { className: styles.logoWrapper, children: _jsx("div", { className: styles.logo, children: _jsx(RouterLink, { to: "/", style: { alignItems: 'center', display: 'flex', height: '56px', marginTop: '4px' }, children: _jsx(NavLogo, {}) }) }) })), _jsx("div", { className: styles.section }), _jsxs("div", { className: styles.section, children: [(config.topNav?.length || 0) > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.group, children: _jsx(Navigation, {}) }), _jsx("div", { className: clsx(styles.divider, (config.topNav?.length || 0) > 3 ? styles.hideCompact : null) })] })), config.socials && config.socials?.length > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { className: clsx(styles.group, (config.topNav?.length || 0) > 3 ? styles.hideCompact : null), style: { marginLeft: '-8px', marginRight: '-8px' }, children: config.socials.map((social, i) => (_jsx("div", { className: styles.item, children: _jsx(SocialButton, { ...social }) }, i))) }), !config.theme?.colorScheme && (_jsx("div", { className: clsx(styles.divider, styles.hideCompact) }))] })), !config.theme?.colorScheme && (_jsx("div", { className: clsx(styles.group, styles.hideCompact), style: { marginLeft: '-8px', marginRight: '-8px' }, children: _jsx("div", { className: styles.item, children: _jsx(ThemeToggleButton, {}) }) }))] })] }));
}
export function Curtain() {
    return _jsx("div", { className: styles.curtain });
}
function Navigation() {
    const { topNav } = useConfig();
    if (!topNav)
        return null;
    const { pathname } = useLocation();
    const activeIds = useActiveNavIds({ pathname, items: topNav });
    return (_jsx(NavigationMenu.Root, { delayDuration: 0, children: _jsx(NavigationMenu.List, { children: topNav.map((item, i) => item.link ? (_jsx(NavigationMenu.Link, { active: activeIds.includes(item.id), className: styles.item, href: item.link, children: item.text }, i)) : item.items ? (_jsxs(NavigationMenu.Item, { className: styles.item, children: [_jsx(NavigationMenu.Trigger, { active: activeIds.includes(item.id), children: item.text }), _jsx(NavigationMenu.Content, { className: styles.content, children: _jsx(NavigationMenuContent, { items: item.items }) })] }, i)) : null) }) }));
}
function NavigationMenuContent({ items }) {
    const { pathname } = useLocation();
    const activeIds = useActiveNavIds({ pathname, items });
    return (_jsx("ul", { children: items?.map((item, i) => (_jsx(NavigationMenu.Link, { active: activeIds.includes(item.id), href: item.link, children: item.text }, i))) }));
}
function ThemeToggleButton() {
    const { toggle } = useTheme();
    return (_jsxs("button", { className: styles.button, onClick: toggle, type: "button", children: [_jsx(Icon, { className: clsx(styles.icon, visibleDark), size: "20px", label: "Light", icon: Sun }), _jsx(Icon, { className: clsx(styles.icon, visibleLight), size: "20px", label: "Dark", icon: Moon, style: { marginTop: '-2px' } })] }));
}
const iconsForIcon = {
    discord: Discord,
    github: GitHub,
    telegram: Telegram,
    warpcast: Warpcast,
    x: X,
};
const sizesForType = {
    discord: '23px',
    github: '20px',
    telegram: '21px',
    warpcast: '20px',
    x: '18px',
};
function SocialButton({ icon, label, link }) {
    return (_jsx("a", { className: styles.button, href: link, target: "_blank", rel: "noopener noreferrer", children: _jsx(Icon, { className: styles.icon, label: label, icon: iconsForIcon[icon], size: sizesForType[icon] || '20px' }) }));
}
//# sourceMappingURL=DesktopTopNav.js.map