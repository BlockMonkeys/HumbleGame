let score = document.querySelector('.score');
let blanks = document.querySelectorAll('.screen table tr td');
let game_start_btn = document.querySelector('.game_starter');
let score_result = 0;

//게임시작
const 게임시작 = () => {
    blanks.forEach((td)=>{
        setInterval(()=>{
            td.textContent = '';
        }, 1000);
    });
    
    setInterval(()=>{
        let random = Math.floor(Math.random() * 9);
        blanks[random].textContent = '🦗';
    }, 2000);
}
const 두더지죽이기 = () => {
    blanks.forEach((td)=>{
        td.textContent = '';
    })
}
const 초기화 = () => {
    window.location.reload();
}

//게임진행.
blanks.forEach((td)=>{
    td.addEventListener('click', (event)=>{
        if(event.currentTarget.textContent === '🦗'){
            //두더지를 잡았을 때, 스코어 올리고 -> x를 없애준다.(초기화)
            score_result += 1;
            score.textContent = `Your Score : ${score_result}`;
            두더지죽이기();
        } else {
            //두더지를 잡지 못했을 때,
            score_result -= 1;
            score.textContent = `Your Score : ${score_result}`;
            두더지죽이기();
        }
        if(score_result < 0){
            //게임오버;
            alert('Game Over !');
            초기화();
        }
    });
});
//게임시작 버튼을 눌렀을 때,
game_start_btn.addEventListener('click', ()=>{
    게임시작();
})