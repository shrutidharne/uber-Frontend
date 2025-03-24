import React, { createContext, useState, useEffect  } from 'react'

export const UserDataContext = createContext()


const UserContext = ({ children }) => {
    const storedUser = localStorage.getItem('user');

    const [ user, setUser ] = useState(storedUser ? JSON.parse(storedUser) : {
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });
    useEffect(() => {
        if (user.email) { // Only store if user has an email (i.e., logged in)
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);
    
    return (
        <div>
            <UserDataContext.Provider value={{ user, setUser }}>
                {children}
            </UserDataContext.Provider>
        </div>
    );
};

export default UserContext