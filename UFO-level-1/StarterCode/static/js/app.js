// from data.js
var tableData = data;

function createTableRow(rowData) {

	var tableRow = document.createElement('tr');

	tableRow.setAttribute("data-filter", rowData.datetime);

	
	var col_dt = document.createElement('td')
	col_dt.appendChild(document.createTextNode(rowData.datetime))
	tableRow.appendChild(col_dt);

	var col_city = document.createElement('td')
	col_city.appendChild(document.createTextNode(rowData.city))
	tableRow.appendChild(col_city);

	var col_state = document.createElement('td')
	col_state.appendChild(document.createTextNode(rowData.state))
	tableRow.appendChild(col_state);

	var col_country = document.createElement('td')
	col_country.appendChild(document.createTextNode(rowData.country))
	tableRow.appendChild(col_country);

	var col_shape = document.createElement('td')
	col_shape.appendChild(document.createTextNode(rowData.shape))
	tableRow.appendChild(col_shape);

	var col_durationMinutes = document.createElement('td')
	col_durationMinutes.appendChild(document.createTextNode(rowData.durationMinutes))
	tableRow.appendChild(col_durationMinutes);

	var col_comments = document.createElement('td')
	col_comments.appendChild(document.createTextNode(rowData.comments))
	tableRow.appendChild(col_comments);

	return tableRow;
}

// insert data into table
var tableBody = document.querySelector('#ufo-table tbody');

for (var i = 0; i < tableData.length; i ++) {

	tableBody.appendChild(createTableRow(tableData[i]));
}

document.getElementById("filter-btn").addEventListener("click", function(e){
	var dateFilter = document.getElementById('datetime').value;

	if (dateFilter) {
		var allRows = document.querySelectorAll('table tbody tr');
		console.log(allRows)
		for (var i = 0; i < allRows.length; i ++) {
			if (allRows[i].getAttribute("data-filter") !== dateFilter) {
				allRows[i].style.display = "none";
			}
		}
	}
});
