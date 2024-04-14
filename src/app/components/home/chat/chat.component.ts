import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  value = '';
  chatArray: any = [];
  counter = 0;
  timerSub: any;
  lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere, commodi cumque vel vitae sunt tempore, modi ab quibusdam saepe in quam debitis veniam molestias repellendus ea dolor? Ab, quas?';
  replyMessage = '';
  replyId = -1;

  ngOnInit() {
    this.updateChatArray({
      type: 'from',
      message: 'Hey there, What\'s up?   ',
      replyId: -1
    });
    this.counter++;
    this.startTimer();
  }

  startTimer() {
    this.timerSub = setInterval(() => {
      this.updateChatArray({
        type: 'from',
        message: this.lorem + ' --' + this.counter++,
        replyId: -1
      });
    }, 6000);
  }

  sendMessage() {
    if (!this.value?.length) {
      return
    }

    if (this.timerSub) {
      clearInterval(this.timerSub)
    }

    if (this.replyMessage) {
      this.updateChatArray({
        type: 'to',
        message: this.value,
        replyId: this.replyId
      });
    } else {
      this.updateChatArray({
        type: 'to',
        message: this.value,
        replyId: -1
      });
    }

    this.value = '';
    this.replyMessage = '';
    this.replyId = -1;
    this.startTimer();
  }

  updateChatArray(value: any) {
    this.chatArray.push(value);

    setTimeout(() => {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    }, 50);
  }

  reply(id: number) {
    let repMsg = this.chatArray[id];
    this.replyId = id;
    this.replyMessage = repMsg.message;
  }

  cancelReply() {
    this.replyMessage = '';
    this.replyId = -1;
  }
}
