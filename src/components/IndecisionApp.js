import React from 'react'

// Components
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: [] // DP(2/2) props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) this.setState(() => ({options}))
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
        // Same as ...
        // this.setState(() =>{
        //     return {
        //         options: []
        //     }
        // })
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randNum]
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        } 

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
        // Same as...
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // })
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// How you would set default prop values DP(1/2)
// IndecisionApp.defaultProps = {
//     options: []
// }