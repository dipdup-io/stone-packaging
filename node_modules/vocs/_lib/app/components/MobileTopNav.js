import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as Accordion from '@radix-ui/react-accordion';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useActiveNavIds } from '../hooks/useActiveNavIds.js';
import { useConfig } from '../hooks/useConfig.js';
import { useLayout } from '../hooks/useLayout.js';
import { usePageData } from '../hooks/usePageData.js';
import { useSidebar } from '../hooks/useSidebar.js';
import { Icon } from './Icon.js';
import { Link } from './Link.js';
import { MobileSearch } from './MobileSearch.js';
import * as styles from './MobileTopNav.css.js';
import { NavLogo } from './NavLogo.js';
import * as NavigationMenu from './NavigationMenu.js';
import { Outline } from './Outline.js';
import { Popover } from './Popover.js';
import { RouterLink } from './RouterLink.js';
import { Sidebar } from './Sidebar.js';
import { ChevronDown } from './icons/ChevronDown.js';
import { ChevronRight } from './icons/ChevronRight.js';
import { ChevronUp } from './icons/ChevronUp.js';
import { Discord } from './icons/Discord.js';
import { GitHub } from './icons/GitHub.js';
import { Menu } from './icons/Menu.js';
import { Telegram } from './icons/Telegram.js';
import { Warpcast } from './icons/Warpcast.js';
import { X } from './icons/X.js';
MobileTopNav.Curtain = Curtain;
export function MobileTopNav() {
    const config = useConfig();
    const { showLogo } = useLayout();
    return (_jsxs("div", { className: styles.root, children: [_jsxs("div", { className: styles.section, children: [showLogo && (_jsx("div", { className: styles.group, children: _jsx("div", { className: styles.logo, children: _jsx(RouterLink, { to: "/", style: { alignItems: 'center', display: 'flex', height: '100%' }, children: _jsx(NavLogo, {}) }) }) })), config.topNav && (_jsx(_Fragment, { children: _jsxs("div", { className: styles.group, children: [_jsx(Navigation, { items: config.topNav }), _jsx(CompactNavigation, { items: config.topNav })] }) }))] }), _jsxs("div", { className: styles.section, children: [_jsx("div", { className: styles.group, style: { marginRight: '-8px' }, children: _jsx(MobileSearch, {}) }), config.socials && config.socials?.length > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.divider }), _jsx("div", { className: styles.group, style: { marginLeft: '-8px' }, children: config.socials?.map((social, i) => (_jsx(SocialButton, { ...social }, i))) })] }))] })] }));
}
function Navigation({ items }) {
    const { pathname } = useLocation();
    const activeIds = useActiveNavIds({ pathname, items });
    return (_jsx(NavigationMenu.Root, { className: styles.navigation, children: _jsx(NavigationMenu.List, { children: items.map((item, i) => item?.link ? (_jsx(NavigationMenu.Link, { active: activeIds?.includes(item.id), href: item.link, children: item.text }, i)) : (_jsxs(NavigationMenu.Item, { className: styles.item, children: [_jsx(NavigationMenu.Trigger, { active: activeIds?.includes(item.id), children: item.text }), _jsx(NavigationMenu.Content, { className: styles.content, children: _jsx(NavigationMenuContent, { items: item.items || [] }) })] }, i))) }) }));
}
function NavigationMenuContent({ items }) {
    const { pathname } = useLocation();
    const activeIds = useActiveNavIds({ pathname, items });
    return (_jsx("ul", { children: items?.map((item, i) => (_jsx(NavigationMenu.Link, { active: activeIds.includes(item.id), href: item.link, children: item.text }, i))) }));
}
function CompactNavigation({ items }) {
    const [showPopover, setShowPopover] = useState(false);
    const { pathname } = useLocation();
    const activeIds = useActiveNavIds({ pathname, items });
    const activeItem = items.filter((item) => item.id === activeIds[0])[0];
    const { basePath } = useConfig();
    const assetBasePath = import.meta.env.PROD ? basePath : '';
    return (_jsx("div", { className: clsx(styles.navigation, styles.navigation_compact), children: activeItem ? (_jsxs(Popover.Root, { modal: true, open: showPopover, onOpenChange: setShowPopover, children: [_jsxs(Popover.Trigger, { className: clsx(styles.menuTrigger, styles.navigationItem), children: [activeItem.text, _jsx(Icon, { label: "Menu", icon: ChevronDown, size: "11px" })] }), _jsx(Popover, { className: styles.topNavPopover, children: _jsx(Accordion.Root, { type: "single", collapsible: true, style: { display: 'flex', flexDirection: 'column' }, children: items.map((item, i) => item?.link ? (_jsx(Link, { "data-active": activeIds.includes(item.id), className: styles.navigationItem, href: item.link, onClick: () => setShowPopover(false), variant: "styleless", children: item.text }, i)) : (_jsxs(Accordion.Item, { value: i.toString(), children: [_jsx(Accordion.Trigger, { className: clsx(styles.navigationItem, styles.navigationTrigger), "data-active": activeIds.includes(item.id), style: assignInlineVars({
                                        [styles.chevronDownIcon]: `url(${assetBasePath}/.vocs/icons/chevron-down.svg)`,
                                        [styles.chevronUpIcon]: `url(${assetBasePath}/.vocs/icons/chevron-up.svg)`,
                                    }), children: item.text }), _jsx(Accordion.Content, { className: styles.navigationContent, children: item.items?.map((item, i) => (_jsx(Link, { className: styles.navigationItem, href: item.link, onClick: () => setShowPopover(false), variant: "styleless", children: item.text }, i))) })] }, i))) }) })] })) : items[0]?.link ? (_jsx(Link, { className: styles.navigationItem, href: items[0].link, variant: "styleless", children: items[0].text })) : null }));
}
const iconsForIcon = {
    discord: Discord,
    github: GitHub,
    telegram: Telegram,
    warpcast: Warpcast,
    x: X,
};
const sizesForTypes = {
    discord: '21px',
    github: '18px',
    telegram: '21px',
    warpcast: '18px',
    x: '16px',
};
function SocialButton({ icon, label, link, type }) {
    return (_jsx("a", { className: styles.button, href: link, target: "_blank", rel: "noopener noreferrer", children: _jsx(Icon, { className: styles.icon, label: label, icon: iconsForIcon[icon], size: sizesForTypes[type] || '18px' }) }));
}
export function Curtain({ enableScrollToTop, }) {
    const { pathname } = useLocation();
    const { layout, showSidebar } = useLayout();
    const { frontmatter = {} } = usePageData();
    const sidebar = useSidebar();
    const [isOutlineOpen, setOutlineOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarItemTitle = useMemo(() => {
        if (!sidebar || layout === 'minimal')
            return;
        const sidebarItem = getSidebarItemFromPathname({
            sidebarItems: sidebar.items,
            pathname,
        });
        return sidebarItem?.text;
    }, [layout, pathname, sidebar]);
    const contentTitle = useMemo(() => {
        if (typeof window === 'undefined')
            return;
        return document.querySelector('.vocs_Content h1')?.textContent;
    }, []);
    const title = sidebarItemTitle || frontmatter.title || contentTitle;
    return (_jsxs("div", { className: styles.curtain, children: [_jsx("div", { className: styles.curtainGroup, children: _jsx("div", { className: styles.curtainItem, children: showSidebar ? (_jsxs(Popover.Root, { modal: true, open: isSidebarOpen, onOpenChange: setSidebarOpen, children: [_jsxs(Popover.Trigger, { className: styles.menuTrigger, children: [_jsx(Icon, { label: "Menu", icon: Menu, size: "13px" }), _jsx("div", { className: styles.menuTitle, children: title })] }), _jsx(Popover, { className: styles.sidebarPopover, children: _jsx(Sidebar, { onClickItem: () => setSidebarOpen(false) }) })] })) : (title) }) }), _jsxs("div", { className: styles.curtainGroup, children: [enableScrollToTop && (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.curtainItem, children: _jsxs("button", { className: styles.outlineTrigger, onClick: () => window.scrollTo({ behavior: 'smooth', top: 0 }), type: "button", children: ["Top", _jsx(Icon, { label: "Scroll to top", icon: ChevronUp, size: "10px" })] }) }), _jsx("div", { className: styles.separator })] })), layout === 'docs' && (_jsx("div", { className: styles.curtainItem, children: _jsxs(Popover.Root, { modal: true, open: isOutlineOpen, onOpenChange: setOutlineOpen, children: [_jsxs(Popover.Trigger, { className: styles.outlineTrigger, children: ["On this page", _jsx(Icon, { label: "On this page", icon: ChevronRight, size: "10px" })] }), _jsx(Popover, { className: styles.outlinePopover, children: _jsx(Outline, { onClickItem: () => setOutlineOpen(false), showTitle: false }) })] }) }))] })] }));
}
function getSidebarItemFromPathname({ sidebarItems, pathname: pathname_, }) {
    const pathname = pathname_.replace(/(.+)\/$/, '$1');
    for (const item of sidebarItems) {
        if (item?.link === pathname)
            return item;
        if (item.items) {
            const childItem = getSidebarItemFromPathname({ sidebarItems: item.items, pathname });
            if (childItem)
                return childItem;
        }
    }
    return undefined;
}
//# sourceMappingURL=MobileTopNav.js.map