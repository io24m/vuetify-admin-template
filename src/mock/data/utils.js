export function okJsonify(result = {}) {
  return {
    success: true,
    result,
  };
}

export function failJsonify(message, result = {}) {
  return {
    success: false,
    result,
    message,
  };
}