import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

export enum SnackType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  private wrapperTitleModifier = {
    [SnackType.SUCCESS]: () => 'Sucesso',
    [SnackType.WARNING]: () => 'Atenção',
    [SnackType.ERROR]: () => 'Erro',
  };

  public success(
    message: string,
    title: string = this.wrapperTitleModifier[SnackType.SUCCESS]()
  ) {
    this.fire(title, message, SnackType.SUCCESS);
  }

  public error(message: string, type?: SnackType) {
    this.fire(
      type == SnackType.WARNING
      ? this.wrapperTitleModifier[SnackType.WARNING]()
      : this.wrapperTitleModifier[SnackType.ERROR](),
      message,
      type === SnackType.WARNING ? SnackType.WARNING : SnackType.ERROR 
    );
  }

  fire(title: string, message: string, type: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {
        title: title,
        message: message,
        iconClose: type === SnackType.WARNING ? '#404041' : '#FFFFFF',
      },
      panelClass: ['snack', `snack--${type}`],
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5 * 1000,
    });
  }
}
