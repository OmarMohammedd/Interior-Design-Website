document.addEventListener('DOMContentLoaded', () => {
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const counters = [
        { selector: 'div:nth-child(1) h3', end: 400 },
        { selector: 'div:nth-child(2) h3', end: 600 },
        { selector: 'div:nth-child(3) h3', end: 100 }
    ];

    counters.forEach(counter => {
        const element = document.querySelector(counter.selector);
        animateCounter(element, 0, counter.end, 2000);
    });
});


                            // scroll to top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});
