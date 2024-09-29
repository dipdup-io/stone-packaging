import { jsx as _jsx } from "react/jsx-runtime";
import './styles/index.css.js';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter, StaticRouterProvider, createStaticHandler, createStaticRouter, } from 'react-router-dom/server.js';
import { resolveVocsConfig } from '../vite/utils/resolveVocsConfig.js';
import { ConfigProvider } from './hooks/useConfig.js';
import { routes } from './routes.js';
import { createFetchRequest } from './utils/createFetchRequest.js';
export async function prerender(location) {
    const unwrappedRoutes = (await Promise.all(routes.map(async (route) => {
        const location_ = location === '/' ? '/' : location.replace(/\/$/, '');
        const path = route.path.replace(/\.html$/, '');
        if (path !== location_ && path !== '*')
            return null;
        const element = route.lazy ? (await route.lazy()).element : route.element;
        return {
            path: route.path,
            element,
        };
    }))).filter(Boolean);
    const { config } = await resolveVocsConfig();
    const { basePath } = config;
    const body = renderToString(_jsx(ConfigProvider, { config: config, children: _jsx(StaticRouter, { location: location, basename: basePath, children: _jsx(Routes, { children: unwrappedRoutes.map((route) => (_jsx(Route, { path: route.path, element: route.element }, route.path))) }) }) }));
    return { head: await head({ path: location }), body };
}
export async function render(req) {
    const { config } = await resolveVocsConfig();
    const { basePath } = config;
    const { query, dataRoutes } = createStaticHandler(routes, { basename: basePath });
    const fetchRequest = createFetchRequest(req);
    const context = (await query(fetchRequest));
    if (context instanceof Response)
        throw context;
    const router = createStaticRouter(dataRoutes, context);
    const body = renderToString(_jsx(ConfigProvider, { config: config, children: _jsx(StaticRouterProvider, { router: router, context: context }) }));
    return { head: await head({ path: context.location.pathname }), body };
}
async function head({ path }) {
    const { config } = await resolveVocsConfig();
    const head = await (async () => {
        if (typeof config.head === 'function')
            return await config.head({ path });
        if (typeof config.head === 'object') {
            const entry = Object.entries(config.head)
                .reverse()
                .find(([key]) => path.startsWith(key));
            return entry?.[1];
        }
        return config.head;
    })();
    const helmet = Helmet.renderStatic();
    let meta = helmet.meta.toString();
    const match = helmet.meta.toString().match(/property="og:image" content="(.*)"/);
    if (match?.[1]) {
        meta = meta.replace(/property="og:image" content="(.*)"/, `property="og:image" content="${match[1].replace(/&amp;/g, '&')}"`);
    }
    return `
    ${helmet.title.toString()}
    ${meta}
    ${helmet.link.toString()}
    ${helmet.style.toString()}
    ${helmet.script.toString()}
    ${renderToString(head)}
  `;
}
//# sourceMappingURL=index.server.js.map