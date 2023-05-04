
import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import '../../App.css'

export const LoginPage= () => {
      let dataCreate = { email: "", password: "", accept: "" }
      const [showMessage, setShowMessage] = useState(false);
      const [formData, setFormData] = useState(dataCreate);

      const validate = (data: any) => {

            if (!data.email) {
                  dataCreate.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                  dataCreate.email = 'Invalid email address. E.g. example@email.com';
            }

            if (!data.password) {
                  dataCreate.password = 'Password is required.';
            }

            if (!data.accept) {
                  dataCreate.accept = 'You need to agree to the terms and conditions.';
            }

            return dataCreate;
      };

      const onSubmit = ({ data, form }: any) => {
            setFormData(data);
            setShowMessage(true);

            form.restart();
      };

      const isFormFieldValid = (meta: any) => !!(meta.touched && meta.error);
      const getFormErrorMessage = (meta: any) => {
            return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
      };
      const passwordHeader = <h6>Pick a password</h6>;
      const passwordFooter = (
            <React.Fragment>
                  <Divider />
                  <p className="mt-2">Suggestions</p>
                  <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                        <li>At least one lowercase</li>
                        <li>At least one uppercase</li>
                        <li>At least one numeric</li>
                        <li>Minimum 8 characters</li>
                  </ul>
            </React.Fragment>
      );

      return (
            <div className="form-demo">
                  
                  <div className="flex justify-content-center">
                        <div className="card">
                              <h5 className="text-center">Login</h5>
                              <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', date: null, country: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit} className="p-fluid">
                                         
                                          <Field name="email" render={({ input, meta }) => (
                                                <div className="field">
                                                      <span className="p-float-label p-input-icon-right">
                                                            <i className="pi pi-envelope" />
                                                            <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                            <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                                                      </span>
                                                      {getFormErrorMessage(meta)}
                                                </div>
                                          )} />
                                          <Field name="password" render={({ input, meta }) => (
                                                <div className="field">
                                                      <span className="p-float-label">
                                                            <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                                                            <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Password*</label>
                                                      </span>
                                                      {getFormErrorMessage(meta)}
                                                </div>
                                          )} />
                                          
                                          <Button type="submit" label="Submit" className="mt-2" />
                                    </form>
                              )} />
                        </div>
                  </div>
            </div>
      );
}
