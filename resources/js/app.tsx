
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import type { ComponentType } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pages = import.meta.glob('./pages/**/*.tsx');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: async (name) => {
        const path = `./pages/${name}.tsx`;
        const loadPage = pages[path];

        if (!loadPage) {
            throw new Error(`Page not found: ${path}`);
        }

        const module = await loadPage() as {
            default: ComponentType<any>;
        };

        return module.default;
    },

    progress: {
        color: '#4B5563',
    },
});
