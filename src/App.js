import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Headerr";
import Items from "./components/Items";
import Categores from "./components/Categores";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "BMW",
          img: "cart-img4.jpg",
          desc: "BMW m5 1200 HP",
          category: "Bmw",
          price: "149.099",
        },

        {
          id: 2,
          title: "Ferrari",
          img: "cart-img3.jpg",
          desc: "Lorem ipsum dolor",
          category: "Ferrari",
          price: "209.199",
        },

        {
          id: 3,
          title: "Porsge",
          img: "cart-img2.jpg",
          desc: "Lorem ipsum dolor",
          category: "Porsge",
          price: "349.990",
        },

        {
          id: 4,
          title: "Lamborgini",
          img: "cart-img1.jpg",
          desc: "Lorem ipsum dolor",
          category: "Lamborgini",
          price: "129.919",
        },

        {
          id: 5,
          title: "Audi",
          img: "cart-img5.jpg",
          desc: "Lorem ipsum dolor",
          category: "Audi",
          price: "129.919",
        },

        {
          id: 6,
          title: "Audi",
          img: "cart-img6.jpg",
          desc: "Lorem ipsum dolor",
          category: "Audi",
          price: "129.919",
        },
      ],
      showFullItem: false,
      fullitem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.cooseCategory = this.cooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categores cooseCategory={this.cooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && <ShowFullItem item={this.state.fullitem} />}
        <Footer />
      </>
    );
  }

  onShowItem(item) {
    this.setState({ fullitem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  cooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
