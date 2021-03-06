import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cart-item/CartItem';
import { RootState } from '../../redux/root-reducer';
import { PreviewItem } from '../../redux/cart/cart-types';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from  '../../redux/cart/cart-actions';


const CartDropDown: FC<CartProps & RouteComponentProps> = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length
            ? cartItems.map((cartItem: PreviewItem) => 
                <CartItem key={cartItem.id} item={cartItem} />)
            : <span className='empty-message'>Your cart is empty</span>    
        }
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

// the selector avoid useless rerendering of the dropdown component
const mapStateToProps = (state: RootState) => ({
    cartItems: selectCartItems(state),
});

// we've used a shortcut since dispatch is always passed as prop, avoiding the need 
// to write the code below
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const connector = connect(mapStateToProps);

type CartProps = ConnectedProps<typeof connector>;

export default withRouter(connector(CartDropDown));
