import React, { FC } from 'react';
import StripeCheckout from 'react-stripe-checkout';

type StripeCheckoutButtonProps = {
    price: number
}

const onToken = (token: any) => {
    /*
        card: {
            address_city: "Pisa"
            address_country: "Italy"
            address_line1: "Boulevard of Broken Dream"
            address_line1_check: "unchecked"
            address_line2: null
            address_state: "TC"
            address_zip: "56012"
            address_zip_check: "unchecked"
            brand: "Visa"
            country: "US"
            cvc_check: "unchecked"
            dynamic_last4: null
            exp_month: 1
            exp_year: 2022
            funding: "credit"
            id: "card_1ISk1gJnN4DB6JjKeIQDZwWi"
            last4: "4242"
            name: "Chris Castle"
            object: "card"
            tokenization_method: null
        }
        client_ip: "79.30.142.31"
        created: 1615213540
        email: "voodoo81people@gmail.com"
        id: "tok_1ISk1gJnN4DB6JjK55sOVKFp"
        livemode: false
        object: "token"
        type: "card"
        used: false
    */
    console.log(token);
    alert('Payment successful!')
}

const StripeCheckoutButton: FC<StripeCheckoutButtonProps> = ({ price }) => {
    const priceForStripe = price * 100;

    return (
        <StripeCheckout
            label='Pay Now'
            panelLabel='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            stripeKey={process.env.REACT_APP_STRIPE_PUBKEY!}
            token={onToken}
            description={`Your total is $${price}`}
            amount={priceForStripe}
        />
    );
}

export default StripeCheckoutButton;
 