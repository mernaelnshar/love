document.addEventListener('DOMContentLoaded', function(){
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    const container = document.querySelector('.container');

    noButton.addEventListener('mouseover', function(){
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const newX = Math.floor(Math.random()*maxX);
        const newY = Math.floor( Math.random()*maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;

    })

    yesButton.addEventListener('click', function(){
        gifImage.src = 'https://media.tenor.com/vdTgSa-7cWcAAAAi/peach-goma-peach-and-goma.gif';
        headline.textContent = "I love you too 🥹🩷";
        document.querySelector('.button-container').remove();
    })





})