const Users = require('../schemas/users-schema');

const getUserData = async () => {
  try {
    const users = await Users.find();
    console.log('All Users:', users);
    return users;
  } catch (error) {
    console.error(error);
   
  }
}

const addUser = async (userData) => {
  try {
    const insertResult = await Users.insertMany(userData);
    console.log(insertResult);
    return insertResult;
  } catch (err) {
    console.log(err);
   
  }
}

const loginUserdata = async (userData) => {
    try {
        // Hash the input password using MD5
        const {email, password} = userData;
        const hashedPassword = md5(password);

        // Find user with email and hashed password
        const user = await Users.findOne({ email, password: hashedPassword });
        if (!user) {
            return { success: false, message: 'Invalid email or password' };
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return { success: true, message: 'Login successful', token };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Server error' };
    }
}

module.exports = { getUserData, loginUserdata, addUser };