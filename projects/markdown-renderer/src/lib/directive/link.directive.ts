/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:24
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:24
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdLink]'
})
export class LinkDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}