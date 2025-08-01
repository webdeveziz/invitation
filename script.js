document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы
    // const rsvpForm = document.getElementById('rsvp-form');
    // const modal = document.getElementById('confirmation-modal');
    // const modalMessage = document.getElementById('modal-message');
    // const closeModal = document.querySelector('.close-modal');
    
    // rsvpForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
        
    //     const name = document.getElementById('name').value;
    //     const attendance = document.getElementById('attendance').value;
        
    //     if (attendance === 'yes') {
    //         modalMessage.textContent = `Спасибо, ${name}! Мы рады, что вы сможете разделить с нами этот особенный день!`;
    //     } else {
    //         modalMessage.textContent = `Спасибо, ${name}, за ваш ответ. Жаль, что вы не сможете быть с нами в этот день.`;
    //     }
        
    //     modal.style.display = 'flex';
    //     rsvpForm.reset();
    // });
    
    // closeModal.addEventListener('click', function() {
    //     modal.style.display = 'none';
    // });
    
    // window.addEventListener('click', function(e) {
    //     if (e.target === modal) {
    //         modal.style.display = 'none';
    //     }
    // });

    // Обработка формы
    const rsvpForm = document.getElementById('rsvp-form');
    const modal = document.getElementById('confirmation-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-modal');

    rsvpForm.addEventListener('submit', function(e) {
        // Показываем модальное окно сразу при отправке
        const name = document.getElementById('name').value;
        const attendance = document.getElementById('attendance').value;
        
        if (attendance === 'yes') {
            modalMessage.textContent = `Спасибо, ${name}! Мы рады, что вы сможете разделить с нами этот особенный день!`;
        } else {
            modalMessage.textContent = `Спасибо, ${name}, за ваш ответ. Жаль, что вы не сможете быть с нами в этот день.`;
        }
        
        modal.style.display = 'flex';
        
        // Форма отправится через Formsubmit.co автоматически
        // Дополнительная обработка не требуется
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Таймер обратного отсчета
    const countdownElement = document.getElementById('countdown');
    const weddingDate = new Date('August 12, 2025 15:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            countdownElement.textContent = 'Свадьба состоялась!';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.textContent = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Анимация при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section, .gallery-item, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация анимации
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Изначально скрываем элементы для анимации
    document.querySelectorAll('.section, .gallery-item, .timeline-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});