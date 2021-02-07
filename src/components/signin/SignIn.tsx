import React, { Component, FormEvent } from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import { signInWithGoogle, signInWithEmailAndPassword } from '../../firebase/firebase.utils';


export type SignInProps = {
    email: string
    password: string
}

export type SignInState = Readonly<SignInProps>

export default class SignIn extends Component<any, SignInState> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    onSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' });
        } catch (e) {
            console.error(e);
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
        this.setState({
            [e.target.name]: e.target.value
        } as Pick<SignInState, keyof SignInState>)
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.onSubmit}>
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
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton
                            type="button"
                            isGoogleSignIn
                            onClick={signInWithGoogle}
                        >
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
} 