import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const setFieldValue = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
    };

    const validateForm = (validationRules) => {
        const newErrors = {};
        
        Object.keys(validationRules).forEach(field => {
            const value = formData[field];
            const rules = validationRules[field];
            
            if (rules.required && !value) {
                newErrors[field] = `${field} es requerido`;
            } else if (rules.email && value && !/\S+@\S+\.\S+/.test(value)) {
                newErrors[field] = 'Email inválido';
            } else if (rules.minLength && value && value.length < rules.minLength) {
                newErrors[field] = `Mínimo ${rules.minLength} caracteres`;
            }
        });
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {
        formData,
        errors,
        handleInputChange,
        setFieldValue,
        resetForm,
        validateForm,
        setErrors
    };
}; 