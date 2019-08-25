var UserConfig = {
    body  : 'basic',
    eyes  : 'basic',
    hair  : 'basic',
    mouth : 'basic',
    nose  : 'basic'
}

function checkType (input, expected) {
    if (input === "eyes" && expected === "eyes") {
        return true;
    } else if (input === "hair" && expected === "hair") {
        return true;
    } else if (input === "mouth" && expected === "mouth") {
        return true;
    } else if (input === "nose" && expected === "nose") {
        return true;
    } else {
        return false;
    }
}

function chooseEyes (eyes) {
    let type = eyes.dataset.type,
        name = eyes.dataset.name;

    if (checkType(type, "eyes")) {
        UserConfig.eyes = name;
        let userEyes = document.querySelector("#userCharacter #eyes");
        userEyes.classList = name
    } 
}

function chooseHair (hair) {
    let type = hair.dataset.type,
        name = hair.dataset.name;

    if (checkType(type, "hair")) {
        UserConfig.hair = name;
        let userHair = document.querySelector("#userCharacter #hair");
        userHair.classList = name
    } 
}

function chooseMouth (mouth) {
    let type = mouth.dataset.type,
        name = mouth.dataset.name;

    if (checkType(type, "mouth")) {
        UserConfig.mouth = name;
        let userMouth = document.querySelector("#userCharacter #mouth");
        userMouth.classList = name
    } 
}

function chooseNose (nose) {
    let type = nose.dataset.type,
        name = nose.dataset.name;

    if (checkType(type, "nose")) {
        UserConfig.nose = name;
        let userNose = document.querySelector("#userCharacter #nose");
        userNose.classList = name
    } 
}