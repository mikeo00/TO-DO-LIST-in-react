import React,{useState} from "react";

function Todolist(){
    const [todo,setTodo] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [duedate,setDuedate] = useState("");
    const [show,setShow] = useState(false);

    function formatDate(){
        const d = new Date();
        const day = String(d.getDate()).padStart(2,"0");
        const month = String(d.getMonth()+1).padStart(2,"0");
        const year = d.getFullYear();
        const hours = String(d.getHours()).padStart(2,"0");
        const minutes = String(d.getMinutes()).padStart(2,"0");
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    function addtodo(){
        const newtodo = {
            title:title,
            description:description,
            dateposted: formatDate(),
            duedate: duedate
        };
        if(!newtodo.title=="" && !newtodo.description==""){
        setTodo(t=>[...t,newtodo]);
        setTitle("");
        setDescription("");
        setDuedate("");
        setShow(false);}else{
            alert("please fill values");
        }
    }

    function removetodo(index){
        setTodo(t => t.filter((_,i)=>i!==index));
    }

    return(
        <div className="main">
            <h1>TODO-LIST</h1>
            <button type="button" onClick={()=>setShow(true)} id="open">add</button>
            
            {show && (
                <div className="hidden-container">
                    <form>
                    title:<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/><br/>
                    description:<input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} required/><br/>
                    due:<input type="date" value={duedate} onChange={(e)=>setDuedate(e.target.value)}/><br/>
                    <button type="button" id="add" onClick={addtodo}>add</button><br/>
                    <button type="button" id="discard" onClick={()=>setShow(false)}>discard</button>
                    </form>
                </div>
            )}

            <ul>
                {todo.map((t,index)=>
                <li key={index}>
                    posted on: {t.dateposted} <br/> {t.title}<br/>
                    {t.description}<br/>
                    due date: {t.duedate === "" ? "none" : t.duedate}
                    <button id="remove" onClick={()=>removetodo(index)}>remove</button>
                </li>
                )}
            </ul>
        </div>
    );
}

export default Todolist;
