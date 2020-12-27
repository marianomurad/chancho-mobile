import React from 'react';
import { withFirebaseHOC } from '../../config/Firebase'

const Signup = ({firebase, navigation}) => {

    const handleOnSignup = async (values, actions) => {
        const { name, email, password } = values

        try {
            const response = await firebase.signupWithEmail(
                email,
                password
            )

            if (response.user.uid) {
                const { uid } = response.user
                const userData = { email, name, uid }
                await firebase.createNewUser(userData)
                navigation.navigate('App') //navigate.
            }
        } catch (error) {
            console.error(error)
            actions.setFieldError('general', error.message)
        } finally {
            actions.setSubmitting(false)
        }    }
    const onSubmit = (values, actions) => {
        handleOnSignup(values, actions);
    };


    return (
        <div>
            Hi I'm a login View
        </div>
    );
};

export default withFirebaseHOC(Signup);
