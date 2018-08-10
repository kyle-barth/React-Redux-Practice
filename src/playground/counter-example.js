class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleSubOne = this.handleSubOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }

    handleAddOne(e) {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleSubOne(e) {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset(e) {
        this.setState(() => {
            return {
                count: 0
            }
        })
        // This doesnt give the expected output due to asynchronous operation
        // this.setState({
        //     count: 0
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}; Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={100}/>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const subOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: { count }</h1>
//             <button onClick={ addOne }>+1</button>
//             <button onClick={ subOne }>-1</button>
//             <button onClick={ reset }>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();