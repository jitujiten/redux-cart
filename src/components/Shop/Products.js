import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyproduct = [
  {
    id: "p1",
    price: 60,
    title: "my first book",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 50,
    title: "my second book",
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {dummyproduct.map((item)=>{
        return  <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      })}
       
      </ul>
    </section>
  );
};

export default Products;
