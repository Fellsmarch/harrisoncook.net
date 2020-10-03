let table = document.getElementById("refereeGamesTable");

console.log(table)

totals = {}
yesNo = {}

refereeTypes = {"Referee": 0, "Assistant Referee": 0, "Fourth Official": 0}

let rowIndex = 1;
let colIndex = 0;

for (let row; row = table.rows[rowIndex]; rowIndex++) {
    colIndex = 0
    for (let col; col = row.cells[colIndex]; colIndex++) {
        let val = col.innerText
        let numberVal = Number(val)

        if (numberVal) {
            if (!(colIndex in totals)) totals[colIndex] = 0
            totals[colIndex] += numberVal
        } else if (val == "Yes" || val == "No") {
            if (!(colIndex in yesNo)) yesNo[colIndex] = {"Yes": 0, "No": 0}
            yesNo[colIndex][val]++
        } else if (val in refereeTypes) {
            refereeTypes[val]++
        }
    }
}

let newRow = table.insertRow(rowIndex)
newRow.setAttribute("id", "totalsRow")
newRow.setAttribute("class", "header")
for (let i = 0; i < colIndex; i++) {
    newRow.insertCell(i)
}

newRow.cells[0].innerText = "Totals"
newRow.cells[1].innerText = "Num Games: " + (rowIndex - 1)
newRow.cells[2].innerText = "(R) " + refereeTypes["Referee"] + " / (AR) " + refereeTypes["Assistant Referee"] + " / (4th) " + refereeTypes["Fourth Official"]

for (const item in yesNo) {
    newRow.cells[item].innerText = "(Y) " + yesNo[item]["Yes"] + " / (N) " + yesNo[item]["No"]
}

for (const item in totals) {
    newRow.cells[item].innerText = totals[item]
}