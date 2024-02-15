document.getElementById("Email").addEventListener("change", (event) => {
    window.alert(`Email: ${event.target.value}`);});
document.getElementById("Password").addEventListener("change", (event) => {
    window.alert(`Password: ${event.target.value}`);});
document.getElementById("phone").addEventListener("change", (event) => {
    window.alert(`phone: ${event.target.value}`);});
document.getElementById("country").addEventListener("change", (event) => {
    window.alert(`country: ${event.target.value}`);});
document.getElementById("submit").addEventListener("click", (event) => {
    console.log(`Email is : ${document.getElementById("Email").value}/n +P${document.getElementById("Password").value}+${document.getElementById("phone").value}`)});