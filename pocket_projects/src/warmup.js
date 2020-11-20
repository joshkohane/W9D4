const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let pTag = document.createElement('P');
    pTag.textContent = string;
    if (htmlElement.hasChildNodes()) {
        htmlElement.childNodes.forEach(child => {
            htmlElement.removeChild(child)
        })
    }
    htmlElement.appendChild(pTag);
};

htmlGenerator('Party Time.', partyHeader);