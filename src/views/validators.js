export const validateName = name => {
    if (!name.length) {
      return { valid: false, error: 'This field is required' };
    }
    return { valid: true, error: null }
  };
export const validatePassword = password => {
    if (!password.length) {
        return { valid: false, error: 'This field is required' }
    }
    if (password.length < 7) {
        return { valid: false, error: "Password is too short" };
    }
    
}