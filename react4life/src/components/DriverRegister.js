import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class DriverRegister extends React.Component {
  render() {
      return (
          <Formik
              initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  username: '',
                  password: '',
                  confirmPassword: '',
                  phone: ''
              }}
              validationSchema={Yup.object().shape({
                  firstName: Yup.string()
                      .required('First Name is required'),
                  lastName: Yup.string()
                      .required('Last Name is required'),
                  email: Yup.string()
                      .email('Email is invalid')
                      .required('Email is required'),
                  username: Yup.string()
                      .required('Username is required'),
                  password: Yup.string()
                      .min(6, 'Password must be at least 6 characters')
                      .required('Password is required'),
                  confirmPassword:  Yup.string()
                      .oneOf([Yup.ref('password'), null], 'Passwords must match')
                      .required('Confirm Password is required'),
                  phone: Yup.string()
                      .required('Phone Number is required')
              })}
              onSubmit={fields => {
                  alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
              }}
              render={({ errors, status, touched }) => (
                  <Form>
                      <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                          <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                          <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                          <ErrorMessage name="username" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                          <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <Field name="phone" type="text" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                          <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <button type="submit" className="btn btn-primary mr-2">Register</button>
                          <button type="reset" className="btn btn-secondary">Already have an account?</button>
                      </div>
                  </Form>
              )}
          />
      )
  }
}

export default {DriverRegister};


