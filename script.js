
/*Adress */ 
const adressList = document.getElementById("adressList");
const adress = document.getElementById('adress')


const updateValueAdress = (e) => {
  adress.textContent = e.target.value;
};

adressList.addEventListener("change", updateValueAdress);


/* Name */ 
const inputName = document.getElementById("name");
const userName = document.getElementById("userName");

const updateValueName = (e) => {
  userName.textContent = e.target.value;
};

inputName.addEventListener("input", updateValueName);
