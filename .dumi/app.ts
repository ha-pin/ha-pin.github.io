export function onRouteChange({
  location,
}: {
  location: { pathname: string };
}) {
  const chinese =
    location.pathname === '/zh-CN' || location.pathname.startsWith('/zh-CN/');
  const html = document.documentElement;
  html.lang = chinese ? 'zh-CN' : 'en';
  html.dir = 'ltr';
  html.setAttribute('data-direction', 'ltr');
}
