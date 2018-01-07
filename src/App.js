import React, { Component } from 'react';

const people = [
    {
      id:1,
      first:"Mohamed",
      last:"Salah",
      age:11
    },
    {
      id:2,
      first:"Roberto",
      last:"Firmino",
      age:9
    },
    {
      id:3,
      first: "Adam",
      last: "Lalana",
      age:20
    },
    {
      id:4,
      first: "Sadio",
      last: "Mane",
      age:19
    },
  ]

const searching = (term) =>{
  return function(x) {
return x
  .first
  .toLowerCase()
  .includes(term.toLowerCase()) || !term; // >> || !term; ไว้ในกรณีที่ เราไม่ใส่อะไรมันจะเป็นค่าว่าง ซึ่ง !term จะมีค่าเปน เท็จ  แล้วในarray จะถูตรวสอบโดยเครื่องหมาย เงื่อนไขหน้าเครื่องหมาย  || ถ้าเราพิมอะไรเข้าไปแล้วพบว่าเจอในคำใดคำนั้นมีค่าเป็นทรู แล้วหลังเครื่องหมายหรือจะมีค่าเป็นเท็จ เพราะมีตัวอักษรส่งมา
  }
}
class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
        people: people,
        term:'',
      }
      this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler = (e) => {
        this.setState({ term : e.target.value})
  }
  render() {
    const { term, people } = this.state
    return (
      <div className="App">
        <form>
            <input
              type="text"
              onChange={this.searchHandler}
              value = {term}
            />
        </form>
         { people.filter(searching(term)).map(person => {
            return (
                  <div key={person.id}>
                    <h1>{person.first}</h1>
                  </div>
            )
          })}
      </div>
    );
  }
}

export default App;
