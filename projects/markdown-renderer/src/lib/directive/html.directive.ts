/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2022-02-23 11:53:35
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-23 11:53:36
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdHTML]'
})
export class HTMLDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}