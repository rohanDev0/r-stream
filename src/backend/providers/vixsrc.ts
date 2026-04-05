export const vixsrc = {
  id: "vixsrc",
  name: "VixSrc",

  async fetch(ctx: any) {
    const tmdbId = ctx.media.tmdbId;

    const url = `https://vixsrc.to/movie/${tmdbId}`;

    return {
      embeds: [
        {
          url: url,
        },
      ],
    };
  },
};
