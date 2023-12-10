const body = document.body;

//Observer for observing hidden elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-show')
        }
    })
})
//Elements to add scroll animation to
const hiddenElements = document.querySelectorAll('.scroll-hidden')
hiddenElements.forEach((el) => observer.observe(el)) //Add observer to hidden elements

const modal = document.getElementById('myModal');
const openButtons = document.querySelectorAll('.openModal');
const closeButton = document.getElementById('closeModal');
let scrollPosition = 0;
let scrollbarWidth = 0;


function getScrollTop() {
    return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function getScrollbarWidth() {
    // Create a temporary div container and append it into the body
    const container = document.createElement('div');
    container.style.visibility = 'hidden';
    container.style.overflow = 'scroll'; // forcing scrollbar to appear
    container.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    body.appendChild(container);

    // Append a child div with 100% width to the container
    const child = document.createElement('div');
    child.style.width = '100%';
    container.appendChild(child);

    // Calculate the width of the scrollbar
    scrollbarWidth = container.offsetWidth - child.offsetWidth;

    // Remove the temporary div from the body
    body.removeChild(container);

    return scrollbarWidth;
}

scrollbarWidth = getScrollbarWidth();

//Add event listeners to Open Modal
openButtons.forEach((el) => {
    el.addEventListener('click', () => {
        scrollPosition = getScrollTop(); // Store the scroll position
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.width = `calc(100% - ${scrollbarWidth}px)`; // Prevent width from reflowing
        body.style.top = `-${scrollPosition}px`;
        modal.showModal();
    })
})

//Fucntion to close modal
closeButton.onclick = function() {
    modal.close();
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');

    // Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, scrollPosition);
    // Re-enable smooth scrolling
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 0);
}

//Add event listeners to Close Modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.close();
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');

        // Temporarily disable smooth scrolling
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollPosition);
        // Re-enable smooth scrolling
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 0);
    }
}
