import React, { Component } from 'react';
import ListItems from './component/list-items/ListItems';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      itemAwal:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e){ /* input value dari form ke state */
    this.setState({
      itemAwal:{
        text:e.target.value,
        key: Date.now()
      }
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const newItem = this.state.itemAwal;
    if(newItem.text !== ""){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items:newItems,
        itemAwal:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filterItem = this.state.items.filter(item=>item.key !==key);
    this.setState({
      items :filterItem
    })
  }
  setUpdate(text,key){
    const items =this.state.items;
    items.map(item=>{
      if(item.key === key){
        item.text=text;
      }
    })
    this.setState({
      items:items
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="todo-form" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.itemAwal.text} onChange={this.handleInput} placeholder="Masukkan Kata..." />
            <button type="submit">Tambah</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </div>
    );
  }
}
