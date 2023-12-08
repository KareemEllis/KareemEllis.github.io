window.addEventListener('load', (event) => {
    const modal = document.getElementById('myModal');
    const openButtons = document.querySelectorAll('.openModal');
    const closeButton = document.getElementById('closeModal');

    openButtons.forEach((el) => {
        el.addEventListener('click', () => {
            modal.showModal();
        })
    })
    // openButton.onclick = function() {
    //     modal.showModal(); // Use the native showModal() method
    // }

    closeButton.onclick = function() {
        modal.close(); // Use the native close() method
    }

    // Optional: Close the dialog when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.close();
        }
    }

})