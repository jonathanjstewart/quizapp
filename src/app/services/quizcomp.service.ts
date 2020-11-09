import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { questions } from './jsoncontentid';
import { Observable } from 'rxjs'

@Injectable()
export class QuizcompService
{
    constructor(private httpClient: HttpClient)
    {
    }

    // method to get questions from selected quiz
    getQuizQuestions(url:string): Observable<any> 
    {
        return this.httpClient.get(url);
    }

    // method to get all quiz data and put it in an array
    getAllQuizzes()
    {
        return [
            { quizId: 'assets/quiz1.json', name: 'JavaScript Quiz'},
            { quizId: 'assets/quiz2.json', name: 'Python Quiz'}
        ];

    }

    question: questions[] = [];
    getQuestionList(question: questions[])
    {
        this.question = question;
    }
}
