export class Note {
    constructor(
        public id:Number | undefined,
        public title: string,
        public body: string,
        public state:boolean
    ){}
}
