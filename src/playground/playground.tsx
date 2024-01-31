import React, { useEffect, useState } from 'react';

import './playground.css';

const words = {
  'zh-CN': {
    title: '哈拼演练场',
    desc: '哈拼演练场是为初学者准备的直观练习',
    hapin: '哈拼方案',
    arabic: '老文字',
    cyrillic: '西里尔字母',
  },
  'en-US': {
    title: 'Hapin Playground',
    desc: '',
    hapin: 'Hapin Scheme',
    arabic: 'The Persian-Arabic Alphabet',
    cyrillic: 'The Cyrillic Alphabet',
  },
};

const qwerty_keyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '?'],
];

// TODO 映射
const hapin_maping = new Map([
  ['a', ['ا', 'А а']],
  ['b', ['ب', 'Б б']],
  ['d', ['د', 'Д д']],
  ['e', ['ى', 'Ы ы']],
  ['f', ['ف', 'Ф ф']],
  ['g', ['گ', 'Г г']],
  ['h', ['ح', 'Х х']],
  ['i', ['ي', 'Й й И и']],
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
]);

const double_chars = ['x', 'y', 'g', 'h', 'n', 's', 'c'];

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
];

export default function Playground() {
  // ! 改成 before 更简单逻辑实现
  const [before, setBefore] = useState<string>();
  const [hapin, setHapin] = useState<string>();
  const [lang, setLang] = useState<string>('en-US');
  const [maped, setMaped] = useState<string[]>([]);

  useEffect(() => {
    // TODO 支持更多的语言
    if (location.pathname.split('/')[1] === 'zh-CN') {
      setLang('zh-CN');
    } else {
      setLang('en-US');
    }

    window.addEventListener('keypress', (ev) => {
      const { key } = ev;
      const _hapin = window._hapin;

      if (/^[a-zA-Z,;\?]{1}$/.test(key)) {
        if (
          _hapin?.length === 1 &&
          double_chars.includes(_hapin) &&
          double_valid.includes(`${_hapin}${key}`)
        ) {
          setHapin(`${_hapin}${key}`);
        } else {
          // 否则直接渲染单参数，并且清空 before
          // ! 需要修复
          setBefore(hapin);
          // deactiveKey(before)
          setHapin(key);
          activeKey(key);
        }
      }
    });
  }, []);

  useEffect(() => {
    window._hapin = hapin;
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

  const deactiveKey = (k: string) => {
    document.getElementById(`key-${k}`)?.classList.remove('key-active');
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
      <div>
        <p>
          {words[lang].hapin}: <code className="res-hapin">{hapin}</code>
        </p>
        <p>
          {words[lang].arabic}: <code className="res-arabic">{maped[0]}</code>
        </p>
        <p>
          {words[lang].cyrillic}:{' '}
          <code className="res-cyrillic">{maped[1]}</code>
        </p>
      </div>
    </div>
  );
}
