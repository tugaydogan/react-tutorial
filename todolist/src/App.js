import React from 'react';
import TodoList from './todolist';
import Footer from './component/footer';
import Header from './component/header';
import TodoForm from './todoform';

class App extends React.Component{
  constructor(){
    super();
    this.state = {myTasks: [
      {text:"Yapılacak ilk iş",status:"passive"},
      {text:"Kitap oku",status:"passive"},
      {text:"Kendini geliştir",status:"passive"},
      {text:"Yeni şeyler öğren",status:"passive"}
    ]};
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  addTask(val){
    //gelen değeri geçici değişkene atıyoruz
    let updatedList = this.state.myTasks;
    updatedList.push({text:val,status:"passive"});
    //gelen değeri geçici değişkene atadıktan sonra da setstate ediyoruz
    this.setState({myTasks: updatedList});
  }

  doneTask(task_id){
      //gelen id nin önündeki task_ kısmını almadan sadece id kısmını almak için kullanıyoruz
      task_id = task_id.replace('task_','');
      let updatedList = this.state.myTasks;
      let newStatus = 'active';
      let currentStatus = updatedList[task_id].status;
      if(currentStatus === 'active'){
        newStatus = 'passive';
      }
      updatedList[task_id].status = newStatus;
      this.setState({myTasks:updatedList});
      //console.log(task_id+' tamamlandı');
      
  }

  removeTask(task_id){
    task_id = task_id.replace('task_','');
    let updatedList = this.state.myTasks;
    //bir dizi içerisinden istediğiniz öğeyi kaldırır
    updatedList.splice(task_id,1);
    this.setState({myTasks:updatedList});
    //console.log(task_id+' silindi');
    
  }

  render(){
    return(
      <div className="content">
        <Header/>
        <TodoForm addTask={this.addTask}/>
        <TodoList myTasks={this.state.myTasks} doneTask={this.doneTask} removeTask = {this.removeTask}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
