
import React from "react";
import AddItem from "./AddItem";
// import NoData from "./NoData";

const Header = (props) => {
    const itemValue = (value) => {
        props.getMsg(value);
    }
    return ( 
        <div id="myDIV" className="header">
            <h2 style={{margin:5}}>My TO DO List</h2>
            <AddItem getItem = {itemValue} />
        </div>
     );
}
 
export default Header;