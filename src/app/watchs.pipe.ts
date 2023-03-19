import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watchs'
})
export class WatchsPipe implements PipeTransform {

  transform(title:string): any {
    return 'Watch: '+ title;
  }

}
