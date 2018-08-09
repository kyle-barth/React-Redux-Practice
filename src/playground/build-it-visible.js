const appRoot = document.getElementById('app')

let visibility = false

const onToggle = () => {
    visibility = !visibility
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ onToggle }>Show Details</button>
            { visibility && <p>Now you see me</p> } 
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()