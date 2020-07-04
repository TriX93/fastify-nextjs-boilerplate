import React from 'react'

export default class IndexPage extends React.Component {
    state = { username: '', salute: '' }

    render() {

        const salute = this.state.salute ? <pre>{this.state.salute}</pre> : <div></div>;

        return <div>
            <h1>Hello World</h1>
            <h2>What is your name?</h2>
            <input type="text" value={this.state.username} onChange={this.detectChanges}/>
            <button onClick={this.sayHello}>Login</button>
            {salute}
        </div>    
    }

    detectChanges = e => {
        this.setState({username: e.target.value})
    }

    sayHello = async e => {
        const {username} = this.state;
        const response = await fetch(`/hello?username=${username}`);
        this.setState({ salute: await response.text() }) 
    }
}