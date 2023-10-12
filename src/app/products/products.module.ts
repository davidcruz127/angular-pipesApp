import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { ToolbarModule } from 'primeng/toolbar';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { TableModule } from 'primeng/table';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule
  ]
})
export class ProductsModule { }
