import React from 'react'

class AddContact extends React.Component{
    state = {
        name: "",
        contact:""
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name == "" || this.state.contact == "") {
            alert("All fields are mandatory!");
            return
        }
        this.props.addContactHandler(this.state);
        this.state({ name: "", contact: "" });
    }
    render() {
        return (
          <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                ></input>
              </div>
              <div className="field">
                <label>Phone Number</label>
                <input
                  type="text"
                  PhoneNumber="PhoneNumber"
                  placeholder="Phone Number"
                  value={this.state.contact}
                  onChange={(e) => this.setState({ contact: e.target.value })}
                ></input>
              </div>
              <button className="ui button blue">Add</button>
            </form>
          </div>
        );
 }
}

export default AddContact;