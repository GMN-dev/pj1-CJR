let currentPage = 1;
const DATA_PER_PAGE = 5;
const tbody = document.getElementById("tbody");

function getCurrentDataPerPage(){
    const startIndex = (currentPage - 1) * DATA_PER_PAGE;
    const endIndex = (startIndex + DATA_PER_PAGE); 

    return users.slice(startIndex, endIndex);
}

function renderPagination(){
    const pagination = document.getElementById("npages");
    pagination.replaceChild(prevPageButtton);

}

function createRow(element){
    let tag = `<tr class="data-row">
        <td>${element.first_name} ${element.last_name}</td>
        <td>${element.email}</td>
        <td>${element.created_at}</td>
<td id="btts"><button id="editar">editar</button><button id="excluir">excluir</button></td>
    </tr>`;
    return tag;
}

let blocoData = getCurrentDataPerPage();

blocoData.forEach(element => {
    tbody.innerHTML += createRow(element)
});


renderPagination(Math.ceil(users.length/DATA_PER_PAGE));