import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "./service/web-socket.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public date: number = Date.now();
    public socketData:any;

    constructor(private webSocketService: WebSocketService) {
    }

    ngOnInit() {
        this.webSocketService.getSocket().subscribe(
            (data: any) => {
                this.socketData = data;
            },
            (error: any) => {
                console.error('WebSocket error:', error);
            }
        );
    }

    getColorClass(value: number): string {
        return value > 0 ? 'green' : value < 0 ? 'red' : 'orange';
    }

}
