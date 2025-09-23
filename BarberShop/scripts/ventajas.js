document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const clientStatus = document.querySelector('.user-status[data-status="client"]');
    const barberStatus = document.querySelector('.user-status[data-status="barber"]');
    const clientContent = document.getElementById('client-content');
    const barberContent = document.getElementById('barber-content');

    // Estado inicial
    let isBarber = false;
    clientContent.classList.remove('hidden');
    barberContent.classList.add('hidden');

    toggleButton.addEventListener('click', function() {
        isBarber = !isBarber; // Cambia el estado

        // Muestra el contenido correcto
        if (isBarber) {
            barberStatus.classList.add('active');
            clientStatus.classList.remove('active');
            this.classList.add('barber-active');

            clientContent.classList.add('hidden');
            barberContent.classList.remove('hidden');
        } else {
            clientStatus.classList.add('active');
            barberStatus.classList.remove('active');
            this.classList.remove('barber-active');

            barberContent.classList.add('hidden');
            clientContent.classList.remove('hidden');
        }
    });
});