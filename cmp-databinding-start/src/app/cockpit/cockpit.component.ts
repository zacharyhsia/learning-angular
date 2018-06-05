import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerDataModel} from '../share/serverData.model';
import {BlueprintDataModel} from '../share/blueprintData.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<ServerDataModel>();
    @Output() blueprintCreated = new EventEmitter<BlueprintDataModel>();
    newName = '';
    newContent = '';

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
        this.blueprintCreated.emit(new BlueprintDataModel(
            'server',
            this.newName,
            this.newContent
        ));
    }

}
