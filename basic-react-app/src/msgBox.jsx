function Message({name, color}){
    return (
        <div>
            <h1 style={{color: color}}>Hello, {name}</h1>
        </div>
    );
}

export default Message;