// GroceryList React "stateless functional" component, dynamically renders array of groceryItems
let GroceryList = (props) => (
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
);

// GroceryListItem React "class" component, dynamically renders a given grocery item
class GroceryListItem extends React.Component {

  // constructor passes global access of props and initializes state
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  // event handling function, in this case alters state and re-renders component
  onListItemHover(event) {
    this.setState({ //invoking setState automatically re-renders class component
      hovered: !this.state.hovered
    });
  }

  // every class component must have a render method, note access for this.props
  render() {

    // style conditional on state (user interaction)
    let style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>
        {this.props.item}
      </li>
    );
  }

};

// Basic stateless React components for specific grocery list items
let Bananas = () => (
  <li>Bananas</li>
);

let Berries = () => (
  <li>Berries</li>
);

// groceryItem array
let groceries = ['Bananas', 'Berries', 'Kiwi', 'Melon', 'Papaya', 'Persimmons'];

// Render GroceryList component to div tag in index.html with ID of app
ReactDOM.render(<GroceryList items={groceries} />, document.getElementById('app'));
