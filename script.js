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