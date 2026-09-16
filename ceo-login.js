// JEN FLASH BUILDER HQ - CEO GOD MODE
// CEO: Emmanuel Jacob Ngbede

function checkGODMODE(fullname, email, phone) {
  const isCEO = fullname.toLowerCase().includes("emmanuel jacob ngbede") && email.toLowerCase() === "emmanueljacobngbede@gmail.com" && phone === "07031890429";
  if (isCEO) {
    localStorage.setItem("jen_user_role", "CEO_GOD_MODE");
    localStorage.setItem("jen_tokens", "999999");
    return { role: "CEO", godMode: true, tokens: 999999 };
  } else {
    return { role: "USER", godMode: false, tokens: 50 };
  }
}

function ceoLogin() {
  const fn = document.getElementById('n').value;
  const em = document.getElementById('e').value;
  const ph = document.getElementById('p').value;
  const result = checkGODMODE(fn, em, ph);
  if (result.godMode) {
    alert("GOD MODE UNLOCKED - CEO Emmanuel - 999999 Tokens");
    window.location.href = "builder.html";
  } else {
    alert("User - 50 Tokens Added");
  }
}
