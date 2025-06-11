document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const summaryList = document.getElementById('summary-list');
        data.forEach(item => {
          const li = document.createElement('li');
          li.className = `summary-list__item summary-list__item--${item.category.toLowerCase()}`;
          li.innerHTML = `
            <span class="summary-list__category">
              <img src="${item.icon}" alt="${item.category} icon">
              ${item.category}
            </span>
            <span class="summary-list__score">
              ${item.score} <span>/ 100</span>
            </span>
          `;
          summaryList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });