import React, { ReactChildren } from 'react';
import './CustomButton.scss';

export type CustomButtonProps = {
    children?: ReactChildren | string
    isGoogleSignIn?: boolean
    [key: string]: any
}

const CustomButton = ({ children, isGoogleSignIn, ...props}: CustomButtonProps) => {
    return (
        <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...props}>
            {children}
        </button>
    );
}

export default CustomButton;
