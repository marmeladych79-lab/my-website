document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт полностью загружен');
    
    // 1. Анимация для карточек (из основного задания)
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

    // 2. Обработка формы контактов (из задания с ветками)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Ваше сообщение успешно отправлено.');
            contactForm.reset();
        });
    }

    // 3. Логика интерактивной галереи (для самостоятельного задания)
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumb');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Меняем адрес большой картинки на тот, что скрыт в атрибуте data-full
                mainImage.src = this.getAttribute('data-full');
                
                // Снимаем активный класс (подсветку) со всех миниатюр
                thumbnails.forEach(t => t.classList.remove('active'));
                // Добавляем подсветку текущей кликнутой миниатюре
                this.classList.add('active');
            });
        });
    }
});
