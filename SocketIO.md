To use **Socket.IO** in an Angular application, you need to integrate the client-side library provided by **Socket.IO** and configure it to communicate with a Socket.IO server. 

---

### 1. **Install Socket.IO Client Library**
First, you need to install the Socket.IO client library in your Angular project:

```bash
npm install socket.io-client
```

---

### 2. **Import and Configure Socket.IO**
You can create a dedicated service to handle socket communication.

#### **socket.service.ts**
```typescript
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket | null = null;

  // Replace with your server URL
  private readonly SERVER_URL = 'http://localhost:8000';

  constructor() {}

  // Connect to the Socket.IO server
  connect(): void {
    if (!this.socket) {
      this.socket = io(this.SERVER_URL);
    }
  }

  // Disconnect from the server
  disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
  }

  // Emit an event
  emit(event: string, data: any): void {
    this.socket?.emit(event, data);
  }

  // Listen for an event
  on(event: string, callback: (data: any) => void): void {
    this.socket?.on(event, callback);
  }

  // Stop listening to an event
  off(event: string): void {
    this.socket?.off(event);
  }
}
```

---

### 3. **Use the Service in a Component**
You can inject this service into any component and use it to send and receive messages.

#### **chat.component.ts**
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  message = '';

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.connect();

    // Listen for incoming messages
    this.socketService.on('message', (data: string) => {
      this.messages.push(data);
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      // Emit the message to the server
      this.socketService.emit('message', this.message);
      this.message = '';
    }
  }

  ngOnDestroy(): void {
    this.socketService.disconnect();
  }
}
```

#### **chat.component.html**
```html
<div>
  <h2>Chat</h2>
  <div *ngFor="let msg of messages">
    {{ msg }}
  </div>
  <input
    [(ngModel)]="message"
    placeholder="Type a message..."
    (keyup.enter)="sendMessage()"
  />
  <button (click)="sendMessage()">Send</button>
</div>
```