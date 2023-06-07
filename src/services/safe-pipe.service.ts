import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
@Pipe({
  name: 'safe',
})
export class SafePipeService {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
