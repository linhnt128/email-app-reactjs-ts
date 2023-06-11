import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import logo from "../../assets/images/connect-logo-black.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/context/UserContext";


interface IUserForm {
    email: string;
    password: string;
};

interface IMyProps {
    setUserAuth: (value: boolean) => void;
};






// -----------------------------------------main code starts here----------------------------------------------------------
const LogInForm = (props: IMyProps) => {
    const { setUserAuth } = props;
    const userDatas  = useContext(UserContext);
    const navigate = useNavigate();


    const [errorBorder, setErrorBorder] = useState<boolean>(false);


    const initialValues = {
        email: "",
        password: userDatas[0].password
    };

    

    const handleValidate = (values: IUserForm) => {
        if(values.email == "" || values.password !== userDatas[0].password) {
            setErrorBorder(true);
            // setUserAuth(false);
            return {
                password: "Wrong email or password !!"
            };
        } 
        // else {
        //     setUserAuth(true);
        // }
    };



    const handleSubmit = (values: IUserForm, formikHelpers: FormikHelpers<IUserForm>) => {
        formikHelpers.setSubmitting(false);
        formikHelpers.resetForm();
        if(values) {
            setUserAuth(true);
            navigate("/main/email");
        } else {
            setUserAuth(false);
            navigate("/login");
        }
    };


    return(
        <div className="flex items-center justify-center h-screen bg-midnight">
            <div className="container mx-auto">
                <div className="w-4/12 mx-auto">
                    <div className="w-full h-auto py-5 px-5 bg-white rounded-lg p-8 text-center">
                        <img className="w-64 h-23 mx-auto mt-5" src={logo} alt="logo" />
                        <p className="mt-4 text-black font-normal text-xl">Login to check your email!!</p>
                        <Formik
                            initialValues={initialValues}
                            validate={handleValidate}
                            onSubmit={handleSubmit}
                        >
                            <Form className="" action="" method="" autoComplete="off">
                                <div className="flex flex-col items-center justify-center py-5 px-5">
                                    <label className="mt-3 font-semibold text-xl text-black self-start" htmlFor="email">
                                        Email
                                    </label>
                                    <Field
                                        name="email"
                                        as="select"
                                        className="mt-3 w-full rounded-lg py-3 px-3 bg-white font-semibold border-solid border border-black" 
                                        id="email"
                                        >
                                            <option className="text-black font-semibold" value="">------Choose an email</option>
                                            <option className="text-black font-semibold pt-2" value={userDatas[0].email}>{userDatas[0].email}</option>
                                    </Field>
                                    <label className="mt-3 font-semibold text-xl text-black self-start" htmlFor="password">
                                        Password
                                    </label>
                                    <Field
                                        className={`mt-3 w-full rounded-lg py-3 px-3 bg-white font-semibold border-solid border 
                                        ${errorBorder ? 'border-errMessage' : 'border-black'} focus:border-2`}
                                        type="password" 
                                        name="password"
                                    >
                                    </Field>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-errMessage self-start mt-2 font-semibold"
                                    />
                                </div>
                                <div className="flex items-center justify-center py-5 px-5">
                                    <button 
                                        type="submit" 
                                        className="w-full rounded py-3 px-3 bg-midnight text-white font-semibold"
                                    >
                                        Login
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default React.memo(LogInForm);