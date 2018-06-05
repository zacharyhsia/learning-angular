export class ServerDataModel {
    type: string;
    serverName: string;
    serverContent: string;


    constructor(type: string, serverName: string, serverContent: string) {
        this.type = type;
        this.serverName = serverName;
        this.serverContent = serverContent;
    }
}