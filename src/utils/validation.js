/**
 * Form validation utilities
 */

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate required field
 * @param {string} value - Field value to validate
 * @returns {boolean} - True if field is not empty
 */
export const validateRequired = (value) => {
    return value !== null && value !== undefined && value.trim().length > 0;
};

/**
 * Validate phone number (basic validation)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
    return phoneRegex.test(phone);
};

/**
 * Validate minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum required length
 * @returns {boolean} - True if meets minimum length
 */
export const validateMinLength = (value, minLength) => {
    return value && value.length >= minLength;
};

/**
 * Validate maximum length
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum allowed length
 * @returns {boolean} - True if within maximum length
 */
export const validateMaxLength = (value, maxLength) => {
    return value && value.length <= maxLength;
};

/**
 * Generate validation error message
 * @param {string} field - Field name
 * @param {string} type - Error type
 * @returns {string} - Error message
 */
export const getErrorMessage = (field, type) => {
    const messages = {
        required: `${field} is required`,
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid phone number',
        minLength: `${field} is too short`,
        maxLength: `${field} is too long`
    };
    return messages[type] || `Invalid ${field}`;
};

/**
 * Validate form data
 * @param {Object} data - Form data to validate
 * @param {Object} rules - Validation rules
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export const validateForm = (data, rules) => {
    const errors = {};
    let isValid = true;

    Object.keys(rules).forEach(field => {
        const value = data[field];
        const fieldRules = rules[field];

        if (fieldRules.required && !validateRequired(value)) {
            errors[field] = getErrorMessage(field, 'required');
            isValid = false;
        } else if (value) {
            if (fieldRules.email && !validateEmail(value)) {
                errors[field] = getErrorMessage(field, 'email');
                isValid = false;
            }
            if (fieldRules.phone && !validatePhone(value)) {
                errors[field] = getErrorMessage(field, 'phone');
                isValid = false;
            }
            if (fieldRules.minLength && !validateMinLength(value, fieldRules.minLength)) {
                errors[field] = getErrorMessage(field, 'minLength');
                isValid = false;
            }
            if (fieldRules.maxLength && !validateMaxLength(value, fieldRules.maxLength)) {
                errors[field] = getErrorMessage(field, 'maxLength');
                isValid = false;
            }
        }
    });

    return { isValid, errors };
};
