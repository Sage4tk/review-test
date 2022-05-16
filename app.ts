const stars = document.querySelectorAll(".star")

stars.forEach(element => {
    element.addEventListener("click", (ele:any) => {
        const target = document.querySelector(".target");

        console.log(typeof ele.target.parentNode.id)

        //clear target html
        target.innerHTML = ""

        if (parseInt(ele.target.parentNode.id) <= 3) {

            //create form
            const createForm = document.createElement("form");

            target.appendChild(createForm)

            //create inputs

            //name input
            const inputNameContainer = document.createElement("div");
            inputNameContainer.className = "form-control";
            createForm.appendChild(inputNameContainer);

            const labelName = document.createElement("label");
            labelName.innerText = "Name"
            inputNameContainer.appendChild(labelName)

            const inputElement = document.createElement("input");
            inputNameContainer.appendChild(inputElement);

            //phone input
            const inputPhoneContainer = document.createElement("div");
            inputPhoneContainer.className = "form-control";
            createForm.appendChild(inputPhoneContainer);

            const labelPhone = document.createElement("label");
            labelPhone.innerText = "Phone"
            inputPhoneContainer.appendChild(labelPhone)

            const inputPhoneElement = document.createElement("input");
            inputPhoneContainer.appendChild(inputPhoneElement);

            

            //email input
            const inputEmailContainer = document.createElement("div");
            inputEmailContainer.className = "form-control";
            createForm.appendChild(inputEmailContainer);

            const labelEmail = document.createElement("label");
            labelEmail.innerText = "Email"
            inputEmailContainer.appendChild(labelEmail)

            const inputEmailElement = document.createElement("input");
            inputEmailContainer.appendChild(inputEmailElement);

            //feed input
            const inputFeedContainer = document.createElement("div");
            inputFeedContainer.className = "form-control";
            createForm.appendChild(inputFeedContainer);

            const labelFeed = document.createElement("label");
            labelFeed.innerText = "Feedback"
            inputFeedContainer.appendChild(labelFeed)

            const inputFeedElement = document.createElement("textarea");
            inputFeedContainer.appendChild(inputFeedElement);

            //submit button
            const createButton = document.createElement("button");
            createButton.className = "submit"
            createButton.innerHTML = "Submit"

            createForm.appendChild(createButton)

        } else {
            //create thank box
            const containerHeader = document.createElement("div");
            containerHeader.className = "center"

            target.appendChild(containerHeader);

            const h2 = document.createElement("h2");
            h2.innerText = "Thanks so much! Your Testimonial would mean the world to me & my business!"
            containerHeader.appendChild(h2);

            const subtext = document.createElement("p");
            subtext.innerText = "Click product below to review product"

            containerHeader.appendChild(subtext)

            //create google button
            const createGbutton = document.createElement("div");
            createGbutton.className = "gButton";
            
            target.appendChild(createGbutton);

            const gIcon = document.createElement("img");
            gIcon.setAttribute('src', './icons/gicon.png');
            createGbutton.appendChild(gIcon);

            const textButton = document.createElement("span");
            textButton.innerText = "click here to review us on Google";
            createGbutton.appendChild(textButton)
            
        }
    })
})