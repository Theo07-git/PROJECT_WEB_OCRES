import React from 'react';
import '../css/dashBoard.css';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Delete" >
                <h1>Delete</h1>
                <form method={"post"} id={"form"} >
                    <div className={"form"}>
                        <label for="id">ID:</label>
                        <input type="text" id="idDelete" name="id" value="" placeholder="61aa02a6bbb85e148cadc6c9"
                            autofocus>
                        </input>
                        <input type="submit" value="Delete" onClick={deleteMsg()}></input>
                    </div>
                </form>
            </div>
        )
    }
}

function deleteMsg() {
    var id = document.getElementById("idDelete").value;
    alert(id);
}



