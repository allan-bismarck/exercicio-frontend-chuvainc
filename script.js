var showContent = false;
var showAnswers = false;

function item_selected(index_item) {
    var div_itens = document.querySelectorAll("aside > nav > div > div");
    var p_itens = document.querySelectorAll("aside > nav > div > p");
    var length_itens = div_itens.length;
    for(i = 0; i < length_itens; i ++) {
        div_itens[i].style.width = "0px";
        p_itens[i].style.backgroundColor =  "white";
    }
    div_itens[index_item].style.width = "5px";
    div_itens[index_item].style.backgroundColor = "#F28941";
    p_itens[index_item].style.backgroundColor =  "#FDF1EB";
}

function show_content() {
    showContent = !showContent;
    var i;
    var p = document.getElementsByClassName('see_more');
    p_length = p.length;
    if(showContent) {
        document.getElementById('points').style.display = "none";
        document.getElementById('show_see_more').style.display = "none";
        document.getElementById('abstract').style.height = "540px";
        for(i = 0; i < p_length; i ++) {
            p[i].style.display = "block";
        }
    } else {
        document.getElementById('points').style.display = "inline";
        document.getElementById('show_see_more').style.display = "inline";
        document.getElementById('abstract').style.height = "170px";
        for(i = 0; i < p_length; i ++) {
            p[i].style.display = "none";
        }
    }
}

function show_answers() {
    showAnswers = !showAnswers;
    var i;
    var answers = document.getElementsByClassName('answers');
    answers_length = answers.length;
    if(showAnswers) {
        for(i = 0; i < answers_length; i ++) {
            answers[i].style.display = "block";
        }
    } else {
        for(i = 0; i < answers_length; i ++) {
            answers[i].style.display = "none";
        }
    }
}

function alternateDiscutionHeader(button) {
    if(button == 1) {
        document.getElementById("discution_header").style.display = "none";
        document.getElementById("discution_header_2").style.display = "flex";
    } else {
        if(button == 2) {
            document.getElementById("discution_header_2").style.display = "none";
            document.getElementById("discution_header_3").style.display = "flex";
        } else {
            document.getElementById("discution_header_3").style.display = "none";
            document.getElementById("discution_header_2").style.display = "flex";
        }
    }
}