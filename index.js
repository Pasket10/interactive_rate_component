const rateBtn = document.querySelectorAll('.rating__button');
const card = document.querySelector('.card');
const submitBtn = document.querySelector('.submit__button');



    card.addEventListener('click', (e) => {

        if (e.target.classList.contains('rating__button')) {
            rateBtn.forEach(btn => btn.classList.remove('active'))

            e.target.classList.add('active');
        } 
        
    });

    submitBtn.addEventListener('click', () => {
        const selectedRating = document.querySelector('.active');
        if (selectedRating) {
            const ratingValue = selectedRating.textContent;
            card.innerHTML = `
                <div class="thank-you-state">
                    <img src="images/illustration-thank-you.svg" alt="thank you" class="thank-you__image">
                    <p class="thank-you__message">You selected ${ratingValue} out of 5</p>
                    <h1 class="thank-you__title">Thank you!</h1>
                    <p class="thank-you__description">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </div>
            `;
        }
    });
