/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2022-02-24 10:51:33
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-24 10:52:04
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdBr]'
})
export class BrDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}