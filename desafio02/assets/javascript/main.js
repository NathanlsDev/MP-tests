const newDeliveryman = document.querySelector('[data-script="add-motoboy"]');
const newDeliverymanForm = document.querySelector('[data-script="open-form"]');
const closeDeliverymanForm = document.querySelector(
  '[data-script="close-form"]'
);
const inputImage = document.querySelector('[data-script="input-image"]');
const image = document.querySelector('[data-script="profile-image"]');
const save = document.querySelector('[data-script="save"]');
const edit = document.querySelector('[data-script="edit"]');
const remove = document.querySelector('[data-script="remove"]');
const popUp = document.querySelector('[data-script="popUp"]');
const cancelExclusion = document.querySelector('[data-script="cancel"]');
const confirmExclusion = document.querySelector('[data-script="confirm"]');
const accept = document.querySelector('[data-script="popUp-confirmation"]');
const finalization = document.querySelector('[data-script="closeAlert"]');
const submit = document.querySelector('[data-script="submit"]');
const deliverymanList = document.querySelector('[data-script="motoboys-list"]');
const cardImage = document.querySelector('[data-script="card-image"]');
const cardTitle = document.querySelector('[data-script="card-title"]');
const cardPlate = document.querySelector('[data-script="card-plate"]');
const cardPhone = document.querySelector('[data-script="card-phone"]');
const cardMail = document.querySelector('[data-script="card-mail"]');
const form = document.querySelector("form");
const deliverymans = [];
let newImg = "";

newDeliveryman.addEventListener("click", () => {
  newDeliverymanForm.style.display = "flex";
});

closeDeliverymanForm.addEventListener("click", () => {
  newDeliverymanForm.style.display = "none";
});

inputImage.addEventListener("change", (event) => {
  const target = event.target;
  const files = target.files;
  const fileReader = new FileReader();

  fileReader.onload = () => {
    newImg = image.src = fileReader.result;
  };

  fileReader.readAsDataURL(files[0]);
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const deliverymanName = document.querySelector("#name").value;
  const bikePlate = document.querySelector("#car-plate").value;
  const phone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;

  const deliverymanData = {
    photo: newImg,
    name: deliverymanName,
    plate: bikePlate,
    phone: phone,
    email: email,
  };

  deliverymans.push(deliverymanData);

  deliverymanList.innerHTML += `
    <li class="motoboy" tabindex="0">
      <figure class="motoboy-avatar-container">
        <img src=${newImg} alt=${deliverymanName + " avatar"} />
      </figure>
      ${deliverymanName}
    </li>
  `;

  form.reset();
  image.src = "assets/img/avatar_profile.webp";
});

deliverymanList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const index = [...event.target.parentNode.children].indexOf(event.target);
    const deliveryman = deliverymans[index];
    cardImage.src = deliveryman.photo;
    cardTitle.textContent = deliveryman.name;
    cardPlate.textContent = deliveryman.plate;
    cardPhone.textContent = deliveryman.phone;
    cardMail.textContent = deliveryman.email;
  }
});

edit.addEventListener("click", () => {
  save.style.display = "block";
});

save.addEventListener("click", () => {
  save.style.display = "none";
});

remove.addEventListener("click", () => {
  popUp.style.display = "flex";
});

cancelExclusion.addEventListener("click", () => {
  popUp.style.display = "none";
});

confirmExclusion.addEventListener("click", () => {
  accept.style.display = "flex";
});

finalization.addEventListener("click", () => {
  accept.style.display = "none";
  popUp.style.display = "none";
});
