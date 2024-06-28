let submitButton = document.querySelector('.chatbot-submit');
let chatbotText = document.querySelector('.chatbot-text');

function chatLogic(input) {
    if (input.includes("about")) {
        return "Hello my name is Jacob Henry.";
    } else if (input.includes("skill")) {
        return "I have experience using JavaScript, HTML, and CSS. This has allowed me to create web applications and websites. I also have experience using Python in things such as data anaylsis, machine learning, APIs, scripting tasks, and making games.";
    } else if (input.includes("career")) {
        return "I am interested in pursing a degree in computer science at either IU or Purdue. I want to specialize in cybersecuirty and either get a job or start my own business in that area."
    } else if (input.includes("education") || input === "school") {
        return "I go to school at Wood Memorial high school and I am in the class of 2025."
    } else if(input.includes("hobbies") || input.includes("extracurricular") || input.includes("intrest")) {
        return "My hobbies inlcude going to the gym, playing tennis, basketball, programming, and hanging out with friends."
    } else if(input.includes("age") || input.includes("old")) {
        return "I am 17 years old."
    } else if(input.includes("color")) {
        return "My favorite color is blue."
    } else if(input.includes("from") || input.includes("where")) {
        return "I currently live in Gibson County, Indiana."
    } else if(input.includes("birthday")) {
        return "My birthday is on January 15th, 2007."
    } else if(input.includes("help")) {
        return "List of Commands: about, skill, career, education, hobbies"
    } else {
        return "This is not a response in the chatbots memory. Please try again. Type in 'help' to see a list of commands.";
    }
}


submitButton.addEventListener('click', function(){
    let input = document.querySelector('.chatbot-input');
    console.log(input)
    let newInput = input.value
    console.log(newInput)
    let lowerInput = newInput.toLowerCase()
    console.log(lowerInput)
    chatbotText.innerHTML = chatLogic(lowerInput);
})    

