import { useState } from 'react';

/**
 * useForm — generic form state + validation helper.
 * @param {Object} initial - initial form values
 * @param {Function} validate - (values) => { field: 'error msg' }
 * @returns { values, errors, touched, handleChange, handleBlur, validateAll, resetForm }
 */
export default function useForm(initial, validate = () => ({})) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const next = { ...values, [name]: type === 'checkbox' ? checked : value };
    setValues(next);
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  const validateAll = () => {
    const allErrors = validate(values);
    setErrors(allErrors);
    setTouched(Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {}));
    return Object.values(allErrors).every((v) => !v);
  };

  const resetForm = () => {
    setValues(initial);
    setErrors({});
    setTouched({});
  };

  return { values, errors, touched, handleChange, handleBlur, validateAll, resetForm, setValues };
}
