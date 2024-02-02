import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  faTrashCan,
  faCopy,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
//
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  faTrashCan = faTrashCan;
  faCopy = faCopy;
  faPaperPlane = faPaperPlane;
  show() {}
  constructor(private toast: HotToastService) {}

  @ViewChild('inputText') inputText!: ElementRef;

  copyToClipboard(inputElement: HTMLInputElement): void {
    const textToCopy = inputElement.value;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // alert('Text copied to clipboard!');
          this.toast.success('Text copied to clipboard ', {
            position: 'top-center',
            duration: 2000,
          });
        })
        .catch((err) => {
          console.error('Unable to copy text to clipboard', err);
          this.toast.error('Unable to copy text to clipboard', {
            position: 'top-center',
            duration: 2000,
          });
        });
    }
    // else {
    //   const textArea = document.createElement('textarea');
    //   textArea.value = textToCopy;
    //   document.body.appendChild(textArea);
    //   textArea.select();
    //   document.execCommand('copy');
    //   document.body.removeChild(textArea);
    //   // alert('Text copied to clipboard!');
    //   this.toast.success('Text copied to clipboard ', {
    //     position: 'top-center',
    //     duration: 2000,
    //   });
    // }
  }
}
