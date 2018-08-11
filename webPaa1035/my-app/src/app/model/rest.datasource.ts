import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RestSourceData{

  constructor(private http: HttpClient, private route: Router){}

  messages = []
  users = []
  TOKEN_KEY = 'token'
  authPath = 'http://localhost:4201'

  getMessage() {      

    this.http.get<any>(this.authPath +'/posts').subscribe(res =>{
        this.messages = res;
    })        
  }

  postMessage(message) {
              
      this.http.post<any>(this.authPath +'/post', message).subscribe(res =>{
          this.messages = res                
      })
      this.route.navigateByUrl("/detail");
      this.messages.push(message);
  }

  get token(){
      return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated(){
      return !!localStorage.getItem(this.TOKEN_KEY)
  }

  logout(){
      localStorage.removeItem(this.TOKEN_KEY);
  }

  loginUser(loginData) {
        this.http.post<any>(this.authPath + '/login', loginData).subscribe(res =>{
            console.log(res);
            localStorage.setItem(this.TOKEN_KEY, res.token)
            if(this.isAuthenticated){
                this.route.navigateByUrl("/")
            }else{
                console.log("Registration Failed")
            }   
        })
    };

  sendUserRegistration(regData) {
    this.http.post<any>(this.authPath + '/register', regData).subscribe(res =>{ 
        console.log(res) 
        localStorage.setItem(this.TOKEN_KEY, res.token)  
        if(this.isAuthenticated){
            this.route.navigateByUrl("/")
        }else{
            console.log("Registration Failed")
        }     
    })    
  }
  
}