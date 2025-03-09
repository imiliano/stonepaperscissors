import { divPlayers,imgStone,imgPaper,imgScissors,divResult,divResultMachine,
    img,img2,machine,msjGanador,msjPerdedor,msjEmpate, spinner } from "./variables.js";

export function recharge(){
    setTimeout(() => {
        location.reload();
    }, 3000);
}

export function conditionalScissors(){
    spinner.classList.remove('hidden');
    if (machine == 2) {
        img2.src = imgScissors;
        divResultMachine.appendChild(img2);
        setTimeout(() => {
            img2.remove();
            msjEmpate.classList.remove('hidden');
            msjGanador.remove();
            msjPerdedor.remove();
            spinner.classList.add('hidden');
            divPlayers.remove();
        }, 2000);
    }
        else if(machine == 1){
            img2.src = imgPaper;
            divResultMachine.appendChild(img2);
        setTimeout(() => {
                img2.remove();
                msjGanador.classList.remove('hidden');
                msjEmpate.remove();
                msjPerdedor.remove();
                spinner.classList.add('hidden');
                divPlayers.remove();
            }, 2000);
        }
        else{
            img2.src = imgStone;
            divResultMachine.appendChild(img2);
            setTimeout(() => {
                img2.remove();
                msjPerdedor.classList.remove('hidden');
                msjGanador.remove();
                msjEmpate.remove();
                spinner.classList.add('hidden');
                divPlayers.remove();
            }, 2000);
        }
}

export function conditionalPaper(){
    spinner.classList.remove('hidden');
    if (machine == 2) {
        img2.src = imgScissors;
        divResultMachine.appendChild(img2);
        setTimeout(() => {
            img2.remove();
            msjPerdedor.classList.remove('hidden');
            msjGanador.remove();
            msjEmpate.remove();
            spinner.classList.add('hidden');
            divPlayers.remove();
        }, 2000);
    }
        else if(machine == 1){
            img2.src = imgPaper;
            divResultMachine.appendChild(img2);
        setTimeout(() => {
                img2.remove();
                msjEmpate.classList.remove('hidden');
                msjGanador.remove();
                msjPerdedor.remove();
                spinner.classList.add('hidden');
                divPlayers.remove();
            }, 2000);
        }
        else{
            img2.src = imgStone;
            divResultMachine.appendChild(img2);
            setTimeout(() => {
                img2.remove();
                msjGanador.classList.remove('hidden');
                msjPerdedor.remove();
                msjEmpate.remove();
                spinner.classList.add('hidden');
                divPlayers.remove();
            }, 2000);
        }
}

export function conditionalStone(){
    spinner.classList.remove('hidden');

    if (machine == 2) {
        img2.src = imgScissors;
        divResultMachine.appendChild(img2);
        setTimeout(() => {
            img2.remove();
            msjGanador.classList.remove('hidden');
            msjPerdedor.remove();
            msjEmpate.remove();
            spinner.classList.add('hidden');
            divPlayers.remove();
        }, 2000);
    }
        else if(machine == 1){
            img2.src = imgPaper;
            divResultMachine.appendChild(img2);
        setTimeout(() => {
                img2.remove();
                msjPerdedor.classList.remove('hidden');
                msjGanador.remove();
                msjEmpate.remove();
                spinner.classList.add('hidden');
                divPlayers.remove();
            }, 2000);
        }
        else{
            img2.src = imgStone;
            divResultMachine.appendChild(img2);
            setTimeout(() => {
                img2.remove();
                msjEmpate.classList.remove('hidden');
                msjGanador.remove();
                msjPerdedor.remove();
                spinner.classList.add('hidden');
                divPlayers.remove();
            }, 2000);
        }
}

export function stoneResult() {
    const stone = document.querySelector('.stone')
    stone.classList.add('active');

    img.src = imgStone;
    divResult.appendChild(img);
    
    setTimeout(() => {
        stone.classList.remove('active');
        img.remove();
    }, 2000);
}

export function scissorsResult(){
    const scissors = document.querySelector('.scissors');
        scissors.classList.add('active');

        img.src = imgScissors;
        divResult.appendChild(img);
        
        setTimeout(() => {
            scissors.classList.remove('active');
            img.remove();
        }, 2000);
}

export function paperResult(){
    conditionalPaper()

    const paper = document.querySelector('.paper')
    paper.classList.add('active');

    img.src = imgPaper;
    divResult.appendChild(img);
    
    setTimeout(() => {
        paper.classList.remove('active')
        img.remove();
    }, 2000);
}

export function showStone() {
    recharge();
    conditionalStone();
    stoneResult();
}

export function showPaper(){
recharge();
conditionalPaper();
paperResult();
}

export function showScissors(){
    recharge();
    conditionalScissors();
    scissorsResult();
}