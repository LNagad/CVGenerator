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
    const JobsListHtmlItems = [];
    const EducationListHtmlItems = [];
    const SkillsListHtmlItems = [];
    const CertificationsListHtmlItems = [];

    if (CVContainer.children.length > 0) {
      //remove children from container if there's one children already
      CVContainer.removeChild(CVContainer.children[0]);
    }

    const CVCol12 = document.createElement("div");
    CVCol12.setAttribute("class", "col-12 col-sm-12 col-md-8 offset-md-2");

    const CVsidesContainer = document.createElement("div");
    CVsidesContainer.setAttribute("class", "d-flex sidesContainer");

    // -------------------LEFT SIDE CV

    const CVLeftSide = document.createElement("div");
    CVLeftSide.setAttribute(
      "class",
      "w-25 CVLeftSide border border-2 bg-white"
    );

    const CVLeftSideTitle = document.createElement("div");
    CVLeftSideTitle.setAttribute("class", "CVTitle");
    const CVLeftSideSpaceBG = document.createElement("div");
    CVLeftSideSpaceBG.setAttribute("class", "titleSpace mb-1");
    const CVLeftSideH3 = document.createElement("h3");
    CVLeftSideH3.setAttribute(
      "class",
      "colorTitles text-uppercase fw-bold p-4 border-0"
    );
    CVLeftSideH3.innerText = nameValue;
    // -------------- Contact
    const CVLeftSideContact = document.createElement("div");
    CVLeftSideContact.setAttribute("class", "CVContact p-4");
    const CVLeftSideContactH4 = document.createElement("h4");
    CVLeftSideContactH4.setAttribute("class", "colorTitles mb-3 fw-bold");
    CVLeftSideContactH4.innerText = "Contact";

    const ContactAddress = document.createElement("div");
    ContactAddress.setAttribute("class", "mb-4");
    const ContactAddressH6 = document.createElement("h6");
    ContactAddressH6.innerText = "Address";
    const ContactAddressP = document.createElement("p");
    ContactAddressP.innerText = AddressValue;

    const ContactPhone = document.createElement("div");
    ContactPhone.setAttribute("class", "mb-4");
    const ContactPhoneH6 = document.createElement("h6");
    ContactPhoneH6.innerText = "Phone";
    const ContactPhoneP = document.createElement("p");
    ContactPhoneP.innerText = PhoneValue;

    const ContactEmail = document.createElement("div");
    ContactEmail.setAttribute("class", "mb-4");
    const ContactEmailH6 = document.createElement("h6");
    ContactEmailH6.innerText = "Email";
    const ContactEmailP = document.createElement("p");
    ContactEmailP.innerText = EmailValue;

    const ContactWebsite = document.createElement("div");
    ContactWebsite.setAttribute("class", "mb-4");
    const ContactWebsiteH6 = document.createElement("h6");
    ContactWebsiteH6.innerText = "Website";
    const ContactWebsiteP = document.createElement("p");
    ContactWebsiteP.innerText = WebsiteValue;

    //languages

    const CVLeftSideLanguages = document.createElement("div");
    CVLeftSideLanguages.setAttribute("class", "CVLanguages p-4");

    const languagesH4 = document.createElement("h4");
    languagesH4.setAttribute("class", "colorTitles mb-3 fw-bold");
    languagesH4.innerText = "Languages";

    const languagesListContainer = document.createElement("div");
    languagesListContainer.setAttribute("class", "mb-4");

    const languagesUL = document.createElement("ul");
    languagesUL.setAttribute("class", "list-group list-group-flush");

    textToElements(LanguagesValue, LanguagesListHtmlItems);

    // -------------------RIGHT SIDE CV

    const CVRightSide = document.createElement("div");
    CVRightSide.setAttribute(
      "class",
      "w-75 CVRightSide border border-2 bg-white"
    );

    const CVSummary = document.createElement("div");
    CVSummary.setAttribute("class", "CVSummary p-4");

    const CVSummaryH4 = document.createElement("h4");
    CVSummaryH4.setAttribute("class", "fw-bold colorTitles");
    CVSummaryH4.innerText = "Summary";

    const CVSummaryP = document.createElement("p");
    CVSummaryP.innerText = SummaryValue;

    const CVJobs = document.createElement("div");
    CVJobs.setAttribute("class", "CVJobs p-4");

    const CVJobsH4 = document.createElement("h4");
    CVJobsH4.setAttribute("class", "fw-bold colorTitles");
    CVJobsH4.innerText = "Experience";

    const CVJobsH4UL = document.createElement("ul");
    textToElements(JobsValue, JobsListHtmlItems, true);

    const CVSkills = document.createElement("div");
    CVSkills.setAttribute("class", "CVSkills p-4");

    const CVSkillsH4 = document.createElement("h4");
    CVSkillsH4.setAttribute("class", "fw-bold colorTitles");
    CVSkillsH4.innerText = "Skill Highlights";

    const CVSkillsUL = document.createElement("ul");

    textToElements(SkillValue, SkillsListHtmlItems, true);

    const CVEducation = document.createElement("div");
    CVEducation.setAttribute("class", "CVEducation p-4");

    const CVEducationH4 = document.createElement("h4");
    CVEducationH4.setAttribute("class", "fw-bold colorTitles");
    CVEducationH4.innerText = "Education";

    const CVEducationUL = document.createElement("ul");

    textToElements(EducationValue, EducationListHtmlItems);

    const CVCertifications = document.createElement("div");
    CVCertifications.setAttribute("class", "CVCertifications p-4");

    const CVCertificationsH4 = document.createElement("h4");
    CVCertificationsH4.setAttribute("class", "fw-bold colorTitles");
    CVCertificationsH4.innerText = "Certifications";

    const CVCertificationsUL = document.createElement("ul");

    textToElements(CertificationsValue, CertificationsListHtmlItems);

    const CVBottom = document.createElement("div");
    CVBottom.setAttribute("class", "CVBottom");

    const CVBottomSPACEBG = document.createElement("div");
    CVBottomSPACEBG.setAttribute("class", "titleSpace border border-1");

    // ----------------------------- nodes merging ----------------------------------------

    CVCol12.append(CVsidesContainer);
    CVsidesContainer.append(CVLeftSide, CVRightSide);
    CVLeftSide.append(CVLeftSideTitle, CVLeftSideContact, CVLeftSideLanguages);
    // left side title
    CVLeftSideTitle.append(CVLeftSideSpaceBG, CVLeftSideH3);
    // left side contact
    CVLeftSideContact.append(
      CVLeftSideContactH4,
      ContactAddress,
      ContactPhone,
      ContactEmail,
      ContactWebsite
    );
    ContactAddress.append(ContactAddressH6, ContactAddressP);
    ContactPhone.append(ContactPhoneH6, ContactPhoneP);
    ContactEmail.append(ContactEmailH6, ContactEmailP);
    ContactWebsite.append(ContactWebsiteH6, ContactWebsiteP);

    // left side languages
    CVLeftSideLanguages.append(languagesH4, languagesListContainer);
    languagesListContainer.appendChild(languagesUL);
    LanguagesListHtmlItems.forEach((e) => {
      languagesUL.appendChild(e);
    });

    // right side

    CVRightSide.append(
      CVSummary,
      CVJobs,
      CVSkills,
      CVEducation,
      CVCertifications,
      CVBottom
    );
    CVSummary.append(CVSummaryH4, CVSummaryP);

    CVJobs.append(CVJobsH4, CVJobsH4UL);
    JobsListHtmlItems.forEach((e) => {
      CVJobsH4UL.appendChild(e);
    });

    CVSkills.append(CVSkillsH4, CVSkillsUL);
    SkillsListHtmlItems.forEach((e) => {
      CVSkillsUL.appendChild(e);
    });

    CVEducation.append(CVEducationH4, CVEducationUL);
    EducationListHtmlItems.forEach((e) => {
      CVEducationUL.appendChild(e);
    });

    CVCertifications.append(CVCertificationsH4, CVCertificationsUL);
    CertificationsListHtmlItems.forEach((e) => {
      CVCertificationsUL.appendChild(e);
    });

    CVBottom.appendChild(CVBottomSPACEBG);

    CVContainer.appendChild(CVCol12);
  }
}
