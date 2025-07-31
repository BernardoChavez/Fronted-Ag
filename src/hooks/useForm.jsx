import { useState, useCallback } from 'react';

export const useForm = (initialData = {}) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    const handleInputChange = useCallback((e) => {
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
    }, [errors]);

    const validateField = useCallback((name, value, rules) => {
        const fieldErrors = [];
        
        if (rules.required && (!value || value.trim() === '')) {
            fieldErrors.push('Este campo es obligatorio');
        }
        
        if (rules.minLength && value && value.length < rules.minLength) {
            fieldErrors.push(`Mínimo ${rules.minLength} caracteres`);
        }
        
        if (rules.maxLength && value && value.length > rules.maxLength) {
            fieldErrors.push(`Máximo ${rules.maxLength} caracteres`);
        }
        
        if (rules.email && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                fieldErrors.push('Email inválido');
            }
        }
        
        if (rules.phone && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/;
            if (!phoneRegex.test(value)) {
                fieldErrors.push('Teléfono inválido');
            }
        }
        
        if (rules.custom && typeof rules.custom === 'function') {
            const customError = rules.custom(value);
            if (customError) {
                fieldErrors.push(customError);
            }
        }
        
        return fieldErrors.length > 0 ? fieldErrors[0] : '';
    }, []);

    const validateForm = useCallback((validationRules) => {
        const newErrors = {};
        let isValid = true;
        
        Object.keys(validationRules).forEach(fieldName => {
            const fieldValue = formData[fieldName];
            const fieldRules = validationRules[fieldName];
            
            const error = validateField(fieldName, fieldValue, fieldRules);
            if (error) {
                newErrors[fieldName] = error;
                isValid = false;
            }
        });
        
        setErrors(newErrors);
        return isValid;
    }, [formData, validateField]);

    const resetForm = useCallback(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    const setFieldValue = useCallback((name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const setFieldError = useCallback((name, error) => {
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    }, []);

    return {
        formData,
        errors,
        handleInputChange,
        validateForm,
        resetForm,
        setFieldValue,
        setFieldError,
        setFormData,
        setErrors
    };
}; 