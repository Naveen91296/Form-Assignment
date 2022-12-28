export const validation = (data) => {
  const err = {};

  if(!data.mobileNumber)
  {
    err.mobileNumber = "**Mobile Number field should not be empty"
  }
  else if(!data.mobileNumber.match(/^[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/)){
    err.mobileNumber = "**Mobile Number should start with numbers(6-9) and it should have 10 digits"

  }
  if(!data.accept){
    err.accept = "**Accept terms and conditions"
  }

  return err;
}