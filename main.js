//  const newTag = document.createElement("h1")


//  const newLink = document.createElement("img")
//  newLink.src = "https://avatars.mds.yandex.net/i?id=51acf52d2e4e21e5c70b5eb40ab90399_l-12528217-images-thumbs&n=13"
//  document.body.append(newLink)
//  newLink.width = 800
//  newLink.height = 700



// const newt  = prompt("Ismingizni kiriting")
// const newfam  = prompt("Familiyangizni kiriting")
// const newage  = +prompt("Yoshingizni kiriting")

// const nameNam = document.createElement("p");
// nameNam.textContent = `Ism: ${newt}`;

// const namefam = document.createElement("p");
// namefam.textContent = `Familiya: ${newfam}`;

// const nameage = document.createElement("p");
// nameage.textContent = `Yosh: ${newage}`;

// document.body.append(nameNam)
// document.body.append(namefam)
// document.body.append(nameage)



const nam = prompt("Ismingizni kiriting")
const na = prompt("Familiyangizni kiriting")
const namea = +prompt("Yoshingizni kiriting")


const result = document.createElement("div");
const resul = document.createElement("box");
const resu = document.createElement("box2");



result.textContent = nam;
resul.textContent = na;
resu.textContent = namea;


const javob = document.createElement("p")
javob.textContent = `ism: ${nam}`

const fam = document.createElement("p")
fam.textContent = `Familiya: ${na}`

const yosh = document.createElement("p")
yosh.textContent = `Yosh: ${namea}`


document.body.append(javob)
document.body.append(fam)
document.body.append(yosh)


const kattaKichik = prompt("Ismingiz katta harf yoki kichikligini tanlang:\n1) Katta\n2) Kichik");

if (kattaKichik === "1") {
    javob.textContent = `Ism: ${nam.toUpperCase()}`;
    fam.textContent = `Familiya: ${na.toUpperCase()}`;
    alert("Ismingiz va familiyangiz katta harflarda bo'ladi");
} else if (kattaKichik === "2") {
    javob.textContent = `Ism: ${nam.toLowerCase()}`;
    fam.textContent = `Familiya: ${na.toLowerCase()}`;
    alert("Ismingiz va familiyangiz kichik harflarda bo'ladi");
} else {
    alert("Noto'g'ri tanlov.");
}
