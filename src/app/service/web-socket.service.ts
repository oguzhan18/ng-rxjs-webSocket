import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  public socket$;

  constructor() {
    this.socket$ = webSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker');
  }

  getSocket() {
    return this.socket$;
  }
}


