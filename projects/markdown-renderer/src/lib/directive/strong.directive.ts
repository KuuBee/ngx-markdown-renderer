/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:46
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:46
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdStrong]'
})
export class StrongDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}