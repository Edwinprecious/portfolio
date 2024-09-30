'use strict';



// JavaScript code to initialize Typed.js
 var options = {
    strings: ['Developer.', 'Designer.', 'Freelancer.', 'Programmer.'], // Words to be typed and deleted
    typeSpeed: 80, // Typing speed in milliseconds
    backSpeed: 40, // Speed to backspace in milliseconds
    loop: true, // Whether to loop the animation
    backDelay: 2000

  };

  var typed = new Typed(".typed", options);

  
/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



// scroll revreal effect//

const section = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < section.length; i++) {
    if (section[i].getBoundingClientRect().top < window.innerHeight / 2) {
      section[i].classList.add("active");
    } else {
      section[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);



  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  
  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


/**
   * Back to top button
   */
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}



//   function updateProgressBar(percentage) {
//     const barLength =20;
//     const numHashes = Math.floor((percentage / 100) * barLength);
//     const progressBar = '[' + '#'.repeat(numHashes) + ' ' .repeat(barLength - numHashes) + ']';
//     console.log(`progress: ${percentage}% ${progressBar}`);
//   }

//   function updateProgressBar(progress, ariaValuenow ) {
    // const progressBar = document.getElementsByClassName('skill .progress-bar');
    // progressBar.forEach((el) => {
        // el.style.width = el.getAttribute('aria-valuenow') + '%'
    // progressBar.style.width = percentage + '%';
    // });
//   };

//   updateProgressBar();
//   updateProgressBar();


// function updateProgressBar(skill, percentage) {
//     const progressBars = document.querySelectorAll('.progress-bar-wrap');
//     progressBars.forEach((skill, progressBar) => {
//         const skillNameElement = progressBar.previousElementSibling.querySelector('.skill');
//         const skillName = skillNameElement.textContent.trim();
//         if (skill === skillName) {
//             const progressBarElement = progressBar.querySelector('.progress-bar');
//             progressBarElement.setAttribute('aria-valuenow', percentage);
//             progressBarElement.style.width = percentage + '%'
//         }

//     });
   
// }  

// updateProgressBar('HTML', 100);
// console.log(progressBarWraps);

// const progress = document.querySelectorAll('.progress');
// const skill = document.querySelectorAll('.skill');
// const val = document.querySelectorAll('.val');
// const progressBar = document.querySelectorAll('.progress-bar');

// console.log(progress)




// let progress = 0;
// const updateProgressBar = setInterval(() => {})

  
//   /**
//    * Skills animation
//    */
//   let skilsContent = select('.skills-content');
//   if (skilsContent) {
//     new Waypoint({
//       element: skilsContent,
//       offset: '80%',
//       handler: function(direction) {
//         let progress = select('.progress .progress-bar', true);
//         progress.forEach((el) => {
//           el.style.width = el.getAttribute('aria-valuenow') + '%'
//         });
//       }
//     })
//   }




  document.addEventListener("DOMContentLoaded", function() {
    // Get all progress bars
    var progressBars = document.querySelectorAll(".progress-bar");
  
    // Loop through each progress bar
    progressBars.forEach(function(bar) {
      // Get the percentage value from the data attribute
      var percentage = parseInt(bar.getAttribute("aria-valuenow"));
      // Set the width of the progress bar based on the percentage
      bar.style.width = percentage + "%";
    });
  });
  

