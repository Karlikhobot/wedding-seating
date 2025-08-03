// Конфигурация
const config = {
    tablesCount: 5,
    guestsPerTable: 10
};

// Генерация столов и гостей
function generateSeating() {
    const container = document.querySelector('.tables-container');
    let guestNumber = 1;
    
    for (let tableNum = 1; tableNum <= config.tablesCount; tableNum++) {
        const tableDiv = document.createElement('div');
        tableDiv.className = 'table';
        tableDiv.innerHTML = `<h2>Стол ${tableNum}</h2>`;
        
        for (let i = 0; i < config.guestsPerTable; i++) {
            const guestDiv = document.createElement('div');
            guestDiv.className = 'guest';
            guestDiv.textContent = `Гость ${guestNumber}`;
            guestDiv.onclick = () => showGuestInfo(guestNumber);
            tableDiv.appendChild(guestDiv);
            guestNumber++;
        }
        
        container.appendChild(tableDiv);
    }
}

// Показать информацию о госте
function showGuestInfo(guestNumber) {
    const modal = document.getElementById('guestModal');
    const guestTitle = document.getElementById('guestTitle');
    const guestInfo = document.getElementById('guestInfo');
    
    guestTitle.textContent = `Гость ${guestNumber}`;
    guestInfo.textContent = getGuestInfo(guestNumber);
    
    modal.style.display = 'block';
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById('guestModal').style.display = 'none';
}

// Получить информацию о госте (можно заменить на реальные данные)
function getGuestInfo(guestNumber) {
    const info = {
        name: `Гость ${guestNumber}`,
        table: Math.ceil(guestNumber / config.guestsPerTable),
        notes: "Дополнительная информация о госте"
    };
    
    return `
        Имя: ${info.name}
        Стол: ${info.table}
        Примечания: ${info.notes}
    `;
}

// Инициализация при загрузке страницы
window.onload = function() {
    generateSeating();
    
    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        const modal = document.getElementById('guestModal');
        if (event.target == modal) {
            closeModal();
        }
    }
};
