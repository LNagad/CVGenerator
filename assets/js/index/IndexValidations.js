const inputSummary = document.getElementById('Summary')
const inputName = document.getElementById('Name')
const inputAddress = document.getElementById('Address')
const inputEmail = document.getElementById('Email')
const inputPhone = document.getElementById('Phone')
const inputWebsite = document.getElementById('Website')
const inputLanguages = document.getElementById('Languages')
const inputJobs = document.getElementById('Jobs')
const inputEducation = document.getElementById('Education')
const inputSkill = document.getElementById('Skill')
const inputCertifications = document.getElementById('Certifications')
const CVContainer = document.getElementById('CVContainer');

function validate() {
    const SummaryValue = inputSummary.value;
    const nameValue = inputName.value;
    const AddressValue = inputAddress.value;
    const EmailValue = inputEmail.value;
    const PhoneValue = inputPhone.value;
    const WebsiteValue = inputWebsite.value;
    const LanguagesValue = inputLanguages.value;
    const JobsValue = inputJobs.value;
    const EducationValue = inputEducation.value;
    const SkillValue = inputSkill.value;
    const CertificationsValue = inputCertifications.value;

    let isValid = true;

    isValid = inputValidator(inputSummary, SummaryValue, isValid);
    isValid = inputValidator(inputName, nameValue, isValid);
    isValid = inputValidator(inputAddress, AddressValue, isValid);
    isValid = inputValidator(inputEmail, EmailValue, isValid);
    isValid = inputValidator(inputPhone, PhoneValue, isValid);
    isValid = inputValidator(inputWebsite, WebsiteValue, isValid);
    isValid = inputValidator(inputLanguages, LanguagesValue, isValid);
    isValid = inputValidator(inputJobs, JobsValue, isValid);
    isValid = inputValidator(inputEducation, EducationValue, isValid);
    isValid = inputValidator(inputSkill, SkillValue, isValid);
    isValid = inputValidator(inputCertifications, CertificationsValue, isValid);

    if (isValid) {
        return true;
    } else {
        return false;
    }
}

function inputValidator(input, value, isValid) {
    const fatherContainer = input.parentNode;

    if (value == "" || value == null || value == undefined) {

        input.classList.add('class', 'errorBorder');
        input.classList.remove('class', 'successBorder');

        const errorP = document.createElement('p');
        errorP.innerText = 'This field is required';
        errorP.setAttribute('class', 'text-danger');

        if (fatherContainer.lastChild.textContent != 'This field is required') {
            fatherContainer.appendChild(errorP);
        }

        return false;

    } else {
        input.classList.add('class', 'successBorder');
        input.classList.remove('class', 'errorBorder');

        if (fatherContainer.lastChild.textContent == 'This field is required') {
            fatherContainer.removeChild(fatherContainer.lastChild);
        }

        if (!isValid) {
            return false;

        } else {
            return true;
        }
    }
}

function clearElement() {
    if (CVContainer.children.length > 0) { //remove children from container if there's one children already
        CVContainer.removeChild(CVContainer.children[0])
    }
}
function textToElements(text, list, className) {

    text.replace(/\s/g, '');

    const elementsList = text.split(',');

    elementsList.forEach(element => {
        const creation = document.createElement('li')

        creation.setAttribute('class', 'text-capitalize');

        if (className) {
            creation.classList.add('text-capitalize', 'mb-3', 'list-itemX')
        }

        creation.innerText = element;

        list.push(creation)
    });
}

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
}