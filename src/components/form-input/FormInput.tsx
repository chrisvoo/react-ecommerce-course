import React from 'react';
import './FormInput.scss';

export type FormInputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label?: string
    value?: string
    [x:string]: any
}

const FormInput = ({ handleChange, label, ...otherProps}: FormInputProps) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
                label &&
                    <label className={`${otherProps.value?.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
            }
        </div>
    );
}

export default FormInput;
