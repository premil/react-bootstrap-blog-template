import React from 'react';
import '../styles/pages-css/newaccount.css';
import CreateAccount from '../components/account/CreateAccount';
import Footer from '../components/footer/Footer';


function NewAccount() {
    return (
        <div>
            <CreateAccount/>
            <Footer/>
        </div>
    );
}

export default NewAccount;
