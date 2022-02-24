import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  InjectionToken,
  Optional,
  ViewContainerRef,
} from "@angular/core";
import { marked } from "marked";
import { BlockquoteComponent } from "./component/blockquote.component";
import { CodeComponent } from "./component/code.component";
import { CodespanComponent } from "./component/codespan.component";
import { DelComponent } from "./component/del.component";
import { EmComponent } from "./component/em.component";
import { HeadingComponent } from "./component/heading.component";
import { HrComponent } from "./component/hr.component";
import { HTMLComponent } from "./component/html.component";
import { ImageComponent } from "./component/image.component";
import { LinkComponent } from "./component/link.component";
import { ListItemComponent } from "./component/list-item.component";
import { ListCompoent } from "./component/list.component";
import { ParagraphComponent } from "./component/paragraph.component";
import { SpaceComponent } from "./component/space.component";
import { StrongComponent } from "./component/strong.component";
import { TableComponent } from "./component/table.component";
import { TextComponent } from "./component/text.component";
import { BlockquoteDirective } from "./directive/blockquote.directive";
import { BrDirective } from "./directive/br.directive";
import { CodeDirective } from "./directive/code.directive";
import { CodespanDirective } from "./directive/codespan.directive";
import { DelDirective } from "./directive/del.directive";
import { EmDirective } from "./directive/em.directive";
import { HeadingDirective } from "./directive/heading.directive";
import { HrDirective } from "./directive/hr.directive";
import { HTMLDirective } from "./directive/html.directive";
import { ImageDirective } from "./directive/image.directive";
import { LinkDirective } from "./directive/link.directive";
import { ListItemDirective } from "./directive/list-item.directive";
import { ListDirective } from "./directive/list.directive";
import { ParagraphDirective } from "./directive/paragraph.directive";
import { SpaceDirective } from "./directive/space.directive";
import { StrongDirective } from "./directive/strong.directive";
import { TableDirective } from "./directive/table.directive";
import { TextDirective } from "./directive/text.directive";
import { RendererOptions } from "./renderer-options";

