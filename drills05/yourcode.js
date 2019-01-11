function populateRecords(records){
    if (!records.length) return;
    const results = {
        charge: 0,
        'cash advance': 0
    };
    const newOutput = $('<div>').addClass('testOutput');
    $('#testArea').append(newOutput);

    function createRow(cell1, cell2, cell3){
        const record = $('<div>').addClass('transactionRecord');
        const type = $('<span>').addClass('transactionType').text(cell1);
        const source = $('<span>').addClass('transactionLocation').text(cell2);
        const amount = $('<span>').addClass('transactionAmount').text(cell3);
        record.append(type, source, amount);
        newOutput.append(record);
    }

    createRow('Type', 'Source', 'Amount');

    records.map(item => {
        let itemAmount = parseFloat(item.amount);
        createRow(item.type, item.source, `$${itemAmount.toFixed(2)}`);
        if(results.hasOwnProperty(item.type)){
            results[item.type] += itemAmount;
        }
    });
    
    return results;
}


/*
template for each row:

<div class="transactionRecord">
    <span class="transactionType">
      Type
    </span>
    <span class="transactionLocation">
      Source
    </span>
    <span class="transactionAmount">
      Amount
    </span>
</div>

*/