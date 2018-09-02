var rez=document.getElementById('result');
var mainimage=document.getElementById('mainpic');


function checkIfNumber(ev) {
    let data=ev.key;
    let element=ev.target.getAttribute("name");

    if (!isNaN(data)) {
        console.log('chuslo');
    } else {
        let warning=`<span>У поле <b>${element}</b> потрібно ввести число!</span>`;
        let myinput=ev.target;
        console.log(ev.key);
        rez.innerHTML=warning;
        hideWarning();
    }
}

function kvrn() {
    let answer;
    let a=document.querySelector('[name="a"]').value;
    let b=document.querySelector('[name="b"]').value;
    let c=document.querySelector('[name="c"]').value;
    a=+a; b=+b; c=+c;
    console.log(a,b,c);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a!==0) {
        let d=b*b-4*a*c;
        if (d<0) {
            answer='Дискримінант від\'ємний. Рівняння не має розв\'язків';
            rez.innerHTML=answer;
        } else {
            mainimage.setAttribute('src','math_teacher.jpg');
            let x1 = (-b + Math.sqrt(d)) / (2 * a);
            let x2 = (-b - Math.sqrt(d)) / (2 * a);
            answer = `x1=${Math.round(x1*100)/100}  x2=${Math.round(x2*100)/100}`;
            rez.innerHTML = answer;
        }
    } else {
        answer=`<p style="color: red">У всі поля потрібно ввести числа!</p>`;
        rez.innerHTML = answer;
        mainimage.setAttribute('src','angry-teacher.jpg');
        hideWarning();
    }
}


function hideWarning() {
    setTimeout("rez.innerHTML=''",3000);

}
