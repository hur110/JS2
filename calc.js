const calcbtn = () => {
    let a = document.getElementById('m').value;
    let b = document.getElementById('p').value;
    let c = document.getElementById('u').value;
    let d = document.getElementById('ps').value;
    let e = document.getElementById('ja').value;

    let sum = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e)
    // console.log(sum);
    // document.getElementById('tex').innerHTML = `Your Sum is ${sum}`;

    let perc = (sum/500)*100;
     
    if (perc <= 100 && perc >= 80) {
        document.getElementById('tex').innerHTML = `Your Subject Total Sum is ${sum}, your percentage is ${perc} and grade is A+ <br> <b>CONGRATULATIONS...</b>`;
    }else if (perc <= 79 && perc >= 70) {
        document.getElementById('tex').innerHTML = `Your Subject Total Sum is ${sum}, your percentage is ${perc} and grade is A <br> <b>WELLDONE...</b>`;
    
    }else if (perc <= 69 && perc >= 60) {
        document.getElementById('tex').innerHTML = `Your Subject Total Sum is ${sum}, your percentage is ${perc} and grade is B <br> <b>NEED TO WORK HARD...</b>`;

    }else if (perc <= 59 && perc >= 50) {
        document.getElementById('tex').innerHTML = `Your Subject Total Sum is ${sum}, your percentage is ${perc} and grade is C <br> <b>NEED TO FOCUS ON STUDIES...</b>`;

    }else if (perc <= 49) {
        document.getElementById('tex').innerHTML = `Your Subject Total Sum is ${sum}, your percentage is ${perc} and grade is F <br> <b>YOU ARE FAIL...</b>`;

    }else{
        document.getElementById('tex').innerHTML = `SOMETHING WENT WRONG...CHECK YOUR INPUTS`;
    }

}

let i=0,text;
text = 'CALCULATE YOUR PERCENTAGE...';

function typing() {
    if (i<text.length) {
        document.getElementById('textId').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);

    }
    // else if (i==text.length) {
    //     document.getElementById('textId').innerHTML += text.charAt(i);
    //     i--;
    //     setTimeout(typing, 100);
    // }
    
}
typing();