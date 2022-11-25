import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { Prediction } from './models/Prediction';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarService } from './services/custom-snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fake-real-job-postings-browser-extension';
  prediction!: Prediction;

  constructor(private appService: AppService,
    private _snackBar: MatSnackBar,
    private snack: CustomSnackBarService
  ) { }

  ngOnInit() { }

  sendRequest(jobPosting: string) {
    this.appService.predictUsingText(jobPosting.replace(/\//g, " "))
      .subscribe((result) => {
        this.prediction = <Prediction>result;

        //this._snackBar.open(this.prediction.result);
        this.openSnack(this.prediction.result)
      })
  }

  openSnack(message: string) {
    var snackType = this.prediction.result == "Real" ? "success" : "warn";

    this.snack.openSnackBar(message, '', snackType, snackType + "-snackbar");
  }

  reset() {
    this.prediction.result = '';
    this._snackBar.dismiss();
  }
}
