import { Component, OnInit, ReflectiveInjector, Inject } from '@angular/core';
import { UserService } from '../injector-demo/user.service';


@Component({
  selector: 'app-injector-demo',
  templateUrl: './injector-demo.component.html',
  styleUrls: ['./injector-demo.component.css']
})
export class InjectorDemoComponent implements OnInit {
  userName: string;
  userService: UserService;
  injStr: string;


  constructor(@Inject('API_URL') apiUrl: string) {
    //@Inject comes from provider class ---DI
    this.injStr = apiUrl;

    // Create an _injector_ and ask for it to resolve and create a UserService
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    // use the injector to **get the instance** of the UserService
    this.userService = injector.get(UserService);
  }

  ngOnInit() {
  }
  signIn(): void {
    // when we sign in, set the user
    // this mimics filling out a login form 
    this.userService.setUser({
      name: 'Nate Murray'
    });

    // now **read** the user name from the service
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }


}
