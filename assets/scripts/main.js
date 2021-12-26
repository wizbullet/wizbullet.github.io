async function populateCodeSection(){
    const codeElement = document.getElementById("config-container")
    codeElement.innerText = await getConfigFileContent()
    console.log(await getConfigFileContent())
}
populateCodeSection()


async function getConfigFileContent(){
    const response = await fetch("/assets/other/autoexec.cfg")
    const file = await response.blob()
    return await file.text()
}