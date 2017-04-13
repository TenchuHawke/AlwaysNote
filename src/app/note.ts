export class Note {
    public id : number
    public noteBody: string
    public created_at: Date
    public modified_at: Date
    constructor(){
        this.id = 0
        this.noteBody = ""
        this.created_at = new Date
        this.modified_at = new Date
    }
}
