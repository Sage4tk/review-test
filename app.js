var stars = document.querySelectorAll(".star");
stars.forEach(function (element) {
    element.addEventListener("click", function (ele) {
        var target = document.querySelector(".target");
        console.log(typeof ele.target.parentNode.id);
        //clear target html
        target.innerHTML = "";
        if (parseInt(ele.target.parentNode.id) <= 3) {
            //create form
            var createForm = document.createElement("form");
            target.appendChild(createForm);
            //create inputs
            //name input
            var inputNameContainer = document.createElement("div");
            inputNameContainer.className = "form-control";
            createForm.appendChild(inputNameContainer);
            var labelName = document.createElement("label");
            labelName.innerText = "Name";
            inputNameContainer.appendChild(labelName);
            var inputElement = document.createElement("input");
            inputNameContainer.appendChild(inputElement);
            //phone input
            var inputPhoneContainer = document.createElement("div");
            inputPhoneContainer.className = "form-control";
            createForm.appendChild(inputPhoneContainer);
            var labelPhone = document.createElement("label");
            labelPhone.innerText = "Phone";
            inputPhoneContainer.appendChild(labelPhone);
            var inputPhoneElement = document.createElement("input");
            inputPhoneContainer.appendChild(inputPhoneElement);
            //email input
            var inputEmailContainer = document.createElement("div");
            inputEmailContainer.className = "form-control";
            createForm.appendChild(inputEmailContainer);
            var labelEmail = document.createElement("label");
            labelEmail.innerText = "Email";
            inputEmailContainer.appendChild(labelEmail);
            var inputEmailElement = document.createElement("input");
            inputEmailContainer.appendChild(inputEmailElement);
            //feed input
            var inputFeedContainer = document.createElement("div");
            inputFeedContainer.className = "form-control";
            createForm.appendChild(inputFeedContainer);
            var labelFeed = document.createElement("label");
            labelFeed.innerText = "Feedback";
            inputFeedContainer.appendChild(labelFeed);
            var inputFeedElement = document.createElement("textarea");
            inputFeedContainer.appendChild(inputFeedElement);
            //submit button
            var createButton = document.createElement("button");
            createButton.className = "submit";
            createButton.innerHTML = "Submit";
            createForm.appendChild(createButton);
        }
        else {
            //create thank box
            var containerHeader = document.createElement("div");
            containerHeader.className = "center";
            target.appendChild(containerHeader);
            var h2 = document.createElement("h2");
            h2.innerText = "Thanks so much! Your Testimonial would mean the world to me & my business!";
            containerHeader.appendChild(h2);
            var subtext = document.createElement("p");
            subtext.innerText = "Click product below to review product";
            containerHeader.appendChild(subtext);
            //create google button
            var createGbutton = document.createElement("div");
            createGbutton.className = "gButton";
            target.appendChild(createGbutton);
            var gIcon = document.createElement("img");
            gIcon.setAttribute('src', './icons/gicon.png');
            createGbutton.appendChild(gIcon);
            var textButton = document.createElement("span");
            textButton.innerText = "click here to review us on Google";
            createGbutton.appendChild(textButton);
        }
    });
});
