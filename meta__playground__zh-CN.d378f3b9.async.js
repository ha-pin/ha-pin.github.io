"use strict";(self.webpackChunkhapin=self.webpackChunkhapin||[]).push([[3837],{65413:(function(i,t,e){var a;e.r(t),e.d(t,{demos:function(){return f}});var l=e(55420),s=e.n(l),p=e(98312),m=e.n(p),o=e(96540),n=e(75572),c=e(63501),u={};e.r(u),e.d(u,{ApplyPluginsType:function(){return n.xA},AtomRenderer:function(){return n.Zx},DumiDemo:function(){return n.DY},DumiDemoGrid:function(){return n.j6},DumiPage:function(){return n.LO},FormattedDate:function(){return n.XU},FormattedDateParts:function(){return n.tT},FormattedDisplayName:function(){return n.SY},FormattedList:function(){return n.dT},FormattedMessage:function(){return n.sA},FormattedNumber:function(){return n.Gr},FormattedNumberParts:function(){return n.MN},FormattedPlural:function(){return n.HN},FormattedRelativeTime:function(){return n.uZ},FormattedTime:function(){return n.ib},FormattedTimeParts:function(){return n.CQ},Helmet:function(){return n.mg},HelmetProvider:function(){return n.vd},IntlContext:function(){return n.RK},IntlProvider:function(){return n.Dk},Link:function(){return n.N_},NavLink:function(){return n.k2},Navigate:function(){return n.C5},Outlet:function(){return n.sv},PluginManager:function(){return n.R0},RawIntlProvider:function(){return n.Lq},__getRoot:function(){return n.nN},__useFetcher:function(){return n.xI},createBrowserHistory:function(){return n.zR},createHashHistory:function(){return n.TM},createHistory:function(){return n.nS},createIntlCache:function(){return n.MT},createMemoryHistory:function(){return n.sC},createSearchParams:function(){return n.PI},defineApp:function(){return n.dy},defineMessages:function(){return n.YK},generatePath:function(){return n.tW},getFullDemos:function(){return n.cg},getFullRoutesMeta:function(){return n.nd},getRouteMetaById:function(){return n.lw},getSketchJSON:function(){return n.br},history:function(){return n.b6},injectIntl:function(){return n.j4},matchPath:function(){return n.B6},matchRoutes:function(){return n.ue},openCodeSandbox:function(){return n.T},openStackBlitz:function(){return n.Gl},renderClient:function(){return n.Cr},resolvePath:function(){return n.o1},terminal:function(){return n.Fo},use:function(){return n.Yx},useAppData:function(){return n.dp},useAtomAssets:function(){return n.UF},useClientLoaderData:function(){return n.ew},useDemo:function(){return n.zC},useFullSidebarData:function(){return n.VB},useIntl:function(){return n.tz},useLiveDemo:function(){return n.Z},useLoaderData:function(){return n.LG},useLocale:function(){return n.Ym},useLocation:function(){return n.zy},useMatch:function(){return n.RQ},useMatchedRoute:function(){return n.z7},useNavData:function(){return n.xY},useNavigate:function(){return n.Zp},useOutlet:function(){return n.P1},useOutletContext:function(){return n.KC},useParams:function(){return n.g},usePrefersColor:function(){return n.Sl},useResolvedPath:function(){return n.x$},useRouteData:function(){return n.PR},useRouteMeta:function(){return n._e},useRouteProps:function(){return n.ZI},useRoutes:function(){return n.Ye},useSearchParams:function(){return n.ok},useSelectedRoutes:function(){return n.VL},useServerInsertedHTML:function(){return n.CF},useServerLoaderData:function(){return n.YJ},useSidebarData:function(){return n.kT},useSiteData:function(){return n.rU},useSiteSearch:function(){return n.Lu},useTabMeta:function(){return n.oQ},withRouter:function(){return n.y}});var f={"src-playground-demo-playground":{component:o.memo(o.lazy(function(){return e.e(1917).then(e.bind(e,90639))})),asset:{type:"BLOCK",id:"src-playground-demo-playground",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37615).A},hapin:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},"./playground.css":{type:"FILE",value:e(19575).A}},entry:"index.tsx"},routeId:"components/playground/index.zh-CN",context:{"./playground.css":c,dumi:u,react:a||(a=e.t(o,2)),"/home/runner/work/ha-pin.github.io/ha-pin.github.io/src/playground/playground.css":c},renderOpts:{compile:(function(){var y=m()(s()().mark(function g(){var d,_=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(5256).then(e.bind(e,85256));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,_));case 3:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h})()}}}}),63501:(function(i,t,e){e.r(t)}),42505:(function(i,t,e){e.r(t);const a=[{value:"\u8FD9\u662F\u5355\u5B57\u6BCD\u7EC3\u4E60\uFF0C\u4E0D\u662F\u5B8C\u6574\u8BCD\u8F6C\u6362\u5668\u3002\u5B8C\u6574\u8BCD\u7684\u4E0A\u4E0B\u6587\u5206\u6790\u53C2\u89C1",paraId:0},{value:"\u5B57\u6BCD\u5207\u5206\u89C4\u5219",paraId:1},{value:"\u3002xx\u3001xy\u3001yy \u7684\u5386\u53F2\u8BBE\u8BA1\u4E0D\u4EE3\u8868\u5F53\u524D\u5E93\u5DF2\u652F\u6301\u3002",paraId:0}];e.d(t,["texts",0,a])}),19575:(function(i,t){t.A=`.keyboard {
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.key-row {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.key {
  width: 30px;
  height: 30px;
  margin: 5px;
  padding: 10px;
  text-align: center;
  font-size: x-large;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 1px 1px 2px grey;
}

[data-prefers-color="dark"] .key {
  background-color: rgba(255, 255, 255, 0.5);
}

.key-active {
  background-color: rgba(0, 0, 0, 0.1);
}

[data-prefers-color="dark"] .key-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.res-hapin,
.res-cyrillic {
  font-size: xx-large;
}

.res-arabic {
  font-size: 50px;
}

.res-hapin,
.res-cyrillic,
.res-arabic {
  margin-left: 20px;;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: 1px solid grey;
  border-radius: 5px;
  min-height: 60px;
  min-width: 60px;
  text-align: center;
  vertical-align: center;
  background-color: rgba(0, 0, 0, 0.1)
}

[data-prefers-color="dark"] .res-hapin,
[data-prefers-color="dark"] .res-cyrillic,
[data-prefers-color="dark"] .res-arabic {
  background-color: rgba(255, 255, 255, 0.2);
}

.maping {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.maping-item {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
`}),37615:(function(i,t){t.A=`import { useLocation } from 'dumi';
import React, { useEffect, useRef, useState } from 'react';

import './playground.css';

const words = {
  'zh-CN': {
    title: '\u54C8\u62FC\u6F14\u7EC3\u573A',
    desc: '\u54C8\u62FC\u6F14\u7EC3\u573A\u662F\u4E3A\u521D\u5B66\u8005\u51C6\u5907\u7684\u76F4\u89C2\u7EC3\u4E60',
    isMobile: '\u4E3A\u4E86\u66F4\u597D\u7684\u4F53\u9A8C\uFF0C\u8BF7\u4F7F\u7528PC\u6253\u5F00',
    hapin: '\u54C8\u62FC\u65B9\u6848',
    arabic: '\u8001\u6587\u5B57\u5B57\u6BCD',
    cyrillic: '\u897F\u91CC\u5C14\u5B57\u6BCD',
    x: 'X \u6A21\u5F0F\uFF1Axa\u3001xe\u3001xo\u3001xu \u8868\u793A\u524D\u5143\u97F3\u3002xx\u3001xy \u662F\u5386\u53F2\u63D0\u6848\uFF0C\u5F53\u524D\u5DE5\u5177\u5305\u672A\u5B9E\u73B0\u4E3A\u5B57\u6BCD\u522B\u540D\u3002',
    y: 'Y \u6A21\u5F0F\uFF1Aye \u4E3A\u5B57\u6BCD\uFF0Cyu \u662F xu \u7684\u522B\u540D\uFF1Byi\u3001yo\u3001yw\u3001ya \u5206\u522B\u6620\u5C04\u4E3A i\u3001io\u3001iw\u3001ia\u3002yy \u5C1A\u672A\u5B9E\u73B0\u3002',
  },
  'en-US': {
    title: 'Hapin Playground',
    desc: 'Hapin playground is the practice for beginners',
    isMobile: 'Please use PC to experience better',
    hapin: 'Hapin Scheme',
    arabic: 'The Persian-Arabic Alphabet',
    cyrillic: 'The Cyrillic Alphabet',
    x: 'X mode: xa, xe, xo and xu represent front vowels. Historical xx/xy aliases are not implemented in the library.',
    y: 'Y mode: ye is a letter; yu aliases xu. yi, yo, yw and ya map to i, io, iw and ia. yy is not implemented.',
  },
};

const qwerty_keyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '?'],
];

const hapin_maping = new Map([
  ['a', ['\u0627', '\u0410 \u0430']],
  ['b', ['\u0628', '\u0411 \u0431']],
  ['d', ['\u062F', '\u0414 \u0434']],
  ['e', ['\u0649', '\u042B \u044B']],
  ['f', ['\u0641', '\u0424 \u0444']],
  ['g', ['\u06AF', '\u0413 \u0433']],
  ['h', ['\u062D', '\u0425 \u0445']],
  ['i', ['\u064A', '\u0419 \u0439']],
  ['j', ['\u062C', '\u0416 \u0436']],
  ['k', ['\u0643', '\u041A \u043A']],
  ['l', ['\u0644', '\u041B \u043B']],
  ['m', ['\u0645', '\u041C \u043C']],
  ['n', ['\u0646', '\u041D \u043D']],
  ['o', ['\u0648', '\u041E \u043E']],
  ['p', ['\u067E', '\u041F \u043F']],
  ['q', ['\u0642', '\u049A \u049B']],
  ['r', ['\u0631', '\u0420 \u0440']],
  ['s', ['\u0633', '\u0421 \u0441']],
  ['t', ['\u062A', '\u0422 \u0442']],
  ['u', ['\u06C7', '\u04B0 \u04B1']],
  ['v', ['\u06C6', '\u0412 \u0432']],
  ['w', ['\u06CB', '\u0423 \u0443']],
  ['z', ['\u0632', '\u0417 \u0437']],
  ['ye', ['\u06D5', '\u0415 \u0435']],
  ['gh', ['\u0639', '\u0492 \u0493']],
  ['hh', ['\u06BE', '\u04BA \u04BB']],
  ['ng', ['\u06AD', '\u04A2 \u04A3']],
  ['sh', ['\u0634', '\u0428 \u0448']],
  ['ch', ['\u0686', '\u0427 \u0447']],
  ['xa', ['\u0674\u0627', '\u04D8 \u04D9']],
  ['xe', ['\u0674\u0649', '\u0406 \u0456']],
  ['xo', ['\u0674\u0648', '\u04E8 \u04E9']],
  ['xu', ['\u0674\u06C7', '\u04AE \u04AF']],
  ['yu', ['\u0674\u06C7', '\u04AE \u04AF']],
  [',', ['\u060C', ',']],
  ['?', ['\u061F', '?']],
  [';', ['	\u061B', ';']],
  ['io', ['\u064A\u0648', '\u0401 \u0451']],
  ['yo', ['\u064A\u0648', '\u0401 \u0451']],
  ['yi', ['\u064A', '\u0418 \u0438']],
  ['ts', ['\u062A\u0633', '\u0426 \u0446']],
  ['c', ['\u062A\u0633', '\u0426 \u0446']],
  ['iw', ['\u064A\u06CB', '	\u042E \u044E']],
  ['yw', ['\u064A\u06CB', '	\u042E \u044E']],
  ['ia', ['\u064A\u0627', '\u042F \u044F']],
  ['ya', ['\u064A\u0627', '\u042F \u044F']],
]);

const double_chars = ['x', 'y', 'g', 'h', 'n', 's', 'c', 'i', 't'];

const double_valid = [
  'ye',
  'gh',
  'hh',
  'ng',
  'sh',
  'ch',
  'xa',
  'xe',
  'xo',
  'xu',
  'yu',
  'io',
  'yo',
  'yi',
  'ts',
  'iw',
  'yw',
  'ia',
  'ya',
];

export default function Playground() {
  const [hapin, setHapin] = useState<string>('');
  const route = useLocation();
  const lang: 'en-US' | 'zh-CN' =
    route.pathname === '/zh-CN' || route.pathname.startsWith('/zh-CN/')
      ? 'zh-CN'
      : 'en-US';
  const [maped, setMaped] = useState<string[]>([]);
  const hapinRef = useRef<string>('');
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768,
  );

  useEffect(() => {
    const keypress = (ev: KeyboardEvent) =>
      handleKeyPress(ev.key.toLowerCase());
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('keypress', keypress);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('keypress', keypress);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    hapinRef.current = hapin;
    if (!!hapin && hapin_maping.has(hapin)) {
      setMaped(hapin_maping.get(hapin) as string[]);
      hapin.split('').forEach((k) => activeKey(k));
    } else {
      setMaped([]);
    }
  }, [hapin]);

  const activeKey = (k: string) => {
    document.getElementById(\`key-\${k}\`)?.classList.add('key-active');
  };

  const deactiveAllKeys = () => {
    [...document.getElementsByClassName(\`key-active\`)].forEach((d) =>
      d.classList.remove('key-active'),
    );
  };

  const handleKeyPress = (key: string) => {
    key = key.toLowerCase();
    const _hapin = hapinRef.current;

    deactiveAllKeys();

    if (/^[a-zA-Z,;\\?]{1}$/.test(key)) {
      if (
        _hapin?.length === 1 &&
        double_chars.includes(_hapin) &&
        double_valid.includes(\`\${_hapin}\${key}\`)
      ) {
        setHapin(\`\${_hapin}\${key}\`);
      } else {
        setHapin(key);
      }
    }
  };

  const handleKeyClick = (k: string) => {
    handleKeyPress(k);
  };

  return (
    <div>
      <div>
        <h1>{words[lang].title}</h1>
        <p>{words[lang].desc}</p>
      </div>
      {!isMobile && (
        <>
          <div className="keyboard">
            {qwerty_keyboard.map((row, idx) => (
              <ul
                key={\`key-row-\${idx}\`}
                id={\`key-row-\${idx}\`}
                className="key-row"
              >
                {row.map((k) => (
                  <li
                    className="key"
                    key={\`key-\${k}\`}
                    id={\`key-\${k}\`}
                    onClick={() => {
                      handleKeyClick(k);
                    }}
                  >
                    {k}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="maping">
            <div className="maping-item">
              <span>{words[lang].hapin}: </span>
              <code className="res-hapin">{hapin}</code>
            </div>
            {hapin === 'x' && <div>{words[lang].x}</div>}
            {hapin === 'y' && <div>{words[lang].y}</div>}
            <div className="maping-item">
              <span>{words[lang].arabic}: </span>
              <code className="res-arabic" dir="rtl">
                {maped[0]}
              </code>
            </div>
            <div className="maping-item">
              <span>{words[lang].cyrillic}: </span>
              <code className="res-cyrillic">{maped[1]}</code>
            </div>
          </div>
        </>
      )}
      {isMobile && <div>{words[lang].isMobile}</div>}
    </div>
  );
}
`})}]);
