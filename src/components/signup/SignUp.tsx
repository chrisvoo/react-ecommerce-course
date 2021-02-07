import React, { Component, FormEvent } from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignUp.scss';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';


export type SignUpProps = {
    displayName: string
    email: string
    password: string
    confirmPassword: string
}

export type SignUpState = Readonly<SignUpProps>

export default class SignUp extends Component<any, SignUpState> {
    constructor(props: any) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    onSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        const { password, confirmPassword, email, displayName } = this.state;
        if (password !== confirmPassword) {
            alert("Password mismatch!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (e) {
            console.error(exports);
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
        this.setState({
            [e.target.name]: e.target.value
        } as Pick<SignUpState, keyof SignUpState>)
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.onSubmit}>
                    <FormInput
                        handleChange={this.onChange}
                        label="Display Name"
                        value={this.state.displayName}
                        name="displayName" 
                        type="text"
                        required
                    />
                    <FormInput
                        handleChange={this.onChange}
                        label="Email"
                        value={this.state.email}
                        name="email" 
                        type="email"
                        required
                    />
                    <FormInput
                        name="password" 
                        type="password"
                        label="Password"
                        handleChange={this.onChange}
                        value={this.state.password} 
                        required 
                    />
                    <FormInput
                        name="confirmPassword" 
                        type="password"
                        label="Confirm Password"
                        handleChange={this.onChange}
                        value={this.state.confirmPassword} 
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign up</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
} 