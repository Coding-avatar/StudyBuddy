class questions{
    constructor(public quesno : number,public ques: string,public url: string){
            this.ques = ques,
            this.quesno = quesno,
            this.url = url
        }
}
export var allquestions= [
    new questions(1, 'Write a Program to display Hello World',''),
    new questions(2, 'Write a Program to print an Integer(Entered by the user)',''),
    new questions(3, 'Write a Program to display the following pattern','assets/img/pattern.jpg'),
];