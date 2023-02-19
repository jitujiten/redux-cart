import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch,useSelector } from 'react-redux';


const CartButton = (props) => {

const dispatch=useDispatch();

const cartquantity=useSelector((state)=>state.cart.totalQuantity)



const togglecarthandler=()=>{
  dispatch(uiActions.toggle())
}




  return (
    <button className={classes.button} onClick={togglecarthandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartquantity}</span>
    </button>
  );
};

export default CartButton;
