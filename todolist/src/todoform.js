import React from 'react';

export default class TodoForm extends React.Component{
    constructor(){
        super();
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){
        //kaydetmek için enter a bastığımızda sayfayı refresh etmemesi için
        e.preventDefault();
        const inp = document.getElementById('todoInput');
        //ekranda girilen değerleri almak için yapıyoruz
        const val = inp.value;
        //formu temizlemesi için
        inp.value = '';
        this.props.addTask(val);
    }

    render(){
        return(
            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
                        <input id="todoInput" type="text" className="add-todo" autoComplete="off" placeholder="What needs to be"></input>
                    </form>
                </div>
                <button type="button" className="add-btn" onClick={this.addTask}></button>
            </div>
        );
    }
}