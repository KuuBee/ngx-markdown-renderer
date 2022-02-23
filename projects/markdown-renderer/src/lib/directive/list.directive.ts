/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:34
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:34
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdList]'
})
export class ListDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}