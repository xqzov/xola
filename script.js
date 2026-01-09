document.addEventListener('DOMContentLoaded', () => {
    const phoneContainer = document.getElementById('tilt-phone');
    const isMobile = window.innerWidth < 900;

    if (!isMobile && phoneContainer) {
        document.addEventListener('mousemove', (e) => {
            // Увеличиваем чувствительность для 3D
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;

            const rotateX = Math.max(-25, Math.min(25, y));
            const rotateY = Math.max(-25, Math.min(25, x));

            // Добавляем perspective прямо в инлайн стиль для глубины
            phoneContainer.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`;
        });

        // Сброс положения при уходе мышки (опционально, для красоты)
        document.addEventListener('mouseleave', () => {
            phoneContainer.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
            phoneContainer.style.transition = 'transform 0.5s ease-out';
        });
    }
});
