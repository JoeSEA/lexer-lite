function init() {
    var lexBtn = document.getElementById('lexBtn');

    //button listeners
    lexBtn.onclick = lexIt;
} //end init

//set onload property 
window.onload = init;


//convert string to binary
function lexIt() {
    var textArea = document.getElementById('textArea');
    var dataOut = document.getElementById('dataOut');
    var newBin = [];
//    alert('Works!');

    //get string from textArea
    var str = textArea.value;
    
    //convert string to an array of ascii decimal numbers
    var lexData = sortData(str);

    //converts strings to ascii into an array
    function sortData(s) {
        var message;
        console.log(s);
        var result = s.match(/\<html\>|\<base\>|\<head\>|\<style\>|\<title\>|\<button\>|\<form\>|\<input\>|\<label\>|\<output\>|\<progress\>|\<menu\>|\<menuitem\>|\<audio\>|\<map\>|\<video\>|\<p\>/g);
        if(result != null){
        message = "You have HTML tags in your document!";
        }else{
        message = "No HTML tags have been detected.";
        }
        
        dataOut.innerHTML = message;
        
    }

}


