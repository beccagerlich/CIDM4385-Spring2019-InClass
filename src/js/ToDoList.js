/*
        ReactDOM.createElement(
            1. What HTML element do you want to make),
            2. are there any attribute/properties you need to pass so that I can configure this new element?
            3. what content shall I place into this element? OR
            4. chindren
        */

/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}  */      

const ToDoList = (props) => {
    return React.createElement('ul', {}, [
            React.createElement('li', 
                                {
                                    className: "text-danger"
                                }, 
                                props.itemone),
            React.createElement('li', 
                                {
                                    className: "text-warning"
                                }, 
                                props.itemtwo),
            React.createElement('li', 
                                {
                                    className: "text-primary"
                                }, 
                                props.itemthree)
        ]
    );
}