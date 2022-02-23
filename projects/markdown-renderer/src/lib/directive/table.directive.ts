/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:52:09
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:52:10
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdTable]'
})
export class TableDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}