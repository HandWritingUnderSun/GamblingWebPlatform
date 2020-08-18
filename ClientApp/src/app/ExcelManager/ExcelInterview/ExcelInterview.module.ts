import { NgModule } from '@angular/core';
import { ExcelInterviewComponent } from './ExcelInterview.component';
import { ExcelInterviewRoutingModule } from './ExcelInterview.routes';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    ExcelInterviewRoutingModule,
    NzButtonModule,
    NzGridModule,
    FileUploadModule
  ],
  declarations: [ExcelInterviewComponent],
  exports: [ExcelInterviewComponent]
})
export class ExcelInterviewModule {
}
