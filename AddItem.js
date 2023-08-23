import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <form className="row mb-5" onSubmit={(e) => {
        e.preventDefault();
        this.props.addItem(this.state.productName, this.state.productPrice); // Change to addItem
      }}>
        <div className="form-group col-4">
          <input
            type="text"
            name="productName"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter Name"
            onChange={(e)=>{
              this.setState({productName:e.currentTarget.value})
            }}
            value={this.state.productName}
          />
        </div>
        <div className="form-group mt-2 col-4">
          <input
            type="number"
            className="form-control"
            name="productPrice"
            id="price"
            placeholder="Price"
            onChange={(e)=>{
              this.setState({productPrice:e.currentTarget.value})
            }}
            value={this.state.productPrice}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2 col-4"
        >
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
