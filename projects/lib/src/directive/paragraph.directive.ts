/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:41
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:41
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdParagraph]'
})
export class ParagraphDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}