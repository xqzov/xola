document.addEventListener('DOMContentLoaded', () => {
    // Используем обновленный ID из HTML
    const phoneContainer = document.getElementById('tilt-phone');
    const isMobile = window.innerWidth < 768;

    if (!isMobile && phoneContainer) {
        document.addEventListener('mousemove', (e) => {
            // Чувствительность наклона (чем больше делитель, тем меньше наклон)
            const x = (window.innerWidth / 2 - e.pageX) / 25;
            const y = (window.innerHeight / 2 - e.pageY) / 25;

            // Ограничиваем углы, чтобы телефон не "выворачивался"
            const rotateX = Math.max(-15, Math.min(15, y));
            const rotateY = Math.max(-15, Math.min(15, x));

            // Применяем 3D трансформацию
            phoneContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`;
        });

        // Добавляем плавность возврата через CSS transition (он есть в CSS, но тут перестраховка)
        phoneContainer.style.transition = 'transform 0.1s ease-out';
    }
});