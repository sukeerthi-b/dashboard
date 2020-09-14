import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bookmark} from '../model/bookmark';
import {Group} from '../model/group';
import {BookmarkDetails} from '../model/bookmark-details';
import {GroupDetails} from '../model/group-details';

export class BookmarkService {
  url = `${environment.bookmark_service_url}/api/v1/bookmarks}`;

  constructor(private httpClient: HttpClient) {
    if (window.location.hostname === 'localhost') {
      this.url = '/bookmarks';
    }
  }

  getBookmarks(): Observable<BookmarkDetails> {
    return this.httpClient.get<BookmarkDetails>(`${this.url}`);
  }

  getBookmarksByGroupId(groupId: number): Observable<BookmarkDetails> {
    let params = new HttpParams();
    params = params.append('groupId', groupId + '');
    return this.httpClient.get<BookmarkDetails>(`${this.url}`, {params});
  }

  getGroups(): Observable<GroupDetails> {
    return this.httpClient.get<GroupDetails>(`${this.url}/groups`);
  }

  saveGroup(group: Group): Observable<any> {
    return this.httpClient.post(`${this.url}/groups`, group);
  }

  saveBookmark(bookmark: Bookmark): Observable<any> {
    return this.httpClient.post(`${this.url}`, bookmark);
  }

  openActualUrl(shortUrl: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('shortUrl', shortUrl);
    return this.httpClient.get(`${this.url}`, {params} );
  }
}
