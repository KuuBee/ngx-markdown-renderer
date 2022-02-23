/*
 * @Descripttion: 渲染器配置
 * @Author: KuuBee
 * @Date: 2022-02-23 14:49:54
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-23 14:49:54
 */

import { Type } from "@angular/core";
import { AbstractHeadingComponent, HeadingComponent } from "./component/heading.component";

export interface RendererComponents {
  heading?: Type<AbstractHeadingComponent>
}

export class RendererOptions {
  components?: RendererComponents
}