import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkdownRendererService {
  constructor() {}
  init(): marked.TokensList {
    console.time();

    const res = marked.lexer(
      '创建脚注格式类似这样 [^RUNOOB]。\n\ncodespan:`我是code`\n\n*`2` ![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/)1*\n\n_1_\n\n[aa ![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/)a](baidu.com)\n\n**# 2*2[1__2__](22)*22x_2_22**\n\n_1_\n\n__222__\n\n*__**33333**__*\n\n___3333___\n\n`_2_` \n\n*_2_*\n\n***${content}**wwww__22__*\n\n_2_xxx*33*xxx***cccc***\n\n_**${content}***_\n\n\n\n# 测试标题 h1标题\n\n> 这是一行引用Ï\n\n## 测试内容 我写写写,很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/)长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长\n\n照理来说 这一行主页应该是看不见的\n\n测试内容 我写写写\n\n![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/)\n\n![](https://upyun.yunyoujun.cn/images/photoshop-gaussian-blur.jpg)\n\n## 1.H2\n\n### 1.h3\n\n#### 1.H4\n\n##### 1.H5\n\n###### 1.h6\n\n\n\n## 2.h2\n\n### 2.h3\n\n### 2.2 h3\n\n\n\n这里需要一些额外的空间\n\n\n\n\n\n### 2.3 h3\n\n\n\n\n\n\n\n###### h6\n\n# 3.h1\n\n`scp -r /Users/kuubee/Desktop/self_porject/学习笔记/test_markdown.md aili:/home/assets/markdown/`\n\n\n\n## 3.h2\n\n### 3.2.h2\n\n# h1 2\n\n## h2 2.1\n\n### h3 2.1.1\n\n### h3 2.1.2\n\n## h2 2.2\n\n\n\n\n\n### h3 2.2.1\n\n### h3 2.2.2\n\n# 和1111\n\n----\n\n总是要隔一行吧\n\n----\n\n\n\n# h11111-2\n\n\n\n\n\n\n\n> 我是引用行\n\n| `222`   | a2   | A3   |\n| :---- | ----: | :----: |\n| `222` | ![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/ \'xxxxx\') | 7    |\n| [x] 这里是被选中的孩子    | > 2222222 | 8    |\n| [嘿嘿 ![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/ \'xxxxx\')嘿](https://baidu.com "222") <https://www.runoob.com "xxxx"> | ------- | 9    |\n\n1. 第一\n2. [x] 第二\n3. [嘿嘿嘿](baidu.com)\n1. 第四\n\n- 第一\n- 第二\n- 第三\n\nwowow \n\n-----\n\n- [x] 这里是被选中的孩子\n- [ ] 这里是没被选中的孩子\n\n[baidu.com]: baidu.com\t"标题"\n\n[^我也不知道这是啥]: 可能吧\n\n------\n\n**嘿嘿嘿**\n\n*嘿嘿嘿*\n\n<u>嘿嘿嘿</u>\n\n~~嘿嘿嘿~~\n\n哇哦`嘿嘿嘿` 哇哦`text`哇哈哈\n\n[嘿嘿嘿](baidu.com)\n\n[我是链接](./blog/tag)\n\n***<u>嘿嘿嘿</u>***\n\n`code 我是`\n\n```js\n// 我是 js\nconst a = 2;\nconsole.log(a)\n```\n\n```typescript\n// 我是ts\nconst a:string = \'2\'\nconst b:any = {};\nconosle.log(a,b);\nfunction aa(){\n  return a+b;\n}\n```\n\n\n\n\n\n\n[^RUNxOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！\n\n\n'
    );
    // console.log(res);
    const list = res.find((item) => item.type === 'list');
    console.log(list);

    console.timeEnd();
    return res;
  }
}
