import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components-css/account/createaccount.css';
import { Button } from '../button/Button';
import { Publish } from '@material-ui/icons';

function CreateAccount() {
    return (
        <div className="newUser-container">
            <span className="newUserTitle">Create New Account</span>
            <form className="userForm">
                <div className="left-side">
                    <div className="input-col1">
                        <div className="input-col2">
                            <div className="input-col2-inner">
                                <lable className="lable">First Name</lable>
                                <input
                                    className='user-input'
                                    type='text'
                                    placeholder='Your First Name'
                                />
                            </div>
                            <div className="input-col1">
                                <lable className="lable">Last Name</lable>
                                <input
                                    className='user-input'
                                    type='text'
                                    placeholder='Your Last Name'
                                />
                            </div>
                        </div>  {/* class input-col2 */}
                    </div>  {/* class input-col1 */}
                    <div className="input-col1">
                        <lable className="lable">Email</lable>
                        <input
                            className='user-input'
                            type='email'
                            placeholder='Enter email'
                        />
                    </div>
                    <div className="input-col1">
                        <lable className="lable">Password</lable>
                        <input
                            className='user-input'
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                    <div className="input-col1">
                        <lable className="lable">Re-Enter Password</lable>
                        <input
                            className='user-input'
                            type='password'
                            placeholder='Re-enter Password'
                        />
                    </div>
                    <div className="input-col1">
                        <lable className="lable">Address 1</lable>
                        <input
                            className='user-input'
                            type='text'
                            placeholder='76/2A...'
                        />
                    </div>
                    <div className="input-col1">
                        <lable className="lable">Address 2</lable>
                        <input
                            className='user-input'
                            type='text'
                            placeholder='Apartment, floor or Road'
                        />
                    </div>
                    <div className="input-col1">
                        <div className="input-col2">
                            <div className="input-col3">
                                <div className="input-col3-inner">
                                    <lable className="lable">City</lable>
                                    <input
                                        className='user-input'
                                        type='text'
                                        placeholder='Your City'
                                    />
                                </div>
                                <div className="input-col3-inner">
                                    <lable className="lable">State</lable>
                                    <input
                                        className='user-input'
                                        type='text'
                                        placeholder='Your state'
                                    />
                                </div>
                                <div className="input-col3-inner">
                                    <lable className="lable">Zip Code</lable>
                                    <input
                                        className='user-input'
                                        type='text'
                                        placeholder='Zip code'
                                    />
                                </div>
                            </div>  {/* class input-col3 */}
                        </div>  {/* class input-col2 */}
                    </div>  {/* class input-col1 */}
                    <div className="input-col1">
                        <lable className="lable">Gender</lable>
                        <div className="input-col2">
                            <input
                                className='user-radio'
                                type='radio'
                                name='gender'
                                id='male'
                                valude='male'
                            />
                            <lable className="lable1">Male</lable>
                            <input
                                className='user-radio'
                                type='radio'
                                name='gender'
                                id='female'
                                valude='female'
                            />
                            <lable className="lable1">Female</lable>
                        </div>  {/* class input-col2 */}
                    </div>  {/* class input-col1 */}
                </div>  {/* class left-side */}
                <div className="right-side">
                    <div className="upload-file">
                        <img
                            src="/image/pic1.jpg"
                            alt=""
                            className="upload-img"
                        />
                        <label htmlFor="file"><Publish className="upload-icon" /></label>
                        <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                        />
                    </div>
                </div>  {/* class right-side */}
            </form>  {/* class userForm */}
            <div className="create-btn">
                <Link to='/'>
                    <Button
                        className='btn'
                        buttonStyle='btn-black-curve'
                        buttonSize='btn-medium'
                    >
                        Create
                    </Button>
                </Link>
            </div> {/* class create-btn */}
        </div> /* class newUser-container */
    );
}

export default CreateAccount;
