// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://absebo.github.io",
    integrations: [
        sitemap({
            customPages: [
                "https://absebo.github.io/hytale-share-code-inspector/",
            ],
        }),
    ],
});
