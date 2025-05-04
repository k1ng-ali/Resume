function copyPhoneNumber() {
    const number = '+7 (929) 630-74-48'
    navigator.clipboard.writeText(number).then(() => {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2000);
    }).catch(err => {
        alert("Ошибка при копировании");
        console.error(err);
    });
}