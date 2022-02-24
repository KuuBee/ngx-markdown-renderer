/*
 * @Descripttion: table
 * @Author: KuuBee
 * @Date: 2022-02-24 09:40:14
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-24 10:21:28
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-table',
  template: `<br/>
  <table>
    <tr>
      <th *ngFor="let item of header">
        <renderer *ngFor="let subItem of item.tokens" [token]="subItem"></renderer>
      </th>
    </tr>
    <tr *ngFor="let row of rows">
      <td *ngFor="let cell of row">
        <renderer *ngFor="let subItem of cell.tokens" [token]="subItem"></renderer>
      </td>
    </tr>
  </table>
  <br/>`,
})
export class TableComponent {
  @Input() data!: marked.Tokens.Table;
  get align() {
    return this.data.align;
  }
  get header() {
    console.log('this.data.header:', this.data.header);
    return this.data.header;
  }
  get rows() {
    console.log('this.data.rows:', this.data.rows);
    return this.data.rows;
  }
}
