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

function generateCV() {

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

    if (validate()) {

        const LanguagesListHtmlItems = [];

        if (CVContainer.children.length > 0) {
            CVContainer.removeChild(CVContainer.children[0])
        }

        const CVCol12 = document.createElement('div');
        CVCol12.setAttribute('class', 'col-12 col-sm-12 col-md-8 offset-md-2')

        const CVsidesContainer = document.createElement('div');
        CVsidesContainer.setAttribute('class', 'd-flex sidesContainer')
        
        // -------------------LEFT SIDE CV

        const CVLeftSide = document.createElement('div');
        CVLeftSide.setAttribute('class', 'w-25 CVLeftSide border border-2 bg-white')

        const CVLeftSideTitle = document.createElement('div');
        CVLeftSideTitle.setAttribute('class', 'CVTitle');
        const CVLeftSideSpaceBG = document.createElement('div');
        CVLeftSideSpaceBG.setAttribute('class', 'titleSpace mb-1');
        const CVLeftSideH3 = document.createElement('h3');
        CVLeftSideH3.setAttribute('class', 'colorTitles text-uppercase fw-bold p-4 border-0');
        CVLeftSideH3.innerText = nameValue;
        // -------------- Contact
        const CVLeftSideContact = document.createElement('div');
        CVLeftSideContact.setAttribute('class', 'CVContact p-4');
        const CVLeftSideContactH4 = document.createElement('h4');
        CVLeftSideContactH4.setAttribute('class', 'colorTitles mb-3 fw-bold');
        CVLeftSideContactH4.innerText= 'Contact';
        
        const ContactAddress = document.createElement('div');
        ContactAddress.setAttribute('class', 'mb-4');
        const ContactAddressH6 = document.createElement('h6');
        ContactAddressH6.innerText = 'Address';
        const ContactAddressP = document.createElement('p');
        ContactAddressP.innerText = AddressValue;
        
        const ContactPhone = document.createElement('div');
        ContactPhone.setAttribute('class', 'mb-4');
        const ContactPhoneH6 = document.createElement('h6');
        ContactPhoneH6.innerText = 'Phone';
        const ContactPhoneP = document.createElement('p');
        ContactPhoneP.innerText = PhoneValue;

        const ContactEmail = document.createElement('div');
        ContactEmail.setAttribute('class', 'mb-4');
        const ContactEmailH6 = document.createElement('h6');
        ContactEmailH6.innerText = 'Email';
        const ContactEmailP = document.createElement('p');
        ContactEmailP.innerText = EmailValue;

        const ContactWebsite = document.createElement('div');
        ContactWebsite.setAttribute('class', 'mb-4');
        const ContactWebsiteH6 = document.createElement('h6');
        ContactWebsiteH6.innerText = 'Website';
        const ContactWebsiteP = document.createElement('p');
        ContactWebsiteP.innerText = WebsiteValue;
        
        //languages

        const CVLeftSideLanguages = document.createElement('div');
        CVLeftSideLanguages.setAttribute('class', 'CVLanguages p-4');

        const languagesH4 = document.createElement('h4');
        languagesH4.setAttribute('class', 'colorTitles mb-3 fw-bold');
        languagesH4.innerText = 'Languages';

        const languagesListContainer = document.createElement('div');
        languagesListContainer.setAttribute('class', 'mb-4');

        const languagesUL= document.createElement('ul');
        languagesUL.setAttribute('class', 'list-group list-group-flush');

        LanguagesValue.replace(/\s/g,'');
        const LanguagesList = LanguagesValue.split(',')
       

        LanguagesList.forEach(element => {
            const creation = document.createElement('li')
            creation.setAttribute('class', 'text-capitalize');
            creation.innerText = element;

            LanguagesListHtmlItems.push(creation)
        });


        // -------------------RIGHT SIDE CV



        // ----------------------------- nodes merging

        CVCol12.appendChild(CVsidesContainer)
        CVsidesContainer.appendChild(CVLeftSide)
        
        // left side
        CVLeftSide.appendChild(CVLeftSideTitle)
        CVLeftSide.appendChild(CVLeftSideContact)
        CVLeftSide.appendChild(CVLeftSideLanguages)
        // left side title
        CVLeftSideTitle.appendChild(CVLeftSideSpaceBG)
        CVLeftSideTitle.appendChild(CVLeftSideH3)
        // left side contact
        CVLeftSideContact.appendChild(CVLeftSideContactH4)
        CVLeftSideContact.appendChild(ContactAddress)
        CVLeftSideContact.appendChild(ContactPhone)
        CVLeftSideContact.appendChild(ContactEmail)
        CVLeftSideContact.appendChild(ContactWebsite)

        ContactAddress.appendChild(ContactAddressH6)
        ContactAddress.appendChild(ContactAddressP)

        ContactPhone.appendChild(ContactPhoneH6)
        ContactPhone.appendChild(ContactPhoneP)

        ContactEmail.appendChild(ContactEmailH6)
        ContactEmail.appendChild(ContactEmailP)

        ContactWebsite.appendChild(ContactWebsiteH6)
        ContactWebsite.appendChild(ContactWebsiteP)

        // left side languages
        CVLeftSideLanguages.appendChild(languagesH4)
        CVLeftSideLanguages.appendChild(languagesListContainer)
        languagesListContainer.appendChild(languagesUL)
        
        LanguagesListHtmlItems.forEach(e => {
            languagesUL.appendChild(e)
        })
        
        CVContainer.appendChild(CVCol12)

      
        
        
// let text = 'english, spanish, corean';

// const listX = text.split(',')
// .replace(/\s/g,'')

        // const languagesListContainer = document.createElement('li');
        
        // const languagesListContainer = document.createElement('li');
        
        // const languagesListContainer = document.createElement('li');
        
        
    }

}