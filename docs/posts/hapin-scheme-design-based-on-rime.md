# 基于 Rime 的哈拼 Hapin 输入方案设计

## 关于 Rime

Rime 中文名为中州韵，是一款非常优秀的开源输入法解决方案。相比于现在自带了一堆捆绑、并且收集个人信息的输入法而言，Rime 足够输入但需要自己拓展词库。更高阶的玩法莫过于通读文档自定义输入方案了，再深入就是自己修改不同平台对应发行版的源码编译。

## 关于哈拼 Hapin

什么是哈拼呢？全程可以称为哈萨克语拼音化方案，来源于我的哈萨克语输入实验项目 [HerbertHe/rime-kz-experiment: 哈萨克语拼音化简化实验性方案 (github.com)](https://github.com/HerbertHe/rime-kz-experiment)。在上次的更新中，为了适配 [HerbertHe/open-kazakh (github.com)](https://github.com/HerbertHe/open-kazakh)（开放哈萨克语）项目，已经做了文档结构调整。文档的 Markdown 渲染基于 Vditor 实现，并且使用了我自己包的 [HerbertHe/react-vditor: Vditor Components for React! (github.com)](https://github.com/HerbertHe/react-vditor) 组件。

哈萨克语文字不统一、发音存在差异等因素，促使我们作为哈萨克语非母语者实在是学起来很困难。而哈拼在此之前只是为了解决一个问题——如何在 PC 端输入阿拉伯-波斯文字哈萨克语（下称老文字）？在 26 个字母的英文键盘上，需要输入 33 个哈萨克语阿拉伯文字。一种方式是直接对键盘做映射，而另一种方式是采用类似于拼音的方案。哈拼选择了第二套方案，并且结合汉语拼音、国际音标、哈语构词法、哈萨克斯坦哈语拉丁化改革、Wikipedia、知乎讨论等等设计了哈拼（Hapin、حاپين、Хапйн）输入方案。

哈拼的第一实验版采用了类似模糊拼音的方案，但是随着哈拼发展方向，试图变为推动**哈语拉丁化**和降低非哈语母语者学习哈萨克语（设计目标群体最开始其实是汉族）。相比于**西里尔哈萨克语**和**国际音标 IPA**对于拼音和英语导致的反常识，哈拼可以更好的处理了字母的映射关系。因此，在第一版模糊拼音的基础上，哈拼迎来了一次重大的 BREAK CHANGES，也是向哈拼正式版迈出的重要一步。下面为哈拼的第一版方案字符表，西里尔字母部分暂仅供参考，首先解决的是国内老文字输入的问题。

## 哈拼第一实验版

> 因为哈萨克斯坦尚未完成哈语拉丁化改革，因此这里列出来的拉丁化方案仅作为参考。在哈拼里程碑和计划中，是无限期推迟支持此拉丁化方案的。

| 哈拼方案 | 老文字 | 西里尔字母 | 拉丁化方案（仅供实验参考） |
| -------- | ------ | ---------- | -------------------------- |
| a        | ا      | А а        | A a                        |
| ae       | ٴا     | Ә ә        | Á á                        |
| b        | ب      | Б б        | B b                        |
| d        | د      | Д д        | D d                        |
| e        | ى      | Ы ы        | Y y                        |
| ie       | ە      | Е е        | E e                        |
| ue       | ٴى     | І і        |                            |
| f        | ف      | Ф ф        | F f                        |
| g        | گ      | Г г        | G g                        |
| gh       | ع      | Ғ ғ        |                            |
| h        | ح      | Х х        | H h                        |
| hh       | ھ      | Һ һ        | H h                        |
| i        | ي      | Й й        |                            |
| j        | ج      | Ж ж        | J j                        |
| k        | ك      | К к        | K k                        |
| l        | ل      | Л л        | L l                        |
| m        | م      | М м        | M m                        |
| n        | ن      | Н н        | N n                        |
| ng       | ڭ      | Ң ң        | Ń ń                        |
| o        | و      | О о        | O o                        |
| oe       | ٶ      | Ө ө        | Ó ó                        |
| p        | پ      | П п        | P p                        |
| q        | ق      | Қ қ        | Q q                        |
| r        | ر      | Р р        | R r                        |
| s        | س      | С с        | S s                        |
| t        | ت      | Т т        | T t                        |
| u        | ۇ      | Ұ ұ        | U u                        |
| iu       | ٷ      | Ү ү        | Ú ú                        |
| v        | ۆ      | В в        | V v                        |
| w        | ۋ      | У у        | Ý ý                        |
| z        | ز      | З з        | Z z                        |
| sh       | ش      | Ш ш        | Sh sh                      |
| ch       | چ      | Ц ц        | Ch ch                      |

- 老文字特殊符号:

| 哈拼方案 | 老文字 |
| -------- | ------ |
| x        | ٴ      |
| ,        | ،      |
| ?        | ؟      |
| ;        | ؛      |
| -        | ۔      |
| .        | ٜ      |

## 哈拼第一正式版预览

> 当前仍在修改中，已经解决了绝大部分的问题~感谢 [学哈语的小迟同学的个人空间\_哔哩哔哩\_bilibili](https://space.bilibili.com/431339250) 的指导，才得以进一步完善哈拼输入方案

### 哈拼单字符字母表

| 哈拼方案 | 老文字 | 西里尔字母 | 拉丁化方案 |
| -------- | ------ | ---------- | ---------- |
| a        | ا      | А а        | A a        |
| b        | ب      | Б б        | B b        |
| d        | د      | Д д        | D d        |
| e        | ى      | Ы ы        | Y y        |
| f        | ف      | Ф ф        | F f        |
| g        | گ      | Г г        | G g        |
| h        | ح      | Х х        | H h        |
| i        | ي      | Й й        |            |
| j        | ج      | Ж ж        | J j        |
| k        | ك      | К к        | K k        |
| l        | ل      | Л л        | L l        |
| m        | م      | М м        | M m        |
| n        | ن      | Н н        | N n        |
| o        | و      | О о        | O o        |
| p        | پ      | П п        | P p        |
| q        | ق      | Қ қ        | Q q        |
| r        | ر      | Р р        | R r        |
| s        | س      | С с        | S s        |
| t        | ت      | Т т        | T t        |
| u        | ۇ      | Ұ ұ        | U u        |
| v        | ۆ      | В в        | V v        |
| w        | ۋ      | У у        | Ý ý        |
| z        | ز      | З з        | Z z        |

### 哈拼双字符字母表（部分有所修改）

| 哈拼方案 | 老文字 | 西里尔字母 | 拉丁化方案 | 修改内容                         |
| -------- | ------ | ---------- | ---------- | -------------------------------- |
| ye       | ە      | Е е        | E e        | ie -> ye 消除可能导致的 i e 歧义 |
| gh       | ع      | Ғ ғ        |            | 无                               |
| hh       | ھ      | Һ һ        | H h        | 无                               |
| ng       | ڭ      | Ң ң        | Ń ń        | 无                               |
| sh       | ش      | Ш ш        | Sh sh      | 无                               |
| ch       | چ      | Ц ц        | Ch ch      | 无                               |

### 哈拼弱音字符字母表（重大修改）

| 哈拼方案 | 老文字 | 西里尔字母 | 拉丁化方案 | 修改内容（均是为了消除歧义）                    |
| -------- | ------ | ---------- | ---------- | ----------------------------------------------- |
| xa       | ٴا     | Ә ә        | Á á        | ae -> xa                                        |
| xe       | ٴى     | І і        |            | ue -> xe                                        |
| xo       | ٶ      | Ө ө        | Ó ó        | oe -> xo                                        |
| xu / yu  | ٷ      | Ү ү        | Ú ú        | iu -> xu / yu，其中 yu 是保留的哈拼方案语音改版 |

### 哈拼老文字符号表

| 哈拼方案 | 老文字 |
| -------- | ------ |
| x        | ٴ      |
| ,        | ،      |
| ?        | ؟      |
| ;        | ؛      |
| -        | ۔      |
| .        | ٜ      |

### 哈拼第一正式版预览实例

> 第一正式版截至此篇总结尚未完成 Rime 输入方案更新，但已经可以作为没有哈语输入法的拼音化沟通方案

- جاقسى

  > jaqse

- سالىم

  > sxalem

- بوقجە

  > boqjye

## 哈拼 Rime hapin-arabic 方案修改

> [HerbertHe/hapin-arabic: Rime Hapin Input Schema رايم حاپين ەنگيزۋ سقەماسى (github.com)](https://github.com/HerbertHe/hapin-arabic) 方案已经在 GPL v3 协议下开源，但其基于哈拼第一实验版的方案，将会在之后的更新中通过到第一正式版。

对于从来没有接触过哈拼的小迟同学，在哈语专业+其为汉族的基础上，一分钟内完全掌握了哈拼的设计思路和字母表，这正是哈拼所希望达到的效果。哈拼其实非常的简单，并且同时消除了老文字弱音拼写规则导致的拼读失误情况。哈拼设计是站在巨人的肩膀上的，融合了汉语拼音的读音、主流读音拉丁化设计、老文字构字法等。

哈拼在正式版做出修改之处其实非常简单，因为 x 和 y 在哈拼输入场景里面的优先级比较低，因此使用了 x 作为弱音符号输入，y 的引入借鉴于汉语拼音对于 iu、ie 之类的处理，确实消除了哈拼可能导致的歧义情况。

目前需要解决的难题无非是单词内出现弱音，如何处理哈语老文字弱音符号省略的情况。

## 哈拼未来发展计划

哈拼第一正式版预览已经比较完备了，自行实现的 hapin-arabic 输入方案已经帮助我可以在 PC 端通过 [rime/weasel: 【小狼毫】Rime for Windows (github.com)](https://github.com/rime/weasel) 实现 Windows 端的哈语老文字的键入。但是我依然不满意，因为小狼毫只提供了繁体中文的支持。所以在哈拼的路线图中的规划是：

1. 发布哈拼正式版方案
2. 发布 hapin-arabic Rime 输入方案
3. 基于 Rime 各端发行版修改源码自行编译输入法发布
