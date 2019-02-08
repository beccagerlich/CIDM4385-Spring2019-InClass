class Title extends React.Component{
    //constructor
    constructor(props){
        super(props);
        this.state = {title: ''};
    }
    render(){
        return(
            <h1>Cheaper Pizza</h1>
        );
    };
}

class Email extends React.Component{
    //constructor
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return(
            <div class="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        );
    };
}

class Password extends React.Component{
    //constructor
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return(
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                <button type="submit" class="btn btn-primary">Login</button>
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <h2>Welcome!</h2>
                <button type="submit" class="btn btn-primary">Begin Order</button>
            </div>
            
        );
    };
}

class Size extends React.Component{
    //constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="form-group">
            <h4>Select a pizza size:</h4>
                <form action="">
                    <input type="radio" name="size" value="10'"/> 10' <div class="size_pizza1"></div><br/>
                    <input type="radio" name="size" value="12'"/> 12' <div class="size_pizza2"></div><br/>
                    <input type="radio" name="size" value="15'"/> 15' <div class="size_pizza3"></div><br/>
                </form>
            </div>
        );
    };
}
class PizzaEntry extends React.Component{
    //constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card bg-light mb-3">
            <h4>Select 2 toppings:</h4>
                <img src={"src/img/" + this.props.pizza_type + ".jpg"} className="card-img-top" alt={this.props.pizza_type + " Pizza"}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.pizza_type} Pizza. </h5>
                    <p className="card-title">{this.props.pizza_type} Topping.</p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        );
    };
}

class ChooseBidder extends React.Component{
    //constructor
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="card bg-light mb-3">
            <h4>Local Pizza Bidders and Prices</h4>
            <p>Price: Low - High</p>
            <form action="">
                <input type="radio" name="bidder" value="bidder1"/> Bidder $ <br/>
                <input type="radio" name="bidder" value="bidder3"/> Bidder $ <br/>
                <input type="radio" name="bidder" value="bidder3"/> Bidder $ <br/>
            </form>
            </div>
        );
    };
}

class ConfirmPurchase extends React.Component{
    //constructor
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="card bg-light mb-3">
            <h4>Confirm Purchase</h4>
                <p>Size:<br/>
                Toppings:<br/>
                Bidder and $:<br/></p>
                <button type="submit" class="btn btn-primary">Confirm</button>
            </div>
        );
    };
}

class Complete extends React.Component{
    //constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h2>Your order will be ready shortly!</h2>
        );
    };
}

class CeaperPizzaComponent extends React.Component{
    //constructor
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    };
    render(){
        return(
            <div class="center_div">
                <div className="container">
                    <Title/>
                    <div id="pizzaform" className="row">
                        <div className="col">
                            <form>
                                <Email/>
                                <Password/>
                                <Size/>
                                <div className="card-group">
                                    <PizzaEntry pizza_type="Cheese" />
                                    <PizzaEntry pizza_type="Pepperoni" />
                                    <PizzaEntry pizza_type="Sausage" />
                                </div>
                                <div className="card-group">
                                    <div class="row">
                                        <div class="col">
                                            <PizzaEntry pizza_type="Tomatos" />
                                            <PizzaEntry pizza_type="Pineapple" />
                                            <PizzaEntry pizza_type="Spinach" />
                                        </div>
                                    </div>
                                </div>
                                <ChooseBidder/>
                                <ConfirmPurchase/>
                                <Complete/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
ReactDOM.render(
    <CeaperPizzaComponent/>,
    document.getElementById('ceaperpizza')
);