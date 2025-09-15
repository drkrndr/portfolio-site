import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      // default options are fine
      pages: "build", // folder where static site will be output
      assets: "build",
      fallback: null,
    }),
  },
};
