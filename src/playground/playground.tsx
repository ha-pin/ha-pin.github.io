import React, { useEffect, useState } from 'react';

import './playground.css';

const words = {
  'zh-CN': {
    title: '哈拼演练场',
    desc: '哈拼演练场是为初学者准备的直观练习',
  },
  'en-US': {
    title: 'Hapin Playground',
    desc: '',
  },
};

const qwerty_keyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '?'],
];

export default function Playground() {
  const [hapin, setHapin] = useState<string>();
  const [lang, setLang] = useState<string>('en-US');
  const [double, setDouble] = useState<string>();

  useEffect(() => {
    if (location.pathname.split('/')[1] === 'zh-CN') {
      setLang('zh-CN');
    } else {
      setLang('en-US');
    }

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

    window.addEventListener('keydown', (ev) => {
      const { key } = ev;

      if (key === '/') {
        document.getElementById(`key-?`)?.classList.remove('key-active');
      }

      // ! 单双冲突的问题
      if (/^[a-zA-Z,;\?]{1}$/.test(key)) {
        if (!double_chars.includes(key)) {
          if (!!double) {
            if (double_valid.includes(`${double}${key}`)) {
              // 双字符模式
              setHapin(`${double}${key}`);
              activeKey(key);
            } else {
              // 取消双字符模式
              deactiveKey(double);
              setDouble('');
              setHapin(key);
              activeKey(key);
            }
          } else {
            // 纯单字符模式
            setHapin(key);
            activeKey(key);
          }
        } else {
          // 双字符模式
          if (!!double) {
            if (double_valid.includes(`${double}${key}`)) {
              // 双字符模式
              setHapin(`${double}${key}`);
              activeKey(key);
            } else {
              // 取消双字符模式
              deactiveKey(double);
              setDouble(key);
              setHapin(key);
              activeKey(key);
            }
          } else {
            // 不存在序列
            setDouble(key);
            activeKey(key);
          }
        }
      }
    });

    window.addEventListener('keyup', (ev) => {
      const { key } = ev;
      if (/^[a-zA-Z,;\?]{1}$/.test(key)) {
        setHapin(key);
        document.getElementById(`key-${key}`)?.classList.remove('key-active');
      }
    });
  }, []);

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
          当前激活哈拼方案为: <code>{hapin}</code>
        </p>
        <p>
          对应老文字: <code></code>
        </p>
        <p>
          对应西里尔字母: <code></code>
        </p>
      </div>
      {/* TODO 绘制可视化键盘 */}
    </div>
  );
}
