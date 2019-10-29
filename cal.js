function insert(num){
    document.form.textveiw.value=document.form.textveiw.value+num;
}
function equal(){
    var expo=document.form.textveiw.value;
    if(expo)
    {
        document.form.textveiw.value=eval(expo)     
    }
}
function clean(){
    document.form.textveiw.value="";
}
function back(){
    var expo=document.form.textveiw.value;
    document.form.textveiw.value=expo.substring(0,expo.length-1)
}