

function MyInfo(props) {

    console.log(props);

    return(
        <div>
            <h1>* {props.name} *</h1>
            <p>
                <small>{props.email}</small>
            </p>
        </div> 
    );
}


export default MyInfo;