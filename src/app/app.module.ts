import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppexChartComponent } from './components/appex-chart/appex-chart.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';

//
import { QRCodeModule } from 'angularx-qrcode';
//
import { ClipboardModule } from 'ngx-clipboard';
//
import { HotToastModule, provideHotToastConfig } from '@ngneat/hot-toast';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AppexChartComponent,
    TableComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputSwitchModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    TagModule,
    SliderModule,
    ProgressBarModule,
    ToastModule,
    QRCodeModule,
    AvatarModule,
    AvatarGroupModule,
    ClipboardModule,
    TooltipModule,
    HotToastModule.forRoot(),
  ],
  providers: [provideHotToastConfig()],
  bootstrap: [AppComponent],
})
export class AppModule {}
