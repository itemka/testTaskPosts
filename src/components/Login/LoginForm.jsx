import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

class LoginForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <div>
                        <Field component={`input`} name={`Email`} placeholder={`Email`}/>
                    </div>
                    <div>
                        <Field component={`input`} name={`Password`} placeholder={`Password`}/>
                    </div>
                    <div>
                        <button className={`css.button`}>Log in</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'login'})(connect(null, {})(LoginForm));