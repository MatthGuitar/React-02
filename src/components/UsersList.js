import React, { Component } from "react";

export class UsersList extends Component {
    state = {
        listTitle: "",
        listItem: [
            {
                name: "Pedro",
                idade: 25,
                email: "pedro@email.com"
            },
            {
               name: "Rafael",
               idade: 30,
               email: "Rafael@email.com"
            },
            {
                name: "João",
                idade: 27,
                email: "joao@email.com"
            }
        ]
    }
};

render() {
    return (
      <div>
        <ul>
          {this.state.listItems.map(list => (
            <li>
              <UsersList
                listName={list.name}
                listIdade={list.idade}
                listEmail={list.email}
              />
            </li>
          ))}
        </ul>
      </div>
    );
          }
