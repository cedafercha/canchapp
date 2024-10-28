import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(
    public translate: TranslateService,
    private readonly authService: AuthService) {
    
  }

  onClicklogOut() {
      this.authService.logout();
  }

}
