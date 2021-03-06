import { Injectable } from '@angular/core';
import { ConnectfbService } from './connectfb.service';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Usuario } from '../models/modelEjemplo';


@Injectable()
export class AuthService {
	
   loggedIn: boolean=false;
   private user:string;
   private urlApi:string="http://13.90.130.197/login";
   private userToken;

  constructor(private http:Http) { }

	log(user:Usuario){
		let headerT = new Headers({'Content-Type':'application/json'});

	   return this.http.post(this.urlApi,user,{headers:headerT})
				 .map((res: Response) =>{
				 	this.userToken=res.json();
				 	console.log(this.userToken);
				 	this.loggedIn = res.ok;
           			this.user = user.user;
				 }); 
	}


	logOut(){
		this.loggedIn = false;
		console.log("LOGOUT ");
	}

	getToken(){
		return this.userToken;
	}

	getUser(){
		return this.user;
	}
}
