/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:29
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:29
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdListItem]'
})
export class ListItemDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}