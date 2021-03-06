let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')
function timer(seconds){
     
/*setInterval(function (){
    seconds--;
},1000);*/
// clear any existing timer 
clearInterval(countdown);
const now = Date.now();
const then = now + seconds *1000;
displayTimeLeft(seconds);
displayEndTime(then);
//console.log({now ,then});
countdown = setInterval(() => {
    const secondsLeft = Math.round((then -Date.now()) / 1000);
     //check if seconds is 0 
    if(secondsLeft < 0){
        clearInterval(secondsLeft);
        return;
    }
    //display it 
    displayTimeLeft(secondsLeft);
},1000)
}
function displayTimeLeft(seconds){
    
  //  console.log(seconds);
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds }`;
    document.title = display;
    timerDisplay.textContent = display
    //console.log({minutes , remainderSeconds});
    
    
}
function displayEndTime(timestamp){
const end = new Date(timestamp);
const hours = end.getHours();
const minutes = end.getMinutes();
const adjustedHour = hours > 12 ? hours - 12 : hours    ;
endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}
function startTimer(){
    //console.log(this.dataset.time);
    const seconds = parseInt(this.dataset.time);
    //console.log(seconds);
    timer(seconds);

}
buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
e.preventDefault();
const mins = this.minutes.value;
//console.log(mins);
timer(mins * 60);
this.reset();
})