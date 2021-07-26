let btn_menu=document.getElementsByClassName('box2');

let column2=document.getElementsByClassName('column2');


btn_menu[0].addEventListener('click',function(){
    if(column2[0].style.display=='none'){
        column2[0].style.display='block';
    }
    else{
        column2[0].style.display='none'
    }
});


