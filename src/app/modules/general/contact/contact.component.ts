import { Component } from '@angular/core';
import { ToastContainerComponent } from 'src/app/components/toast/toast.container.component';
import { ToastService } from 'src/app/services/toast-service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ToastContainerComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(public toastService: ToastService) {}
  showSuccess() {
    this.toastService.show('The form is submitted succesfully', {
      classname: 'bg-success text-light',
      delay: 10000,
    });
  }
}
