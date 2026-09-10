# Fonts — where to put them when downloaded

You said: use alternatives for now, teach me where to put them.

Current state:
- Montserrat + Lora loaded via `next/font/google` in `src/app/layout.tsx`
- Le Jour Serif → TEMP fallback `Cormorant_Garamond` as `--font-le-jour`
- Tan Nimbus → TEMP fallback `Cormorant_Garamond` as `--font-tan-nimbus`

When you have the files:

```
public/fonts/montserrat/*.woff2
public/fonts/lora/*.woff2
public/fonts/le-jour-serif/LeJourSerif-*.woff2
public/fonts/tan-nimbus/TanNimbus-*.woff2
```

Then in `src/app/layout.tsx` replace the two fallback blocks with:

```ts
import localFont from "next/font/local";

const leJour = localFont({
  variable: "--font-le-jour",
  src: "../.../../../public/fonts/le-jour-serif/LeJourSerif-Regular.woff2",
  display: "swap",
});
```

Keep the same CSS variable names — no other code change needed
because `globals.css` uses `var(--font-le-jour)` and `var(--font-tan-nimbus)`.
