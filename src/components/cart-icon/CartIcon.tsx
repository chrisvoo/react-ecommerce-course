import React from 'react';
import { Action, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { RootState } from '../../redux/root-reducer';
import './CartIcon.scss';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';


const CartIcon = ({ toggleCartHidden, itemsCount }: CartIconProps) => (
    <div className="cart-icon">
        <ShoppingIcon
            className="shopping-icon"
            onClick={toggleCartHidden}
        />
        <span className="item-count">{itemsCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

/* Due to itemCount being a primitive (integer), redux will do a shallow equality check
 * under the hood between state changes in mapStateToProps. In this case having a selector
 * does not save us on any re-renders of the CartIcon component. If our overall state 
 * changes but the itemCount value stays the same between these changes, redux's shallow 
 * equality check will see that itemCount is the same value as last time and save us a 
 * re-render. 
 * It's still valuable to keep the logic for the reduce in a selector though because we do 
 * still want to memoize the calculation of itemCount (our reduce logic), and without a 
 * selector our reduce logic would still be running on every state change regardless of 
 * the final calculated value of itemCount. */
const mapStateToProps = (state: RootState) => ({
    itemsCount: selectCartItemsCount(state),
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type CartIconProps = ConnectedProps<typeof connector>;

export default connector(CartIcon);