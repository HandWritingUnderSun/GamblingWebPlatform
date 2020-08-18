import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-ExcelManager-ExcelInterview',
  templateUrl: './ExcelInterview.component.html'
})
export class ExcelInterviewComponent {
    uploader: FileUploader = new FileUploader({
      url: "http://www.download.com:80/uploadFile",
      method: "POST",
      itemAlias: "uploadedfile"
    });


  selectedFileOnChanged() {
    // 这里是文件选择完成后的操作处理
  }
}
