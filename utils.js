export const getAge = (birthday = '3/14/2000') => {
  const birthDate = new Date(birthday)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()

  // reduce by one if birthday hasn't passed yet this year
  const beforeBirthMonth = today.getMonth() < birthDate.getMonth()
  const sameMonthButBeforeDay = today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()
  if (beforeBirthMonth || sameMonthButBeforeDay) age--

  return age
}
