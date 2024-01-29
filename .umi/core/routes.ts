// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Volumes/Element/Projects/ha-pin.github.io/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Volumes/Element/Projects/ha-pin.github.io/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Volumes/Element/Projects/ha-pin.github.io/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/getting-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__getting-started.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/getting-started.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started.md",
          "updatedTime": 1650873138000,
          "nav": {
            "title": "Getting Started",
            "order": 1,
            "path": "/getting-started"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Getting Started",
              "heading": "getting-started"
            },
            {
              "depth": 3,
              "value": "Beginner",
              "heading": "beginner"
            }
          ],
          "title": "Getting Started"
        },
        "title": "Getting Started - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/getting-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__getting-started.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/getting-started.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started.zh-CN.md",
          "updatedTime": 1650871495000,
          "nav": {
            "title": "快速上手",
            "order": 1,
            "path": "/zh-CN/getting-started"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 3,
              "value": "新手上路",
              "heading": "新手上路"
            },
            {
              "depth": 3,
              "value": "快速查阅",
              "heading": "快速查阅"
            }
          ],
          "title": "快速上手",
          "locale": "zh-CN"
        },
        "title": "快速上手 - 哈拼 Hapin حاپين"
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1702268614000,
          "hero": {
            "title": "Hapin",
            "desc": "<div class=\"markdown\"><p>The Alphabetization of Kazakh language</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/getting-started"
              },
              {
                "text": "Join Discord",
                "link": "https://discord.gg/aU2BsjSqhq"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Copyright © 2023 <a href=\"https://github.com/ha-pin\" target=\"_blank\">Hapin<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a> All Rights Reserved <br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Hello Hapin",
              "heading": "hello-hapin"
            }
          ],
          "title": "Hello Hapin"
        },
        "title": "Hello Hapin - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.zh-CN.md",
          "updatedTime": 1702268614000,
          "hero": {
            "title": "哈拼",
            "desc": "<div class=\"markdown\"><p>哈萨克语拼音化</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/getting-started"
              },
              {
                "text": "加入 Discord",
                "link": "https://discord.gg/aU2BsjSqhq"
              }
            ],
            "footer": "Copyright &copy; 2023 [Hapin](https://github.com/ha-pin) All Rights Reserved <br />Powered by [dumi](https://d.umijs.org)"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "你好，哈拼",
              "heading": "你好哈拼"
            }
          ],
          "title": "你好，哈拼",
          "locale": "zh-CN"
        },
        "title": "你好，哈拼 - 哈拼 Hapin حاپين"
      },
      {
        "path": "/developer/hapin-dict",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__hapin-dict.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/hapin-dict.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/hapin-dict.md",
          "updatedTime": 1662137257000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Dict",
              "heading": "hapin-dict"
            }
          ],
          "title": "Hapin Dict",
          "nav": {
            "path": "/developer",
            "title": "For Developer"
          }
        },
        "title": "Hapin Dict - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/developer/hapin-dict",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__hapin-dict.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/hapin-dict.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/hapin-dict.zh-CN.md",
          "updatedTime": 1662137257000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Dict",
              "heading": "hapin-dict"
            }
          ],
          "title": "Hapin Dict",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/developer",
            "title": "开发支持"
          }
        },
        "title": "Hapin Dict - 哈拼 Hapin حاپين"
      },
      {
        "path": "/developer/hapin-tools",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__hapin-tools.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/hapin-tools.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/hapin-tools.md",
          "updatedTime": 1662137257000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Tools",
              "heading": "hapin-tools"
            }
          ],
          "title": "Hapin Tools",
          "nav": {
            "path": "/developer",
            "title": "For Developer"
          }
        },
        "title": "Hapin Tools - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/developer/hapin-tools",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__hapin-tools.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/hapin-tools.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/hapin-tools.zh-CN.md",
          "updatedTime": 1662137257000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Tools",
              "heading": "hapin-tools"
            }
          ],
          "title": "Hapin Tools",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/developer",
            "title": "开发支持"
          }
        },
        "title": "Hapin Tools - 哈拼 Hapin حاپين"
      },
      {
        "path": "/developer/hapin-utils-rs",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__hapin-utils-rs.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/hapin-utils-rs.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/hapin-utils-rs.md",
          "updatedTime": 1662137257000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Utils for Rust",
              "heading": "hapin-utils-for-rust"
            }
          ],
          "title": "Hapin Utils for Rust",
          "nav": {
            "path": "/developer",
            "title": "For Developer"
          }
        },
        "title": "Hapin Utils for Rust - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/developer/hapin-utils-rs",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__hapin-utils-rs.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/hapin-utils-rs.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/hapin-utils-rs.zh-CN.md",
          "updatedTime": 1662137257000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Utils for Rust",
              "heading": "hapin-utils-for-rust"
            }
          ],
          "title": "Hapin Utils for Rust",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/developer",
            "title": "开发支持"
          }
        },
        "title": "Hapin Utils for Rust - 哈拼 Hapin حاپين"
      },
      {
        "path": "/developer/hapin-utils",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__hapin-utils.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/hapin-utils.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/hapin-utils.md",
          "updatedTime": 1662137257000,
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Utils",
              "heading": "hapin-utils"
            },
            {
              "depth": 2,
              "value": "Getting Started",
              "heading": "getting-started"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "LICENSE",
              "heading": "license"
            }
          ],
          "title": "Hapin Utils",
          "nav": {
            "path": "/developer",
            "title": "For Developer"
          }
        },
        "title": "Hapin Utils - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/developer/hapin-utils",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__hapin-utils.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/hapin-utils.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/hapin-utils.zh-CN.md",
          "updatedTime": 1662137257000,
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Utils",
              "heading": "hapin-utils"
            },
            {
              "depth": 2,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "许可证",
              "heading": "许可证"
            }
          ],
          "title": "Hapin Utils",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/developer",
            "title": "开发支持"
          }
        },
        "title": "Hapin Utils - 哈拼 Hapin حاپين"
      },
      {
        "path": "/developer",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__index.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/index.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "For Developer",
            "path": "/developer"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 2,
              "value": "For Developer",
              "heading": "for-developer"
            }
          ],
          "title": "For Developer"
        },
        "title": "For Developer - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/developer",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__developer__index.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/developer/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/developer/index.zh-CN.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "开发支持",
            "path": "/zh-CN/developer"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 2,
              "value": "技术开源",
              "heading": "技术开源"
            }
          ],
          "title": "技术开源",
          "locale": "zh-CN"
        },
        "title": "技术开源 - 哈拼 Hapin حاپين"
      },
      {
        "path": "/ime/hapin-arabic",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__ime__hapin-arabic.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/ime/hapin-arabic.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/ime/hapin-arabic.md",
          "updatedTime": 1659107132000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Arabic",
              "heading": "hapin-arabic"
            },
            {
              "depth": 2,
              "value": "Download",
              "heading": "download"
            }
          ],
          "title": "Hapin Arabic",
          "nav": {
            "path": "/ime",
            "title": "IME Support"
          }
        },
        "title": "Hapin Arabic - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/ime/hapin-arabic",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__ime__hapin-arabic.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/ime/hapin-arabic.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/ime/hapin-arabic.zh-CN.md",
          "updatedTime": 1650871495000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Arabic",
              "heading": "hapin-arabic"
            },
            {
              "depth": 2,
              "value": "下载方案",
              "heading": "下载方案"
            },
            {
              "depth": 2,
              "value": "注意事项",
              "heading": "注意事项"
            }
          ],
          "title": "Hapin Arabic",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/ime",
            "title": "输入法支持"
          }
        },
        "title": "Hapin Arabic - 哈拼 Hapin حاپين"
      },
      {
        "path": "/ime/hapin-cyrillic",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__ime__hapin-cyrillic.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/ime/hapin-cyrillic.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/ime/hapin-cyrillic.md",
          "updatedTime": 1659107132000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Cyrillic",
              "heading": "hapin-cyrillic"
            },
            {
              "depth": 2,
              "value": "Download",
              "heading": "download"
            }
          ],
          "title": "Hapin Cyrillic",
          "nav": {
            "path": "/ime",
            "title": "IME Support"
          }
        },
        "title": "Hapin Cyrillic - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/ime/hapin-cyrillic",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__ime__hapin-cyrillic.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/ime/hapin-cyrillic.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/ime/hapin-cyrillic.zh-CN.md",
          "updatedTime": 1659107132000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hapin Cyrillic",
              "heading": "hapin-cyrillic"
            },
            {
              "depth": 2,
              "value": "下载方案",
              "heading": "下载方案"
            }
          ],
          "title": "Hapin Cyrillic",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/ime",
            "title": "输入法支持"
          }
        },
        "title": "Hapin Cyrillic - 哈拼 Hapin حاپين"
      },
      {
        "path": "/ime",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__ime__index.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/ime/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/ime/index.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "IME Support",
            "order": 3,
            "path": "/ime"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "IME Support",
              "heading": "ime-support"
            }
          ],
          "title": "IME Support"
        },
        "title": "IME Support - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/ime",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__ime__index.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/ime/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/ime/index.zh-CN.md",
          "updatedTime": 1659107132000,
          "nav": {
            "title": "输入法支持",
            "order": 3,
            "path": "/zh-CN/ime"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "输入法支持",
              "heading": "输入法支持"
            }
          ],
          "title": "输入法支持",
          "locale": "zh-CN"
        },
        "title": "输入法支持 - 哈拼 Hapin حاپين"
      },
      {
        "path": "/projects/browser",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__projects__browser.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/projects/browser.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/projects/browser.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "Browser Support",
            "path": "/projects"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Browser Support",
              "heading": "browser-support"
            },
            {
              "depth": 2,
              "value": "Hapin Plus",
              "heading": "hapin-plus"
            }
          ],
          "title": "Browser Support"
        },
        "title": "Browser Support - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/projects/browser",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__projects__browser.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/projects/browser.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/projects/browser.zh-CN.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "浏览器支持",
            "path": "/zh-CN/projects"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "浏览器支持",
              "heading": "浏览器支持"
            },
            {
              "depth": 2,
              "value": "Hapin Plus",
              "heading": "hapin-plus"
            }
          ],
          "title": "浏览器支持",
          "locale": "zh-CN"
        },
        "title": "浏览器支持 - 哈拼 Hapin حاپين"
      },
      {
        "path": "/projects",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__projects__index.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/projects/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/projects/index.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "Projects",
            "path": "/projects"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 2,
              "value": "Projects",
              "heading": "projects"
            }
          ],
          "title": "Projects"
        },
        "title": "Projects - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/projects",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__projects__index.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/projects/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/projects/index.zh-CN.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "衍生项目",
            "path": "/zh-CN/projects"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 2,
              "value": "衍生项目",
              "heading": "衍生项目"
            }
          ],
          "title": "衍生项目",
          "locale": "zh-CN"
        },
        "title": "衍生项目 - 哈拼 Hapin حاپين"
      },
      {
        "path": "/projects/miniprogram",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__projects__miniprogram.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/projects/miniprogram.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/projects/miniprogram.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "Miniprogram",
            "path": "/projects"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 2,
              "value": "Miniprogram",
              "heading": "miniprogram"
            }
          ],
          "title": "Miniprogram"
        },
        "title": "Miniprogram - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/projects/miniprogram",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__projects__miniprogram.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/projects/miniprogram.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/projects/miniprogram.zh-CN.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "小程序支持",
            "path": "/zh-CN/projects"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 2,
              "value": "小程序支持",
              "heading": "小程序支持"
            }
          ],
          "title": "小程序支持",
          "locale": "zh-CN"
        },
        "title": "小程序支持 - 哈拼 Hapin حاپين"
      },
      {
        "path": "/standardize",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__standardize__index.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/standardize/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/standardize/index.md",
          "updatedTime": 1662137257000,
          "nav": {
            "title": "Standardize",
            "order": 2,
            "path": "/standardize"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "The Standardization of Hapin",
              "heading": "the-standardization-of-hapin"
            },
            {
              "depth": 2,
              "value": "Open Source",
              "heading": "open-source"
            },
            {
              "depth": 2,
              "value": "Hapin Offical Scheme",
              "heading": "hapin-offical-scheme"
            },
            {
              "depth": 3,
              "value": "Hapin Alphabet",
              "heading": "hapin-alphabet"
            },
            {
              "depth": 3,
              "value": "Symbols for The Persian-Arabic Alphabet",
              "heading": "symbols-for-the-persian-arabic-alphabet"
            },
            {
              "depth": 3,
              "value": "For The Cyrillic Alphabet",
              "heading": "for-the-cyrillic-alphabet"
            },
            {
              "depth": 3,
              "value": "Only for The Cyrillic Alphabet",
              "heading": "only-for-the-cyrillic-alphabet"
            }
          ],
          "title": "The Standardization of Hapin"
        },
        "title": "The Standardization of Hapin - 哈拼 Hapin حاپين"
      },
      {
        "path": "/zh-CN/standardize",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__standardize__index.zh-CN.md' */'/Volumes/Element/Projects/ha-pin.github.io/docs/standardize/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/standardize/index.zh-CN.md",
          "updatedTime": 1650871495000,
          "nav": {
            "title": "哈拼标准化",
            "order": 2,
            "path": "/zh-CN/standardize"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "哈拼标准化",
              "heading": "哈拼标准化"
            },
            {
              "depth": 2,
              "value": "项目开源",
              "heading": "项目开源"
            },
            {
              "depth": 2,
              "value": "哈拼正式版",
              "heading": "哈拼正式版"
            },
            {
              "depth": 3,
              "value": "哈拼单字符字母表",
              "heading": "哈拼单字符字母表"
            },
            {
              "depth": 3,
              "value": "哈拼双字符字母表",
              "heading": "哈拼双字符字母表"
            },
            {
              "depth": 3,
              "value": "哈拼弱音字符字母表",
              "heading": "哈拼弱音字符字母表"
            },
            {
              "depth": 3,
              "value": "哈拼老文字符号表",
              "heading": "哈拼老文字符号表"
            },
            {
              "depth": 3,
              "value": "哈拼西里尔字母表",
              "heading": "哈拼西里尔字母表"
            }
          ],
          "title": "哈拼标准化",
          "locale": "zh-CN"
        },
        "title": "哈拼标准化 - 哈拼 Hapin حاپين"
      }
    ],
    "title": "哈拼 Hapin حاپين",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
