document.body.classList.add('js-enabled');

const consoleElement = document.getElementById('dynamic-console');
const text = `
Full-Stack Engineer, WordPress Specialist, AWS Expert, and Creative DIY Enthusiast

As a seasoned PHP and WordPress professional, I create custom, high-performance solutions with a full-stack approach. My expertise spans a wide array of technologies, including React, Node, AWS, MySQL, Python, and AI-driven automation. Whether it's building dynamic applications or architecting robust cloud infrastructures, I bring comprehensive technical knowledge to every project.

In addition to my engineering work, I channel creativity through publishing humor-driven comic books like "Women Decoded," hands-on DIY projects, and building board games that reflect my passion for problem-solving and innovation.

Whether it’s coding, AI, cloud architecture, or creative endeavors, I deliver results with a unique blend of professionalism and a touch of humor.

`;

let index = 0;
const speed = 10; // Adjust this value to speed up or slow down the typing effect

function typeText() {
  if (index < text.length) {
    consoleElement.innerHTML += text.charAt(index);
    index++;
    consoleElement.scrollTop = consoleElement.scrollHeight; // Auto-scroll to bottom
    setTimeout(typeText, speed);
  }
}

window.onload = function() {
  typeText();
};
