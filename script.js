window.addEventListener('load', (event) => {
    const body = document.body;
    const modal = document.getElementById('myModal');
    const openButtons = document.querySelectorAll('.openModal');
    const closeButton = document.getElementById('closeModal');
    let scrollPosition = 0;

    function getScrollTop() {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    openButtons.forEach((el) => {
        el.addEventListener('click', () => {
            scrollPosition = getScrollTop(); // Store the scroll position
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition}px`;
            modal.showModal();
            //body.classList.add('no-scroll');
        })
    })
    // openButton.onclick = function() {
    //     modal.showModal(); // Use the native showModal() method
    // }

    closeButton.onclick = function() {
        modal.close(); // Use the native close() method
        //body.classList.remove('no-scroll');
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        window.scrollTo(0, scrollPosition);
    }

    // Optional: Close the dialog when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.close();
            //body.classList.remove('no-scroll');
            body.style.removeProperty('overflow');
            body.style.removeProperty('position');
            body.style.removeProperty('top');
            window.scrollTo(0, scrollPosition);
        }
    }

})