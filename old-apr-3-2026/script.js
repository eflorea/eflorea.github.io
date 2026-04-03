document.body.classList.add('js-enabled');

const consoleElement = document.getElementById('dynamic-console');
const text = `Eduard Florea

I'm a Staff Engineer and Cloud Solutions Architect with almost 20 years of experience building and leading scalable web platforms across full-stack systems (React, Node, PHP, MySQL) and enterprise CMS ecosystems.

I lead teams through high-stakes delivery: messy requirements, legacy constraints, production risk, and deadlines that don't move. My focus is building systems that scale — and making sure the engineers working on them feel supported, aligned, and set up to succeed.

In recent years, my work has shifted toward edge-first architecture, especially Cloudflare Workers as the application layer. I design platforms where Cloudflare isn't just a CDN, but part of the backend: routing, caching strategy, security, and data access patterns — paired with modern cloud practices and AI-assisted automation.

Outside of work, I publish humor-driven books (including <a href="https://womendecodedbook.com">Women Decoded</a>), build DIY projects, and design board games — because I genuinely enjoy building things that people can use, laugh at, or play.

<a href="https://www.linkedin.com/in/eduardflorea/" target="_blank">View resume</a>`;

let index = 0;
const speed = 10; // Adjust this value to speed up or slow down the typing effect

function typeText() {
  // Add HTML chunks instead of single characters
  consoleElement.innerHTML = text.substring(0, index); 
  index++;  // Increment the index
  consoleElement.scrollTop = consoleElement.scrollHeight; // Auto-scroll to bottom
  
  if (index <= text.length) {
    setTimeout(typeText, speed); // Continue typing until all text is added
  }
}

window.onload = function() {
  typeText();
};
