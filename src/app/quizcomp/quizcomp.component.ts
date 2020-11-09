import { Component, OnInit } from '@angular/core';

import { QuizcompService } from '../services/quizcomp.service';
import { responses, questions, quiz} from '../services/jsoncontentid';

import { Router } from '@angular/router';

@Component({
  selector: 'app-quizcomp',
  templateUrl: './quizcomp.component.html',
  styleUrls: ['./quizcomp.component.css']
})

export class QuizcompComponent implements OnInit 
{
  questionN:any;
  
  quizName:string;
  quizes:any[];

  correctAnswers = [];
  wrongAnswers = []; // storing data in this array currently doesn't work as
                     // I want it to, but it otherwise doesn't affect the application

  


  constructor(private router: Router, private quizcompservice: QuizcompService) { }

  
  // inital entry
  ngOnInit()
  {
    this.quizes = this.quizcompservice.getAllQuizzes();

    // default to the first quiz
    this.quizName = this.quizes[0].quizId;
    this.selectQuiz(this.quizName);
  }

  // grab the json data and output
  selectQuiz(quizName:string)
  {	this.correctAnswers = [];
	this.wrongAnswers = [];
    this.quizcompservice.getQuizQuestions(quizName).subscribe(qq => {
      this.questionN = qq.questions;
      this.quizcompservice.getQuestionList(this.questionN); 
    });
  }

  // displays the questions
  getQuestion(quiz): string
  {
    return quiz.questionNumber + '. ' + quiz.question;
  }

  // determines which response was selected
  getAnswer(questionKey, name, answer)
  {    
    if (this.qNumExists_correct(questionKey))
    {
      // if it exists in the correctAnswers array and the quiz taker changes their response 
      // from the correct response to a wrong response... remove object index from correctAnswers
      // and put it into wrongAnswers.
      if (answer == false)
      {
        console.log("You selected a wrong answer!1");
        this.correctAnswers.splice(questionKey, 1);
        
        // NOTE: figure out how to push it this value to the proper index position in the array based on questionKey
        this.wrongAnswers.push({
          'questionNumber': questionKey,
          'selection': name,
          'isCorrect': answer
        })
      } 
    }
    else if (this.qNumExists_wrong(questionKey))
    {
      // else if it does exist, but it's in the wrongAnswers array and the quiz taker changes
      // their repsponse from a wrong repsonse to the correct response... remove object index
      // from wrongAnswers and put it into correctAnswers
      if (answer == true)
      {
        
        this.wrongAnswers.splice(questionKey, 1);
        this.correctAnswers.push({
          'questionNumber': questionKey,
          'selection': name,
          'isCorrect': answer,
          'correctCount': 1
        })
      }
      else if (answer == false)
      {
        console.log("You selected a wrong answer!2");
        this.wrongAnswers.splice(questionKey, 1);
        this.wrongAnswers.push({
          'questionNumber': questionKey,
          'selection': name,
          'isCorrect': answer,
        })
      }

    }
    else
    {
      if (answer == true)
      {
        this.correctAnswers.push({
          'questionNumber': questionKey,
          'selection': name,
          'isCorrect': answer,
          'correctCount': 1
        })
      }
      else
      {
        console.log("You selected a wrong answer for the first time!");
        this.wrongAnswers.push({
          'questionNumber': questionKey,
          'Selection': name,
          'isCorrect': answer
        })
      }
    }
    

    //console.log(name);
    console.log("correctanswers");
    console.log(this.correctAnswers);

    console.log("wronganswers");
    console.log(this.wrongAnswers);
    //this.isCorrect(correctAnswers, wrongAnswers);

  }

  // function to see if you've already selected a value for a question.
  // based on the output, overrides or maintains
  qNumExists_correct(questionNumber)
  {
    return this.correctAnswers.some(function(el) {
      return el.questionNumber === questionNumber;
    }); 
  }
  qNumExists_wrong(questionNumber)
  {
    return this.wrongAnswers.some(function(el) {
      return el.questionNumber === questionNumber;
    }); 
  }

  onSubmit() 
  {
    let counter = 0;

    for (let i = 0; i < this.correctAnswers.length; i++)
    {
      if (this.correctAnswers[i].correctCount == '1') counter++;
    }

    document.getElementById("whereToPrint").innerHTML = JSON.stringify(this.correctAnswers, null, 4);
    document.getElementById("score").innerHTML = (counter + "0%");
  }
  

}
