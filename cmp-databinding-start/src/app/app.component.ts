import { Component } from '@angular/core';
import {ServerDataModel} from './share/serverData.model';
import {BlueprintDataModel} from './share/blueprintData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // serverElements = [{type: 'server', name: 'testServer', content: 'just a test server'}];
    serverElements = [];

    onServerAdded(serverData: ServerDataModel) {
        this.serverElements.push(
            new ServerDataModel('server', serverData.serverName, serverData.serverContent);
        )
    }

    onBlueprintAdded(blueprintData: BlueprintDataModel) {
        this.serverElements.push(
            new BlueprintDataModel('blueprint', blueprintData.blueprintName, blueprintData.blueprintContent)
        );
    }
}
