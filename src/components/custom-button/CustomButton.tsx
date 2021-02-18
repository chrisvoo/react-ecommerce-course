import React, { ReactChildren } from 'react';
import './CustomButton.scss';

export type CustomButtonProps = {
    children?: ReactChildren | string
    isGoogleSignIn?: boolean
    [key: string]: any
}

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props}: CustomButtonProps) => {
    let cssClass = `${isGoogleSignIn ? "google-sign-in" : ""}`;
    cssClass += ` ${inverted ? "inverted" : ""}`
    return (
        <button className={`${cssClass} custom-button`} {...props}>
            {children}
        </button>
    );
}

export default CustomButton;
