class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggle(e) {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={ this.handleToggle }>Show Details</button>
                { this.state.visibility && <p>Now you see me</p> } 
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const appRoot = document.getElementById('app')

// let visibility = false

// const onToggle = () => {
//     visibility = !visibility
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={ onToggle }>Show Details</button>
//             { visibility && <p>Now you see me</p> } 
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// render()