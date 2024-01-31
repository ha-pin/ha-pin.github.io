export function onRouteChange({ location }) {
  const lang = location.pathname.split('/')[1];

  if (lang === 'kk-CN') {
    document.querySelector('html')?.setAttribute('data-direction', 'rtl');
  } else {
    document.querySelector('html')?.setAttribute('data-direction', 'ltr');
  }
}
