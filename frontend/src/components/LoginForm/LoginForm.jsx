import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import { loginUser } from '../../store/actions/userActions';

const LoginForm = () => {
    const loginFormFields = [
        {
            id: 'email',
            type: 'text',
            name: 'email',
            label: 'Email *',
        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            label: 'Password *',
        },
    ];

    const [loginFormState, updateLoginFormState] = useState({
        email: '',
        password: '',
    });
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const handleChange = (event) => {
        updateLoginFormState({
            ...loginFormState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(
            loginUser({
                email: event.target[0].value,
                password: event.target[1].value,
            }),
        );
        navigate('/');
    };
    const formFields = loginFormFields;
    return (
        <Form handleSubmit={(event) => handleSubmit(event)}>
            <div className="row p-4">
                <div className="col-12">
                    {formFields.length &&
                        formFields.map((formfield) => {
                            return (
                                <Input
                                    formField={formfield}
                                    key={formfield.id}
                                    handleChange={handleChange}
                                    value={loginFormState[formfield.name]}
                                />
                            );
                        })}
                    <div className="my-3">
                        <Button type="submit" color="success">
                            Kirjaudu
                        </Button>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default LoginForm;
