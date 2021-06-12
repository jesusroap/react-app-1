import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault()
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="escribe una tarea"
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <br/><br/>
                <textarea
                    name="description"
                    placeholder="escribe una descripcion"
                    onChange={this.onChange}
                    value={this.state.description}>
                </textarea>
                <br/>
                <button type="submit">Guardar Tarea</button>
            </form>
        )
    }
}