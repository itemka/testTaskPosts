import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import css from './Login.module.css';

class LoginForm extends React.Component {
    render() {
        return (
            <form className={css.Login} onSubmit={this.props.handleSubmit}>
                <div>
                    <div>
                        <Field component={`input`}
                               name={`Email`}
                               placeholder={`Email`}
                               className={css.input}/>
                    </div>
                    <div>
                        <Field component={`input`}
                               name={`Password`}
                               placeholder={`Password`}
                               type={"password"}
                               className={css.input}/>
                    </div>
                    {this.props.error && <div className={css.formError}>{this.props.error}</div>}
                    <div>
                        <button className={css.button}>Log in</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'login'})(connect(null, {})(LoginForm));