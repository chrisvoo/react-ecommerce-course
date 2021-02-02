import React, { ReactChildren } from 'react';
import './CustomButton.scss';

export type CustomButtonProps = {
    children?: ReactChildren | string
    [key: string]: any
}

const CustomButton = ({ children, ...props}: CustomButtonProps) => {
    return (
        <button className="custom-button" {...props}>
            {children}
        </button>
    );
}

export default CustomButton;
