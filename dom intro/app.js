function joined(){
    let title = document.getElementById('title')
    title.innerText = 'thanks for joining the full stack course!🎉'
    let btn = document.getElementById('btn')
    btn.style.display='none'
}

function cube(){
    let number=document.getElementById('number').value
    let result=number*number*number
    document.getElementById('result').innerText=result
    document.getElementById('number').value =" "
    console.log(result)
}

function split(){
    let amount=document.getElementById('amount').value
    let persons=document.getElementById('persons').value
    let bill = (amount/persons).toFixed(2)
    document.getElementById('result').innerText = bill
}

//math practice app


   let totalQuestions = 0;
   let correctAnswers = 0;
   let wrongAnswers = 0;



    let num1= Math.floor(Math.random()*100)
    let num2= Math.floor(Math.random()*10)
    document.getElementById('num1').value = num1
    document.getElementById('num2').value = num2
    totalQuestions = totalQuestions+1;


    //getting the score card element by id
    let total = document.getElementById('total');
    let correct = document.getElementById('correct');
    let score = document.getElementById('score');



function add(){

    total.innerText = totalQuestions;
    

    let result= document.getElementById('result')
    
    document.getElementById('num1').value = num1
    document.getElementById('num2').value = num2

  
    let usersum=document.getElementById('sum').value
    if(num1+num2 == usersum){
        console.log(num1,num2,usersum)
        console.log('correct')
         num1= Math.floor(Math.random()*10)
        num2= Math.floor(Math.random()*10)
        document.getElementById('num1').value = num1
        document.getElementById('num2').value = num2
        result.innerText = 'Welldone'


    //updating result

    correctAnswers=correctAnswers+1;

    // calculate the correct Percentage

    let Percentage =( correctAnswers / totalQuestions)*100;
    document.getElementById('correctPercentage').innerText=Percentage.toFixed(2);

    correct.innerText=correctAnswers;

    totalQuestions=totalQuestions+1;
    score.innerText = correctAnswers * 10;

    
    

    }
    else{
        console.log(num1,num2,usersum )
        let result= document.getElementById('result')
        result.innerText = 'wrong'

    // calculate the correct Percentage

    let Percentage =( correctAnswers / totalQuestions)*100;
    document.getElementById('correctPercentage').innerText=Percentage.toFixed(2);

        totalQuestions=totalQuestions+1;
        
    }

    document.getElementById('sum').value=''

  if(correctAnswers*10 ==50){
    let audio=document.getElementById('audio');
    audio.play();


    let a50 = document.getElementById('a50');
    a50.classList.remove ('d-none');
    a50.classList.add ('achievement-50');

  }

}

