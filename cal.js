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
//functions are implementaing good
function clean(){
    document.form.textveiw.value="";
}
function back(){
    //hello
    var expo=document.form.textveiw.value;
    document.form.textveiw.value=expo.substring(0,expo.length-1)
}
//intersting
