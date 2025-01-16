import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import appStylesHref from "./app.scss?url";
import { Outlet } from "@remix-run/react";
import Header from "./components/organisms/header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
  { rel: "preload", href: "/js/gsap.min.js", as: "script" },
  { rel: "preload", href: "/js/Flip.min.js", as: "script" },
  { rel: "preload", href: "/js/CustomEase.min.js", as: "script" },
  { rel: "preload", href: "/js/split-type.min.js", as: "script" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tuan Ng.</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <script src="/js/gsap.min.js" />
        <script src="/js/Flip.min.js" />
        <script src="/js/CustomEase.min.js" />
        <script src="/js/split-type.min.js" />
        <Scripts />
      </body>
    </html>
  );
}
