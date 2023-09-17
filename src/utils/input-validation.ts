const checkInputValidity = (inputFields: object, errors: object) => {
  const userInfoFields = Object.values(inputFields);
  const errorsFields = Object.values(errors);

  const userInfoPopulated = userInfoFields.every((value) => value !== '');
  const errorsEmpty = errorsFields.length === 0;

  return userInfoPopulated && errorsEmpty;
};
export { checkInputValidity };
