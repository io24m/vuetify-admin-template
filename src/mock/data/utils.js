export function okJson(result = {}) {
  return {
    success: true,
    result,
  };
}

export function failJson(message, result = {}) {
  return {
    success: false,
    result,
    message,
  };
}

export function notAuthJson() {
  return {
    code: 401,
  };
}