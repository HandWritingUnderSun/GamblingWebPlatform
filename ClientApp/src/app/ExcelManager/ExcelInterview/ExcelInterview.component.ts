import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grid } from 'ag-grid-community';

@Component({
  selector: 'app-ExcelManager-ExcelInterview',
  templateUrl: './ExcelInterview.component.html'
})
export class ExcelInterviewComponent {
  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

}
