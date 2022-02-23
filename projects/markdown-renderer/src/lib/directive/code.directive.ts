/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:52:42
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:52:42
 */
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdCode]'
})
export class CodeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}