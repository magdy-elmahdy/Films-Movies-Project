import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable }from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }


  getTrending(mediaType):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=ca5246f02bd188c586c1de4624b6b01d`);
  }

  getItemDetails(mediaType,id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=ca5246f02bd188c586c1de4624b6b01d`)
  }

}
