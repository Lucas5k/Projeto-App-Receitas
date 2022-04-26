export default function saveEmail(email) {
  localStorage.setItem('user', JSON.stringify({ email }));
}
