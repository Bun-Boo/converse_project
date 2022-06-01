const btnOther = document.querySelectorAll(".btn-add button");
// console.log(btnOther);

btnOther.forEach((button, index) => {
  //   console.log(button, index);
  button.addEventListener("click", (event) => {
    let btnItem = event.target;
    let product = btnItem.parentElement.parentElement;
    let productImg = product.querySelector(".other-img img").src;
    let productName = product.querySelector(".other-name span").innerText;
    let productPrice = product.querySelector(".other-price span").innerText;
    addCart(productImg, productName, productPrice);
    numberShopping();
  });
});
function numberShopping() {
  const cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    const tolalPro = document.querySelector(".total-product");
    // let inputValue = cartItem[i].querySelector("input").value;
    tolalPro.innerHTML = i + 1;
  }
}
//-------------Them san pham ---------------//
function addCart(productImg, productName, productPrice) {
  let addEletr = document.createElement("tr");
  const cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    let productlistName = document.querySelectorAll(".title");
    if (productlistName[i].innerHTML == productName) {
      alert("Sản phẩm đã tồn tại ! Vui lòng chọn số lượng sản phẩm");
      return;
    }
  }

  let trContent =
    '<tr><td class="cart-img"><img src="' +
    productImg +
    '" alt="" /><span class = "title">' +
    productName +
    '</span></td><td><span class="product-price">' +
    productPrice +
    '</span><sup>đ</sup></td><td class="cart-input"><input type="number" name="" id="num" value="1" min="1" /></td><td class="option">Xóa</td></tr>';
  addEletr.innerHTML = trContent;
  let cartBody = document.querySelector("tbody");
  cartBody.append(addEletr);
  totalCart();
  deleteCart();
}
//----------------Xoa SP ----------------//
function deleteCart() {
  const cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    const cartOption = document.querySelectorAll(".option");
    cartOption[i].addEventListener("click", (event) => {
      let cartDelete = event.target;
      let cartPar = cartDelete.parentElement;
      cartPar.remove();
      totalCart();
      numberShopping();
    });
  }
}

//-----------------Tinh tien-------------//
function totalCart() {
  const cartItem = document.querySelectorAll("tbody tr");
  let allTotal = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let inputValue = cartItem[i].querySelector("input").value;
    let productPrice = cartItem[i].querySelector(".product-price").innerHTML;
    let price_str = productPrice.replace(/[^0-9]/g, "");
    total = inputValue * price_str;
    allTotal += total;
  }
  let cart = document.querySelector(".price-total span");
  cart.innerHTML = allTotal.toLocaleString("de-DE");
  const tolalPro = document.querySelector(".total-product");
  tolalPro.innerHTML = 0;
  inputChange();
}

//---------------thay doi so luong------------//
function inputChange() {
  const cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    const inputValue = cartItem[i].querySelector("input");
    inputValue.addEventListener("change", () => {
      totalCart();
    });
    numberShopping();
  }
}
//----------------- click cart---------//
const cartShopping = document.querySelector(".fa-bag-shopping");
const cartPay = document.querySelector(".container-cart");
const closeEle = document.querySelector(".fa-xmark");
const continueEle = document.querySelector(".continue-see");

cartShopping.addEventListener("click", () => {
  cartPay.classList.add("active");
});
closeEle.addEventListener("click", () => {
  cartPay.classList.remove("active");
});
continueEle.addEventListener("click", (e) => {
  e.preventDefault();
  cartPay.classList.remove("active");
});
//validate
const userName = document.getElementById("username");
const address = document.getElementById("address");
const city = document.getElementById("city");
const numberPhone = document.getElementById("numberphone");
const email = document.getElementById("email");
const note = document.getElementById("note");

function checkName() {
  const errorname = document.getElementById("errorName");
  const regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
  userName.addEventListener("blur", () => {
    if (userName.value == "" || userName.value == null) {
      errorname.innerHTML = "Họ tên không được để trống !";
    } else if (!regexName.test(userName.value)) {
      errorname.innerHTML = "Họ tên không hợp lệ !";
    } else {
      errorname.innerText = "";
      return userName.value;
    }
  });
}
checkName();

function checkAdress() {
  const errorAddress = document.getElementById("errorAddress");
  const regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
  address.addEventListener("blur", () => {
    if (address.value == "" || address.value == null) {
      errorAddress.innerHTML = "Địa chỉ không được để trống !";
    } else if (!regexName.test(address.value)) {
      errorAddress.innerHTML = "Địa chỉ không hợp lệ !";
    } else {
      errorAddress.innerText = "";
      return address.value;
    }
  });
}
checkAdress();

function checkCity() {
  const errorCity = document.getElementById("errorCity");
  const regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
  city.addEventListener("blur", () => {
    if (city.value == "" || city.value == null) {
      errorCity.innerHTML = "Thành phố không được để trống !";
    } else if (!regexName.test(city.value)) {
      errorCity.innerHTML = "Thành phố không hợp lệ !";
    } else {
      errorCity.innerText = "";
      return city.value;
    }
  });
}
checkCity();

function checkNumberPhone() {
  const errorSdt = document.getElementById("errorSdt");
  const regexNum = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  numberPhone.addEventListener("blur", () => {
    if (numberPhone.value == "" || numberPhone.value == null) {
      errorSdt.innerHTML = "Số điện thoại không được để trống !";
    } else if (!regexNum.test(numberPhone.value)) {
      errorSdt.innerHTML = "Số điện thoại không hợp lệ !";
    } else {
      errorSdt.innerText = "";
      return numberPhone.value;
    }
  });
}
checkNumberPhone();
function checkEmail() {
  const errorEmail = document.getElementById("errorEmail");
  const regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  email.addEventListener("blur", () => {
    if (email.value == "" || email.value == null) {
      errorEmail.innerHTML = "Email không được để trống !";
    } else if (!regexEmail.test(email.value)) {
      errorEmail.innerHTML = "Email không hợp lệ !";
    } else {
      errorEmail.innerText = "";
      return email.value;
    }
  });
}
checkEmail();

const payEle = document.querySelector(".pay");
payEle.addEventListener("click", (e) => {
  e.preventDefault();
  let product = {
    user: userName.value,
    address: address.value,
    city: city.value,
    numberPhone: numberPhone.value,
    email: email.value,
    note: note.value,
  };
  const json = JSON.stringify(product);
  if (
    product.user != "" &&
    product.address != "" &&
    product.city != "" &&
    product.numberPhone != "" &&
    product.email != ""
  ) {
    localStorage.setItem("customer information", json);
    alert("Đã lưu thông tin thanh toán");
  } else {
    alert("Vui lòng nhập đầy đủ thông tin !");
  }
});
