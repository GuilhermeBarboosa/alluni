import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private matDialog: MatDialog
  ) { }

  open(component: ComponentType<any>, data: any = {}): MatDialogRef<ComponentType<any>> {
    return this.matDialog.open(component, {
      data,
      width: '400px',
      maxHeight: '400px',
      autoFocus: false
    });
  }

  openModalError(component: ComponentType<any>, data: any = {}): MatDialogRef<ComponentType<any>> {
    return this.matDialog.open(component, {
      data,
      maxHeight: '600px',
      autoFocus: false
    });
  }

  openModal(component: ComponentType<any>, data: any = {}): MatDialogRef<ComponentType<any>> {
    return this.matDialog.open(component, {
      data,
      width: '750px',
      maxHeight: '750px',
      autoFocus: false
    });
  }

}
