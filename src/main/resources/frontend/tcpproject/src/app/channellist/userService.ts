import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../user";
import { Observable} from "rxjs";




@Injectable()
export class UserService{
  private usersUrl: string;
  sendto: string;

  constructor(private http: HttpClient){
    this.usersUrl= 'https://teamac.herokuapp.com/users';
  }

  public findAll(): Observable<User[]> {
    this.sendto = 'https://teamac.herokuapp.com/users';
    return this.http.get<User[]>(this.sendto);
  }

  async authenticateUser(user: User){
    this.sendto = this.usersUrl+ "/auth/" + user.username+ "/"+ user.password;
    console.log(this.sendto);
    const t = await this.http.get<User>(this.sendto).toPromise();
    return t;
  }

  async createNewUser(user: User){
    const t = this.http.post(this.usersUrl, user).toPromise();

    return t;

  }




}
