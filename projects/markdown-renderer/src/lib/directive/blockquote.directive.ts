/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:52:33
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:52:33
 */
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdBlockquote]'
})
export class BlockquoteDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}