import { useState, useEffect } from 'react';
import { gettallservicios } from "../api/servicioApi";

export const useFetchServicios = () => {
    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gettallservicios()
            .then((res)  => {
                console.log('full response servicios', res);
                console.log('res.data', res.data);
                setServicios(res.data);
            })
            .catch((err)=> console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return { servicios, loading };
};  