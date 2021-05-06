//textbox input Validation -------------------------------------------------------------------------------->
function FunctionSave() 

{

var x = document.forms["myForm"]["txt_notepad_title"].value;
  
if (x == "")
  
{
    
alert("Please Fill In The TextBox");
   
}
   
//check if same value inside localstorage error save
else if (localStorage.getItem(document.forms["myForm"]["txt_notepad_title"].value) !== null)

{	
	
	alert("Please Used Different Notepad Title Name");
	
	
}
   
   
else
   
{

//Insert Into Local Storage----------------------------------------------------------------------------->
var title = document.forms.myForm.txt_notepad_title.value;
var text = document.forms.myForm.txt_area.value;
	
localStorage.setItem(title, text);
document.getElementById("myForm").reset();
doShowAll();

alert("Save Notedpad Successfull");

}
}








//Remove Item------------------------------------------------------------------------------------------------>
function FunctionDelete()
	
   {
	  
   var x = document.forms["myForm"]["txt_notepad_title"].value;
  
   if (x == "")
  
    {
    
     alert("Please Choose Notepad Title From Table Below To Delete");
   
    }
   
     else
   
    {
	
    var title = document.forms.myForm.txt_notepad_title.value;
	
	document.forms.myForm.txt_notepad_textarea.value = localStorage.removeItem(title);
	document.getElementById("myForm").reset();
	alert("Delete Succesfull");
	doShowAll();
	  
    }
    }





//Clear Table----------------------------------------------------------------------------------------------->
function FunctionClear_Table()
	
   {
	
	localStorage.clear();
	doShowAll(); 
 
   }



  
  

//Display Item From Local Storage -------------------------------------------------------------------------->
function FunctionDisplay()
	
  {
	  
	var x = document.forms["myForm"]["txt_notepad_title"].value;
  
    if (x == "")
  
    {
    
     alert("Please Choose Notepad Title From Table Below To Display");
   
    }
   
     else
   
    {  
	  
	
document.getElementById('display2').innerHTML =
document.getElementById("txt_area").value;


// Retrieve
document.getElementById("display2").innerHTML = localStorage.getItem(document.getElementById("txt_notepad_title").value);
document.getElementById("txt_area").value = document.getElementById('display2').innerHTML;

	  
  }
  }
  





//textbox input Validation --------------------------------------------------------------------------------------->  
function FunctionUpdate() 

{
var x = document.forms["myForm"]["txt_notepad_title"].value;
var y = document.forms["myForm"]["txt_area"].value;
  
if (x == "")
  
{
    
alert("Please Choose Notepad Title From Table Below To Update");
   
}

else if(y == "")

{
	
alert("Please Fill In The TextBox Area");

}
   
else
   
{

//Update Local Storage--------------------------------------------------------------------------------------------->
var title = document.forms.myForm.txt_notepad_title.value;
var text = document.forms.myForm.txt_area.value;
	
localStorage.setItem(title, text);
document.getElementById("myForm").reset();
alert("Update Succesfull");
doShowAll();

}
}
  
  
  
  
  
  
  
//Display Inside Table -------------------------------------------------------------------------------------------->
function doShowAll() 

{
	if (CheckBrowser()) 
	
{
		
		var key = "";
		var list = "<table id='list' width='100%' border='1'><tr><th scope='col' class='table_header'>Notedpad Title</th> <th scope='col' class='table_header'>Note Text</th> <th scope='col' class='table_header'>Date/Time</th></tr>";
		var i = 0;
		var d = new Date();
		
		for (i = 0; i <= localStorage.length - 1; i++) 
		
		{
			key = localStorage.key(i);
			
			list += "<tr><td align='center'>" + key + "</td> <td align='center'>" + localStorage.getItem(key) + "</td> <td align='center'>" + d + "</td></tr>";
		}
		
		document.getElementById('list').innerHTML = list;
		
		} 
	
		else 
		
		{
			
		alert("LocalStorage Not Supported");
		
		}
		
		}








//Check Browser Compatiblelity ----------------------------------------------------------------------------------->
function CheckBrowser()

 	{
		
	if ('localStorage' in window && window['localStorage'] !== null)
	
    {

// we can use localStorage object to store data ------------------------------------------------------------------>
	
	return true;
	
	} 
	
	else 
	
	{
		
	return false;
	
	}
	}
	
	
	
	
//Convert Txt_Area To Notepad OutPut ------------------------------------------------------------------------->
function Save_To_Notepad()

{
	
//textbox input Validation ----------------------------------------------------------------------------------->
var x = document.forms["myForm"]["txt_notepad_title"].value;
var y = document.forms["myForm"]["txt_area"].value;

if (x == "")
  
{
    
alert("Please Fill In The TextBox");
   
}
   

else if (y == "")

{
	
alert("Please Fill In The TextBox Area");
	
}


else
   
{
	
const data = document.getElementById('txt_area').value;                 //sample json
const a = document.createElement('a');
const blob = new Blob([JSON.stringify(data)]);


a.href = URL.createObjectURL(blob);
a.download = document.getElementById('txt_notepad_title').value;        //filename to download
a.click();


alert("Save As Notepad Is Succesfull, Please Check Your Download Folder");
document.getElementById("myForm").reset();	


}

}
