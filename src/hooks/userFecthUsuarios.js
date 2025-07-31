import { useState, useEffect } from 'react';
import { gettalluser } from "../api/userApi";   

export const useFetchUsers = () => {
    const [Users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gettalluser()
            .then((res) => setUsers(res.data))
            .catch((err)=> console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return { Users , loading };
};  