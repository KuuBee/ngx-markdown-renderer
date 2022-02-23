/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:52:58
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:52:58
 */
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdCodespan]'
})
export class CodespanDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}