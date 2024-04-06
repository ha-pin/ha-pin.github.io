import React, { useEffect, useRef, useState } from 'react';

import './playground.css';

const words = {
  'zh-CN': {
    title: '哈拼演练场',
    desc: '哈拼演练场是为初学者准备的直观练习',
    hapin: '哈拼方案',
    arabic: '老文字字母',
    cyrillic: '西里尔字母',
    x: 'X 模式: 哈拼在借鉴老文字对于弱音符号的处理上创造了 X 模式, 例如: xa 相当于是在 a 添加了弱音符号修饰符。支持的修饰的字母仅有: xa, xe, xo, xu 构成与老文字一致。另外为了对西里尔字母的兼容, xx 表示 Ъ ъ, xy 表示 Ь ь',
    y: 'Y 模式: 哈拼为了支持汉语同音的 ye、yu (同 xu) 和哈萨克斯坦现行西里尔字母, 创造了 Y 模式。这也就意味着, 除了输入音 ye、yu (同 xu) 之外, 其余 Y 模式字母全都为西里尔哈萨克语特有字母, 仅有: yi, yo, yw, ya',
  },
  'en-US': {
    title: 'Hapin Playground',
    desc: 'Hapin playground is the practice for beginners',
    hapin: 'Hapin Scheme',
    arabic: 'The Persian-Arabic Alphabet',
    cyrillic: 'The Cyrillic Alphabet',
    x: 'X Mode: Hapin has created X mode based on how to handle the weak tone with Arabic Alphabet, ex: xa means that we add weak tone symbol to the alphabet a.',
    y: 'Y Mode:',
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
  ['xa', ['ٴا ', 'Ә ә']],
  ['xe', ['ٴى ', 'І і']],
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
  const [hapin, setHapin] = useState<string>();
  const [lang, setLang] = useState<string>('en-US');
  const [maped, setMaped] = useState<string[]>([]);
  const hapinRef = useRef<string>();

  useEffect(() => {
    if (location.pathname.split('/')[1] === 'zh-CN') {
      setLang('zh-CN');
    } else {
      setLang('en-US');
    }

    window.addEventListener('keypress', (ev) => {
      const { key } = ev;
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
    });
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

  return (
    <div>
      <div>
        <h1>{words[lang].title}</h1>
        <p>{words[lang].desc}</p>
      </div>
      <div className="keyboard">
        {qwerty_keyboard.map((row, idx) => (
          <ul key={`key-row-${idx}`} id={`key-row-${idx}`} className="key-row">
            {row.map((k) => (
              <li className="key" key={`key-${k}`} id={`key-${k}`}>
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
          <code className="res-arabic">{maped[0]}</code>
        </div>
        <div className="maping-item">
          <span>{words[lang].cyrillic}: </span>
          <code className="res-cyrillic">{maped[1]}</code>
        </div>
      </div>
    </div>
  );
}
