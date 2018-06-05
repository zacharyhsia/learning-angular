export class BlueprintDataModel {
    type: string;
    blueprintName: string;
    blueprintContent: string;


    constructor(type: string, name: string, content: string) {
        this.type = type;
        this.blueprintName = name;
        this.blueprintContent = content;
    }
}