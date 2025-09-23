import generateToken from '../config/token.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import user from '../models/user.model.js';


export const sig = (req, res) => {
    res.status(200).json({ message: 'Sig route is working!' });
}
export const signUp= async (req, res) => {
    try {
        const { name, email, userName, password, role} = req.body;
        
        if(!name || !email || !userName || !password){
            return res.status(400).json({ error: 'All fields are required except description and profileURL.' });
        }

        let existingUser = await user.findOne({ $or: [ { email }, { userName } ] });
        if(existingUser){
            return res.status(400).json({ error: 'Email or Username already in use.' });
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({ error: 'Invalid email format.' });
        }
        
        if(password.length < 8 || !/\d/.test(password) || !/[A-Za-z]/.test(password)){
            return res.status(400).json({ error: 'Password must be at least 8 characters long and include at least one letter and one number.' });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await user.create({
            name,
            email,
            userName,
            password: hashedPassword,
            role: role || 'user',
        });
        let userToken = await generateToken(newUser._id );
        res.cookie('token', userToken, {
             httpOnly: true, 
             secure: false,
             sameSite: 'Strict',
             maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        res.status(201).json({ message: 'User registered successfully', token: userToken });

    } catch (error) {
        return res.status(500).json({ error: `Sign up error ! ${error}` });
    }
};


export const logIn = async (req, res) => {
    try {
        const { emailOrUserName, password } = req.body; 
        if(!emailOrUserName || !password){
            return res.status(400).json({ error: 'Both email/username and password are required.' });
        }  
        let existingUser = await user.findOne({ $or: [ { email: emailOrUserName }, { userName: emailOrUserName } ] }).select('+password');
        if(!existingUser){
            return res.status(400).json({ error: 'Invalid email/username or password.' });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid){
            return res.status(400).json({ error: 'Invalid email/username or password.' });
        }
        let userToken = await generateToken({ id: existingUser._id ,email: existingUser.email });
        res.cookie('token', userToken, {
             httpOnly: true, 
             secure: false,
             sameSite: 'Strict',
             maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        res.status(200).json({ message: 'Login successful', token: userToken });
    } catch (error) {
        return res.status(500).json({ error: `Login error ! ${error}` });
    }
};


export const logOut = async (req, res) => {
    try {
        await res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            sameSite: 'Strict',
        });
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        return res.status(500).json({ error: `Logout error ! ${error}` });
    }
}
