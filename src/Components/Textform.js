import React, {useState} from 'react';

export default function Text(props) {
    const uppercase = () =>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase", "success")
    }
    const lowercase = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase", "success")
    }
    const Clear = () =>{
        setText('')
        props.showAlert("Text Removed", "success")
    }
    const Copy = () =>{
        let copyitem = document.getElementById('textbox')
        copyitem.select();
        navigator.clipboard.writeText(copyitem.value)
        props.showAlert("Text Copied", "success")
    }
    const Remove = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '))
        props.showAlert("Remove Extra spaces", "success")
    }
    const changes = (event) =>{
        console.log("changes perform by yash") 
        setText(event.target.value);
    }
    const [text, setText] = useState()
    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'black'}} className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="textbox" onChange={changes} placeholder={"Enter text in this box"} value={text} rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={uppercase}>UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-secondary mx-1" onClick={lowercase}>LowerCase</button> 
            <button disabled={text.length === 0} className="btn btn-danger mx-1" onClick={Clear}>Clear</button>  
            <button disabled={text.length === 0} className="btn btn-success mx-1" onClick={Copy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-warning mx-1" onClick={Remove}>Remove Extra Spaces</button>



        </div>
        {/* <div className='container'>
            <h3 className='my-4'>Your Text Summary Here: -</h3>
            <p>Total word {text.split(" ").filter((e)=>{return e.length != 0}).length} and Character {text.length}</p>
            <p>Time to read {0.008 * text.split(' ').length} minutes.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text inside textbox"}</p>
        </div> */}
        </>
    )
}

