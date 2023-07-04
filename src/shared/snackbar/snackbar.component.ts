import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    constructor(
        @Inject(MAT_SNACK_BAR_DATA)
        public data: {
            title: string;
            message: string;
            iconClose: string;
        },
        private _snackRef: MatSnackBarRef<SnackbarComponent>
    ) {console.log(data)}

    close() {
        this._snackRef.dismiss();
    }

    get backgroundColor() {
        return 'red';
      }
}
