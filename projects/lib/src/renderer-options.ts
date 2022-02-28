/*
 * @Descripttion: 渲染器配置
 * @Author: KuuBee
 * @Date: 2022-02-23 14:49:54
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-24 10:55:30
 */

import { Type } from "@angular/core";
import { HeadingComponent } from "./component/heading.component";
import { BlockquoteComponent } from './component/blockquote.component';
import { CodeComponent } from './component/code.component';
import { CodespanComponent } from './component/codespan.component';
import { DelComponent } from './component/del.component';
import { EmComponent } from './component/em.component';
import { HrComponent } from './component/hr.component';
import { HTMLComponent } from './component/html.component';
import { ImageComponent } from './component/image.component';
import { LinkComponent } from './component/link.component';
import { ListItemComponent } from './component/list-item.component';
import { ListCompoent } from './component/list.component';
import { ParagraphComponent } from './component/paragraph.component';
import { SpaceComponent } from './component/space.component';
import { StrongComponent } from './component/strong.component';
import { TableComponent } from './component/table.component';
import { TextComponent } from './component/text.component';
import { BrComponent } from "./component/br.component";

export interface RendererComponents {
  // "space" | "code" | "heading" | "table" | "hr" | "blockquote" | "list"
  // | "list_item" | "paragraph" | "html" | "text" | "def" | "escape" |
  // "image" | "link" | "strong" | "em" | "codespan" | "br" | "del"
  heading?: Type<HeadingComponent>,
  blockquote?: Type<BlockquoteComponent>,
  paragraph?: Type<ParagraphComponent>,
  code?: Type<CodeComponent>,
  codespan?: Type<CodespanComponent>,
  hr?: Type<HrComponent>,
  image?: Type<ImageComponent>,
  link?: Type<LinkComponent>,
  strong?: Type<StrongComponent>,
  list?: Type<ListCompoent>,
  listItem?: Type<ListItemComponent>,
  text?: Type<TextComponent>,
  del?: Type<DelComponent>,
  em?: Type<EmComponent>,
  space?: Type<SpaceComponent>,
  html?: Type<HTMLComponent>,
  table?: Type<TableComponent>,
  br?: Type<BrComponent>,
}

export class RendererOptions {
  components?: RendererComponents
}