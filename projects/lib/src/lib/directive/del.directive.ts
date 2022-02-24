/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:07
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:07
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdDel]'
})
export class DelDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}