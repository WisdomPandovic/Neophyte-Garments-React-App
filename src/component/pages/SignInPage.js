import React, { useState, useContext } from 'react'; 
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';
import { NeophyteContext } from "../Context/NeophyteContext";

function SignInPage() {

    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(NeophyteContext);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    const errors = {};
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
        errors.password = 'Password is required';
    }
    setErrors(errors);
    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
        try {
            setLoading(true);
            // Make API request to sign in
            const response = await fetch('http://159.65.21.42:9000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to sign in');
            }
            // Handle successful sign in
            console.log('Sign in successful');
            const resp = await response.json();
            console.log(resp); // Log the response data
            localStorage.setItem('Neophyte_USER', JSON.stringify(resp));
            setIsLoggedIn(true);
            let rawData = localStorage.getItem("Neophyte_USER");
            let localData = JSON.parse(rawData);
            setLoading(false);
            navigate('/');
        } catch (error) {
            console.error('Sign in error:', error);
            setLoading(false);
            // Handle the error (e.g., display a notification to the user)
        }
    }
};


    return (
        <div>
            <NavBar/>
            <div className="container mt-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 border rounded p-4 mt-5">
                        <div className="pt-5">
                            <div className="signup-1">
                                <div className="signin-1 pb-3">SIGN IN TO YOUR ACCOUNT</div>
                                <div className="signin-2 pb-3">If you already have a RIMOWA account, please sign in. We'll use your existing details for a speedier checkout.</div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input type="text" name="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} className="form-control" required />
                                        {errors.email && <div className="error">{errors.email}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name="password" placeholder="Password*" value={formData.password} onChange={handleChange} className="form-control" required />
                                        {errors.password && <div className="error">{errors.password}</div>}
                                    </div>
                                    <div className="errr" id="errr_msgs"></div>
                                    <div className="text-center signup-1 d-flex justify-content-between">
                                        <button type="submit" className="btn btn-primary signin-btn" disabled={loading}>SIGN IN</button>
                                        <div className="fp"><p>Forgotten your password?</p></div>
                                    </div>
                                </form>
                            </div>

                            <div className="signup-1 mt-3">
                                <div className="signin-1">DON'T HAVE AN ACCOUNT</div>
                                <div className="signin-3">
                                    <p>ENJOY A FASTER CHECK OUT EXPERIENCE, STORE YOUR SHOPPING DETAILS, EASILY ENJOY YOUR RIMOWA LIFETIME GUARANTEE, TRACK YOUR ORDERS, AND PROCESS YOUR RETURNS ENTIRELY ONLINE WHEN YOU CREATE YOUR RIMOWA ACCOUNT.</p>
                                </div>
                                <a href="SignUpPage">CREATE ACCOUNT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default SignInPage;