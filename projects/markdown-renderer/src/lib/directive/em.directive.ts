/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2022-02-23 11:39:39
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-23 11:39:40
 */
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdEm]'
})
export class EmDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}