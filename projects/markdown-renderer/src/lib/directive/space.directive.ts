/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2022-02-23 11:48:16
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-23 11:48:17
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdSpace]'
})
export class SpaceDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}