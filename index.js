 

   // Dynamic Projects Section
   document.addEventListener('DOMContentLoaded', function () {
       const projectData = [
           {
               title: 'Movie Booking System',
               description: 'A dynamic system built with Struts and Java.',
               link: '#',
               media: { type: 'image', src: 'images/movie.jpeg' } // Image example
           },
           {
               title: 'Food Ordering Website',
               description: 'A responsive website for ordering food.',
               link: '#',
               media: { type: 'video', src: 'video/food.mp4' } // Video example
           },
           {
               title: 'University Website',
               description: 'An interactive university platform.',
               link: '#',
               media: { type: 'image', src: 'images/skylight.jpeg' }
           },
           {
               title: 'Chatbot App',
               description: 'A chatbot to read PDFs using Java.',
               link: '#',
               media: { type: 'image', src: 'images/chatbot.png' }
           }
       ];

       const projectGrid = document.getElementById('project-grid');

       projectData.forEach((project) => {
           const projectItem = document.createElement('div');
           projectItem.classList.add('grid-item');

           // Conditionally render image or video based on 'media.type'
           let mediaElement;
           if (project.media.type === 'image') {
               mediaElement = `<img src="${project.media.src}" alt="${project.title}" class="project-media">`;
           } else if (project.media.type === 'video') {
               mediaElement = `<video controls class="project-media">
                               <source src="${project.media.src}" type="video/mp4">
                               Your browser does not support the video tag.
                           </video>`;
           }

           projectItem.innerHTML = `
           ${mediaElement}
           <h3>${project.title}</h3>
           <p>${project.description}</p>
           <a href="${project.link}" class="btn">View Project</a>
       `;

           projectGrid.appendChild(projectItem);
       });
   });

   // Form Validation (No changes here)
   const contactForm = document.getElementById('contactForm');
   contactForm.addEventListener('submit', (event) => {
       event.preventDefault();

       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;
       const formMessage = document.getElementById('formMessage');

       if (name === '' || email === '' || message === '') {
           formMessage.textContent = 'Please fill out all fields!';
           formMessage.style.color = 'red';
       } else {
           formMessage.textContent = 'Message sent successfully!';
           formMessage.style.color = 'green';
           contactForm.reset();
       }
   });
   
   document.addEventListener('DOMContentLoaded', function () {
       const skillsData = [
           {
               name: 'HTML',
               description: 'Markup language for creating web pages.',
               image: 'images/html-5.png' // Image for the skill
           },
           {
               name: 'CSS',
               description: 'Stylesheets for designing websites.',
               image: 'images/css-3.png'
           },
           {
               name: 'JavaScript',
               description: 'Programming language for web development.',
               image: 'images/Javascript.png'
           },
           {
               name: 'React',
               description: 'JavaScript library for building user interfaces.',
               image: 'images/react.png'
           },
           {
               name: 'Node.js',
               description: 'JavaScript runtime for server-side programming.',
               image: 'images/node-js.png'
           }
       ];

       const skillsGrid = document.getElementById('skills-grid');

       skillsData.forEach(skill => {
           const skillItem = document.createElement('div');
           skillItem.classList.add('skill-item');

           skillItem.innerHTML = `
           <img src="${skill.image}" alt="${skill.name}" class="skill-image">
           <div class="skill-info">
               <h3>${skill.name}</h3>
               <p>${skill.description}</p>
           </div>
       `;

           skillsGrid.appendChild(skillItem);
       });
   });

   const texts = ["Manish Matela", "A Web Developer", "A Problem Solver", 'Backend Devloper', 'Full Stack Web Devloper'];
   let count = 0;
   let index = 0;
   let currentText = "";
   let letter = "";

   (function type() {
       if (count === texts.length) {
           count = 0;
       }
       currentText = texts[count];
       letter = currentText.slice(0, ++index);

       document.getElementById('dynamic-text').textContent = letter;
       if (letter.length === currentText.length) {
           count++;
           index = 0;
       }
       setTimeout(type, 400);
   }());
