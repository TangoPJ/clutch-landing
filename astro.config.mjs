import { defineConfig, passthroughImageService } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  server: {
    open: true,
  },

  adapter: vercel(),
});
