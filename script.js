
let d=document.getElementById('dis');
function inp(n){
    d.value=(d.value)+n;
}
function ac(){
    d.value=' ';
}
function del(){
    d.value=d.value.slice(0,-1);
}

function solve(){
    try{
    d.value=eval(d.value);
    }
    catch{
        d.value='error';
    }
}
function per(){
    d.value=(d.value)/100;
}
 
 
    

    
