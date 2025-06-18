
    const selectElement = document.getElementById('city-select');

    selectElement.addEventListener('change', function() {
        const selectedCity = selectElement.value;
        window.location.href = selectedCity; // Переход на соответствующую страницу
    });
