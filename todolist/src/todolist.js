import React from 'react';

export default class TodoList extends React.Component{
    constructor(){
        super();
        this.doneTask = this.doneTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.state = {todoFilter:'All'};
    }

    doneTask(e){
        //app.js de id ye göre aldığımız değerin buraya getirilmesi
       this.props.doneTask(e.target.parentNode.id); 
    }

    removeTask(e){
        this.props.removeTask(e.target.parentNode.id);
    }

    todoListFilter = (param) => {
        //console.log(param);
        this.setState({todoFilter:param});
        //status butonlarının doğru görünebilmesi için yazıyoruz
        const activeBtn = document.getElementById('filterBtn'+param);
        //sadece seçili butonun aktif görünebilmesi için yapılan işlem
        document.getElementById('filterBtnAll').classList.remove('active');
        document.getElementById('filterBtnActive').classList.remove('active');
        document.getElementById('filterBtnCompleted').classList.remove('active');
        activeBtn.classList.add('active');
    }

    render(){
        let items_left = 0;
        const items = this.props.myTasks.map((value,i) => {
            if(value.status==='passive'){
                items_left++;
            }
            if(this.state.todoFilter==='All' || (this.state.todoFilter==='Active' && value.status==='passive') ||(this.state.todoFilter==='Completed' && value.status==='active')){
            let task_id = 'task_'+i;
            
            return(
                
                <li key={i} id={task_id} className={value.status}>
                    <span className="id">{i+1}</span>
                    <span className="title">{value.text}</span>
                    <span className="type" onClick={this.doneTask}></span>
                    <span className="delete" onClick={this.removeTask}></span>
                </li>
            )
            }
        });
        return(
            <div>
                <div className="todo-list">
                    <ul>
                        {items}
                    </ul>
                </div>
                <div className="todo-filter">
                    <div className="left">
                        <span>{items_left} items left</span>
                    </div>
                    <div className="right" id="listChanger">
                        <ul>
                            <li className="active" id="filterBtnAll"><span onClick={() => this.todoListFilter('All')}>All</span></li>
                            <li id="filterBtnActive"><span onClick={() => this.todoListFilter('Active')}>Active</span></li>
                            <li id="filterBtnCompleted"><span onClick={() => this.todoListFilter('Completed')}>Completed</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
