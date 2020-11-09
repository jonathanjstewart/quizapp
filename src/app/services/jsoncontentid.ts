export class responses
{
    qid:number;
    name:string;
    answer:boolean;
    constructor(response: { qid:number; name:string; answer:boolean; })
    {
        this.qid = response.qid;
        this.name = response.name;
        this.answer = response.answer;

    }
}

export class questions
{
    question:string;
    questionNumber:number;
    responses:responses[];
    constructor(q: {question:string; questionNumber:number; responses:responses[];})
    {
        this.question = q.question;
        this.questionNumber = q.questionNumber;
        this.responses = q.responses;
    }
}

export class quiz
{
    
    id:number;
    name:string;
    questions:questions[];
    constructor(qui: {id:number; name:string; questions:questions[];})
    {
        if(qui)
        {
        this.id = qui.id;
        this.name = qui.name;
        this.questions = qui.questions;
        }
    }
}