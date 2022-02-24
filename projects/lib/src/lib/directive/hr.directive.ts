/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:12
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:13
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdHr]'
})
export class HrDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}