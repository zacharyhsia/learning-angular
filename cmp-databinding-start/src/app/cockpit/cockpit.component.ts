import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ServerDataModel} from '../share/serverData.model';
import {BlueprintDataModel} from '../share/blueprintData.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output('svrCreated') serverCreated = new EventEmitter<ServerDataModel>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<BlueprintDataModel>();
    newName = '';
    newContent = '';

    @ViewChild('serverContent') serverContent;

  constructor() { }

  ngOnInit() {
  }

    onAddServer() {
        this.serverCreated.emit(new ServerDataModel(
            'server',
            this.newName,
            this.newContent
        ));
    }

    onAddBlueprint() {
        console.log('onBlueprint called');
        this.blueprintCreated.emit(new BlueprintDataModel(
            'blueprint',
            this.newName,
            this.newContent
        ));
    }

}
