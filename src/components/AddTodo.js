import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment'

import { addReminder, deleteReminder } from '../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            date: ''
        }

        this.submit = this.submit.bind(this);
        this.getInput = this.getInput.bind(this);
    }

    submit(event) {
        event.preventDefault();
        this.props.addReminder(this.state.todo, moment(new Date(this.state.date)).format("LLL"));
        this.setState({todo: ''});
                
    }

    getInput(event) {
       this.setState({todo: event.target.value});       
    }

    renderTodos() {
        return this.props.text.map((item, index) => {
            return (
                <li key={index}>
                    <span id="left">{item.todo}</span>
                    <span id="right">{item.date}</span>
                    <span onClick={() => this.props.deleteReminder(item.id)}>&#x2715;</span>
                </li>
            )
        });        
    }

    render() {    
        return (
            <div className="app-container">
                <form className="add-todo" onSubmit={this.submit}>
                    <input type="text" 
                        value={this.state.todo}
                        onChange={this.getInput} />
                    <input type="datetime-local"
                        value={this.state.data}
                        onChange={event => this.setState({date: event.target.value})} />
                    <div className="buttons">
                        <button>add</button>
                        <button>clear</button>
                    </div>
                    
                </form>
                <ul>
                    {this.renderTodos(this.props)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return {
        text: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addReminder, deleteReminder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
