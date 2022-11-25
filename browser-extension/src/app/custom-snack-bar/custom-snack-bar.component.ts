import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.css']
})
export class CustomSnackBarComponent implements OnInit {
  snackType: string = ""

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    console.log(data);
    this.snackType = this.data.snackType;
  }

  ngOnInit() { }

  get getIcon() {
    switch (this.data.snackType) {
      case 'success':
        return 'done';
      case 'error':
        return 'error';
      case 'warn':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return '';
    }
  }

}
