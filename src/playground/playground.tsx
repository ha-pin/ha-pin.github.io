import { useLocation } from 'dumi';
import React, { useEffect, useRef, useState } from 'react';

import './playground.css';

const words = {
  'zh-CN': {
    title: '哈拼演练场',
    desc: '哈拼演练场是为初学者准备的直观练习',
    isMobile: '为了更好的体验，请使用PC打开',
    hapin: '哈拼方案',
    arabic: '老文字字母',
    cyrillic: '西里尔字母',
    x: 'X 模式：xa、xe、xo、xu 表示前元音。xx、xy 是历史提案，当前工具包未实现为字母别名。',
    y: 'Y 模式：ye 为字母，yu 是 xu 的别名；yi、yo、yw、ya 分别映射为 i、io、iw、ia。yy 尚未实现。',
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
  ['a', ['ا', 'А а']],
  ['b', ['ب', 'Б б']],
  ['d', ['د', 'Д д']],
  ['e', ['ى', 'Ы ы']],
  ['f', ['ف', 'Ф ф']],
  ['g', ['گ', 'Г г']],
  ['h', ['ح', 'Х х']],
  ['i', ['ي', 'Й й']],
  ['j', ['ج', 'Ж ж']],
  ['k', ['ك', 'К к']],
  ['l', ['ل', 'Л л']],
  ['m', ['م', 'М м']],
  ['n', ['ن', 'Н н']],
  ['o', ['و', 'О о']],
  ['p', ['پ', 'П п']],
  ['q', ['ق', 'Қ қ']],
  ['r', ['ر', 'Р р']],
  ['s', ['س', 'С с']],
  ['t', ['ت', 'Т т']],
  ['u', ['ۇ', 'Ұ ұ']],
  ['v', ['ۆ', 'В в']],
  ['w', ['ۋ', 'У у']],
  ['z', ['ز', 'З з']],
  ['ye', ['ە', 'Е е']],
  ['gh', ['ع', 'Ғ ғ']],
  ['hh', ['ھ', 'Һ һ']],
  ['ng', ['ڭ', 'Ң ң']],
  ['sh', ['ش', 'Ш ш']],
  ['ch', ['چ', 'Ч ч']],
  ['xa', ['ٴا', 'Ә ә']],
  ['xe', ['ٴى', 'І і']],
  ['xo', ['ٴو', 'Ө ө']],
  ['xu', ['ٴۇ', 'Ү ү']],
  ['yu', ['ٴۇ', 'Ү ү']],
  [',', ['،', ',']],
  ['?', ['؟', '?']],
  [';', ['	؛', ';']],
  ['io', ['يو', 'Ё ё']],
  ['yo', ['يو', 'Ё ё']],
  ['yi', ['ي', 'И и']],
  ['ts', ['تس', 'Ц ц']],
  ['c', ['تس', 'Ц ц']],
  ['iw', ['يۋ', '	Ю ю']],
  ['yw', ['يۋ', '	Ю ю']],
  ['ia', ['يا', 'Я я']],
  ['ya', ['يا', 'Я я']],
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
    document.getElementById(`key-${k}`)?.classList.add('key-active');
  };

  const deactiveAllKeys = () => {
    [...document.getElementsByClassName(`key-active`)].forEach((d) =>
      d.classList.remove('key-active'),
    );
  };

  const handleKeyPress = (key: string) => {
    key = key.toLowerCase();
    const _hapin = hapinRef.current;

    deactiveAllKeys();

    if (/^[a-zA-Z,;\?]{1}$/.test(key)) {
      if (
        _hapin?.length === 1 &&
        double_chars.includes(_hapin) &&
        double_valid.includes(`${_hapin}${key}`)
      ) {
        setHapin(`${_hapin}${key}`);
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
                key={`key-row-${idx}`}
                id={`key-row-${idx}`}
                className="key-row"
              >
                {row.map((k) => (
                  <li
                    className="key"
                    key={`key-${k}`}
                    id={`key-${k}`}
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