@Injectable({
  providedIn: "root",
})
export class MarkdownRendererService {
  constructor(
    @Optional() public rendererOptions: RendererOptions,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
  init(): marked.TokensList {
    console.log("xxxx:---", this.rendererOptions);

    console.time();
    const res = marked.lexer(
      "~~2222~~ \n\n创建脚注格式类似这样 [^RUNOOB]。\n\ncodespan:\`我是code\`\n\n*`2` ![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/)1*\n\n_1_\n\n[aa ![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/)a](baidu.com)\n\n**# 2*2[1__2__](22)*22x_2_22**\n\n_1_\n\n__222__\n\n*__**33333**__*\n\n___3333___\n\n`_2_` \n\n*_2_*\n\n***${content}**wwww__22__*\n\n_2_xxx*33*xxx***cccc***\n\n_**${content}***_\n\n\n\n# 测试标题 h1标题\n\n> 这是一行引用Ï\n\n## 测试内容 我写写写,很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/)长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长\n\n照理来说 这一行主页应该是看不见的\n\n测试内容 我写写写\n\n![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/)\n\n![](https://upyun.yunyoujun.cn/images/photoshop-gaussian-blur.jpg)\n\n## 1.H2\n\n### 1.h3\n\n#### 1.H4\n\n##### 1.H5\n\n###### 1.h6\n\n\n\n## 2.h2\n\n### 2.h3\n\n### 2.2 h3\n\n\n\n这里需要一些额外的空间\n\n\n\n\n\n### 2.3 h3\n\n\n\n\n\n\n\n###### h6\n\n# 3.h1\n\n`scp -r /Users/kuubee/Desktop/self_porject/学习笔记/test_markdown.md aili:/home/assets/markdown/`\n\n\n\n## 3.h2\n\n### 3.2.h2\n\n# h1 2\n\n## h2 2.1\n\n### h3 2.1.1\n\n### h3 2.1.2\n\n## h2 2.2\n\n\n\n\n\n### h3 2.2.1\n\n### h3 2.2.2\n\n# 和1111\n\n----\n\n总是要隔一行吧\n\n----\n\n\n\n# h11111-2\n\n\n\n\n\n\n\n> 我是引用行\n\n| `222`   | a2   | A3   |\n| :---- | ----: | :----: |\n| `222` | ![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/ 'xxxxx') | 7    |\n| [x] 这里是被选中的孩子    | > 2222222 | 8    |\n| [嘿嘿 ![222](https://steamuserimages-a.akamaihd.net/ugc/81464671841976045/1F05AE98A3F94EA89D54842993E3E6477EA74785/ 'xxxxx')嘿](https://baidu.com \"222\") <https://www.runoob.com \"xxxx\"> | ------- | 9    |\n\n1. 第一\n2. [x] 第二\n3. [嘿嘿嘿](baidu.com)\n1. 第四\n\n- 第一\n- 第二\n- 第三\n\nwowow \n\n-----\n\n- [x] 这里是被选中的孩子\n- [ ] 这里是没被选中的孩子\n\n[baidu.com]: baidu.com\t\"标题\"\n\n[^我也不知道这是啥]: 可能吧\n\n------\n\n**嘿嘿嘿**\n\n*嘿嘿嘿*\n\n<u>嘿嘿嘿</u>\n\n~~嘿嘿嘿~~\n\n哇哦`嘿嘿嘿` 哇哦`text`哇哈哈\n\n[嘿嘿嘿](baidu.com)\n\n[我是链接](./blog/tag)\n\n***<u>嘿嘿嘿</u>***\n\n`code 我是`\n\n```js\n// 我是 js\nconst a = 2;\nconsole.log(a)\n```\n\n```typescript\n// 我是ts\nconst a:string = '2' \nconst b:any = {};\nconosle.log(a,b);\nfunction aa(){\n  return a+b;\n}\n```\n\n\n\n\n\n\n[^RUNxOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！\n\n\n",
    );
    console.log(res);
    const list = res.find((item) => item.type === "del");
    console.log(list);

    console.timeEnd();
    return res;
  }

  loadComponent(
    data: marked.Token,
    {
      mdHTML,
      mdHeading,
      mdBlockquote,
      mdCode,
      mdCodespan,
      mdDel,
      mdEm,
      mdHr,
      mdImage,
      mdLink,
      mdList,
      mdListItem,
      mdParagraph,
      mdSpace,
      mdStrong,
      mdText,
      mdTable,
      mdBr
    }: {
      mdHeading: HeadingDirective;
      mdBlockquote: BlockquoteDirective;
      mdCode: CodeDirective;
      mdCodespan: CodespanDirective;
      mdDel: DelDirective;
      mdHr: HrDirective;
      mdImage: ImageDirective;
      mdLink: LinkDirective;
      mdList: ListDirective;
      mdListItem: ListItemDirective;
      mdParagraph: ParagraphDirective;
      mdStrong: StrongDirective;
      mdText: TextDirective;
      mdEm: EmDirective;
      mdSpace: SpaceDirective;
      mdHTML: HTMLDirective;
      mdTable: TableDirective;
      mdBr: BrDirective
    },
  ) {
    switch (data.type) {
      case "heading": {
        this.setComponent(mdHeading.viewContainerRef, this.rendererOptions.components?.heading ?? HeadingComponent, {
          data,
        });
        break;
      }
      case "blockquote": {
        this.setComponent(
          mdBlockquote.viewContainerRef,
          BlockquoteComponent,
          {
            data,
          },
        );
        break;
      }
      case "code": {
        this.setComponent(mdCode.viewContainerRef, CodeComponent, {
          data,
        });
        break;
      }
      case "codespan": {
        this.setComponent(mdCodespan.viewContainerRef, CodespanComponent, {
          data,
        });
        break;
      }
      case "del": {
        this.setComponent(mdDel.viewContainerRef, DelComponent, {
          data,
        });
        break;
      }
      case "hr": {
        this.setComponent(mdHeading.viewContainerRef, HrComponent);
        break;
      }
      case "image": {
        this.setComponent(mdImage.viewContainerRef, ImageComponent, {
          data,
        });
        break;
      }
      case "link": {
        this.setComponent(mdLink.viewContainerRef, LinkComponent, {
          data,
        });
        break;
      }
      case "list_item": {
        this.setComponent(mdListItem.viewContainerRef, ListItemComponent, {
          data,
        });
        break;
      }
      case "list": {
        this.setComponent(mdList.viewContainerRef, ListCompoent, {
          data,
        });
        break;
      }
      case "paragraph": {
        this.setComponent(
          mdParagraph.viewContainerRef,
          ParagraphComponent,
          {
            data,
          },
        );
        break;
      }
      case "strong": {
        this.setComponent(mdStrong.viewContainerRef, StrongComponent, {
          data,
        });
        break;
      }
      case "text": {
        this.setComponent(mdText.viewContainerRef, TextComponent, {
          data,
        });
        break;
      }
      case "em": {
        this.setComponent(mdEm.viewContainerRef, EmComponent, {
          data,
        });
        break;
      }
      case "space": {
        this.setComponent(mdSpace.viewContainerRef, SpaceComponent, {
          data,
        });
        break;
      }
      case "html": {
        this.setComponent(mdHTML.viewContainerRef, HTMLComponent, {
          data,
        });
        break;
      }
      case "table": {
        this.setComponent(mdTable.viewContainerRef, TableComponent, {
          data,
        });
        break;
      }
      case "hr": {
        this.setComponent(mdHr.viewContainerRef, HrComponent, {
          data,
        });
        break;
      }
      case "br": {
        this.setComponent(mdBr.viewContainerRef, HrComponent, {
          data,
        });
        break;
      }
      default:
        console.error("Elements not yet supported:", data.type);
        break;
    }
  }
  setComponent(
    ref: ViewContainerRef,
    component: any,
    data?: Record<string, any>,
  ) {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(component);
    const componentRef = ref.createComponent<any>(componentFactory);
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          componentRef.instance[key] = element;
        }
      }
    }
  }
}
