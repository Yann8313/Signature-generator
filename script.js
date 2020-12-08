/*Adress */
const adressList = document.getElementById("adressList");
const adress = document.getElementById("adress");

const updateValueAdress = () => {
  const textAdress = adressList.options[adressList.selectedIndex];
  adress.textContent = textAdress.text;
};

adressList.addEventListener("change", updateValueAdress);

/* Name */
const inputName = document.getElementById("name");
const userName = document.getElementById("userName");

const updateValueName = (e) => {
  userName.textContent = e.target.value;
};

inputName.addEventListener("input", updateValueName);

/* Phone */
const userPhone = document.getElementById("phoneNumber");
const inputPhone = document.getElementById("phone");

const updateValuePhone = (e) => {
  userPhone.textContent = e.target.value;
};

inputPhone.addEventListener("input", updateValuePhone);


/* Title */
const userTitle = document.getElementById("userTitle");
const inputTitle = document.getElementById("title");

const updateValueTitle = (e) => {
  userTitle.textContent = e.target.value;
};

inputTitle.addEventListener("input", updateValueTitle);