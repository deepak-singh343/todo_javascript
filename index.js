var count=0;

//create new li element with input text data
function createnewlistelement(value)
{
    //create li element
    var newnode = document.createElement("li");
    var textnode = document.createTextNode(value);
    newnode.appendChild(textnode);
    return newnode;
}
//create delete icon when task is added
function createdeleteicon(listitem)
{
    var delicon=document.createElement("i");
    delicon.setAttribute('class','far fa-trash-alt');
    listitem.appendChild(delicon);
    return;
}
//create checkbox when task is added
function createcheckbox(listitem)
{
    // creating checkbox element 
    var checkbox = document.createElement('input'); 
              
    // Assigning the attributes to created checkbox 
    checkbox.type = "checkbox"; 
    checkbox.setAttribute('class','checkbox');
    listitem.appendChild(checkbox);
    return;
}
//delete task
function deletetask()
{
    //fetch all delete icons
    var dels=document.getElementsByClassName('fa-trash-alt');
    var i;
    for(i=0;i<dels.length;i++)
    {
        dels[i].onclick=function()
        {
            var li = this.parentElement;
            document.getElementById("my-list").removeChild(li);
            count--;
            counttask(count);
        }
    }
}
//add the task
function addtask()
{
    //get the value of the input field
    var value=document.getElementById('display').value;
    if(value=="")
        return;
    //calling function to create new li element
    var newlist=createnewlistelement(value); 
    //add list to the lists    
    var listitem=document.getElementById("my-list").appendChild(newlist);
    //clear input value
    document.getElementById('display').value="";
    count++;

    //calling function to create checkbox
    createcheckbox(listitem);

    //calling function to create delete icon
    createdeleteicon(listitem);

    //calling function to get the count of the tasks
    counttask(count);

    //callng function to delete the task
    deletetask();

    //calling function to differentiate checked tasks
    check();
    
}

//differentiate checked tasks
function check()
{
    var checkboxes=document.getElementsByClassName('checkbox');
    for(let j=0;j<checkboxes.length;j++)
    {
        checkboxes[j].onclick=function()
        {
            var checkeditem = this.parentElement;
            if(checkboxes[j].checked)
            {
                
                checkeditem.style.textDecoration='line-through';
            }
            else{
                checkeditem.style.textDecoration='none';
            }
        }   
    }
}

//show number of tasks
function counttask(a)
{
    document.getElementById('task-length').innerText=a+' tasks remaining';
}

document.getElementById('add-btn').addEventListener('click',addtask);





