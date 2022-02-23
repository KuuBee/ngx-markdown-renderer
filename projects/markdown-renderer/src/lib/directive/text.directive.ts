/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:49
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:50
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdText]'
})
export class TextDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}