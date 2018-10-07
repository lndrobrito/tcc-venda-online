import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true
})
@Injectable()
export class SearchPipe {
  transform(list: any[], searchTerm: string): any[] {
    if (searchTerm) {
      searchTerm = searchTerm.toUpperCase();
      return list.filter(item => {
        return item[0].fullname.toUpperCase().indexOf(searchTerm) !== -1
      });
    } else {
      return list;
    }
  }
}
