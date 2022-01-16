import React from "react";
import './pop.css';
const Popup =props=>{
    const [val,setVal]=React.useState(props.edit.text);

    const handleChange=e=>{
        setVal(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        props.update(val);
    }
    return(
        <div className="outer">
            <center>
                <div className="popup">
                    <center>
                        <h1>Update the selected Task!</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={val} onChange={handleChange}/>
                            <input type="submit" value="update"/>
                        </form>
                    </center>
                </div>
            </center>

        </div>
    )
}

export default Popup;