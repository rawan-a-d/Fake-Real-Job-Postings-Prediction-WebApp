import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from '../custom-snack-bar/custom-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackBarService {

  constructor(private snackBar: MatSnackBar) { }
  public openSnackBar(message: string, action: string, snackType: string, panelClass: string) {

    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      //duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      data: { message: message, snackType: snackType },
      panelClass: [panelClass]
    });
  }
}
