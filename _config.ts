import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import katex from "lume/plugins/katex.ts";
import metas from "lume/plugins/metas.ts";

import toc, { linkInsideHeader } from "lume_markdown_plugins/toc.ts";
import title from "lume_markdown_plugins/title.ts";

const site = lume();

site.use(katex());
site.use(metas());

site.use(toc({
    anchor: linkInsideHeader(),
}));
site.use(title());

site.use(code_highlight({
    theme: {
        name: "github-dark",
        placeholder: "/* insert-theme-here */",
    },
}));
site.use(tailwindcss());
site.add("/style.css");

export default site;
