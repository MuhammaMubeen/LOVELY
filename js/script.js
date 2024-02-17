function search() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var resultsContainer = document.getElementById('search-results');
    // Clear previous search results
    resultsContainer.innerHTML = '';

    // Perform search logic here (e.g., searching in an array of items)
    var items = ['apple', 'banana', 'orange', 'pear', 'grape'];
    var matches = items.filter(function(item) {
        return item.toLowerCase().includes(input);
    });

    // Display search results
    if (matches.length > 0) {
        var resultList = document.createElement('ul');
        matches.forEach(function(match) {
            var listItem = document.createElement('li');
            listItem.textContent = match;
            resultList.appendChild(listItem);
        });
        resultsContainer.appendChild(resultList);
    } else {
        resultsContainer.textContent = 'No results found.';
    }
}
