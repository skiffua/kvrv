let rez=document.getElementById('result');

function checkIfNumber(ev) {
    let data=ev.key;
    let element=ev.target.getAttribute("name");
    if (!isNaN(data)) {
        console.log('number');
    } else {
        let warning=`<span>У поле <b>${element}</b> потрібно ввести число!</span>`;
        let myinput=ev.target;
        console.log(ev.key);
        rez.innerHTML=warning;
        hideWarning();
    }
}

function getherData(){
    let a=document.querySelector('[name="a"]').value;
    let b=document.querySelector('[name="b"]').value;
    let c=document.querySelector('[name="c"]').value;
    let mainimage=document.getElementById('mainpic');
        a=parseFloat(a);
        b=parseFloat(b);
        c=parseFloat(c);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a!==0) {
        rez.innerHTML=solveQuadraticEquation(a,b,c);
        mainimage.setAttribute('src','math_teacher.jpg');
    } else {
        rez.innerHTML = `<p style="color: red">У всі поля потрібно ввести числа!</p>`;
        mainimage.setAttribute('src','angry-teacher.jpg');
        hideWarning();
    }
}

function solveQuadraticEquation(a,b,c) {
        let answer;
        console.log(a,b,c);
        let d=b**2-4*a*c;
        if (d<0) {
            answer='Дискримінант від\'ємний. Рівняння не має розв\'язків';
            return answer;
        } else {
            let x1 = (-b + Math.sqrt(d)) / (2 * a);
            let x2 = (-b - Math.sqrt(d)) / (2 * a);
            answer = `x1=${Math.round(x1*100)/100}  x2=${Math.round(x2*100)/100}`;
            return answer;
        }
}

function hideWarning() {
    setTimeout("rez.innerHTML=''",3000);
}
