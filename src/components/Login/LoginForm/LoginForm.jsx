import React from 'react';
import {Field} from "redux-form";

class LoginForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <Field component={`input`} name={`Email`} placeholder={`Email`}/>
                    <Field component={`input`} name={`Email`} placeholder={`Email`}/>
                    <div>
                        <button>Log out</button>
                        <button className={`css.button`}>Log in</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default LoginForm;