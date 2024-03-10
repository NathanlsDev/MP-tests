const newCourier = document.querySelector('[data-script="add-motoboy"]');
const newCourierForm = document.querySelector('[data-script="open-form"]');
const closeCourierForm = document.querySelector('[data-script="close-form"]');
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

newCourier.addEventListener("click", () => {
  newCourierForm.style.display = "flex";
});

closeCourierForm.addEventListener("click", () => {
  newCourierForm.style.display = "none";
});

inputImage.addEventListener("change", (event) => {
  const target = event.target;
  const files = target.files;
  const fileReader = new FileReader();

  fileReader.onload = () => (image.src = fileReader.result);

  fileReader.readAsDataURL(files[0]);
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
