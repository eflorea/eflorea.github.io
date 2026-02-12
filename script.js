document.body.classList.add('js-enabled');

const consoleElement = document.getElementById('dynamic-console');
const text = `Eduard Florea

I build fast, scalable web platforms across full-stack systems (React, Node, PHP, MySQL) and enterprise CMS ecosystems. My recent work focuses heavily on edge-first architecture — using Cloudflare Workers, caching strategy, and modern cloud patterns to deliver secure, cost-efficient performance at scale.

I'm at my best when the requirements are messy, the legacy system is fragile, and the launch date is non-negotiable — turning complexity into systems that feel simple to use and boring to operate (in the best way).

Outside of client work, I build and ship independent products and tools, and I'm always experimenting with AI-assisted automation, workflows, and product ideas.

I also channel creativity through publishing humor-driven comic books (including <a href="https://womendecodedbook.com">Women Decoded</a>), hands-on DIY projects, and building board games — because the best engineers don't just solve problems, they enjoy them.

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
