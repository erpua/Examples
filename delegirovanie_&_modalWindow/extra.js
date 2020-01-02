
/*
<li class="list-item">
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores autem aliquam
                aliquid aperiam. Cumque recusandae quae minima. Ipsa, at
            </p>
            <div class="actions">
                <button class="btn">Edit</button>
                <button class="btn">Delete</button>
            </div>
        </li>
*/

/*
const listItems = data.map(item => createListItem(item));

list.append(...listItems);

console.log(listItems);
*/

/*
listItems.forEach(item => {
    list.appendChild(item);
    console.log(item);
})
*/

//list.append(listItems[0], listItems[1], listItems[2]);

{
    //FRAGMENT
    /*
    const fragment = document.createDocumentFragment();
        console.log(fragment);
        for (let i = 0; i < 10; i += 1) {
            const item = document.createElement("li");
            item.textContent = `Item ${i}`;
            fragment.appendChild(item);
        }
        list.appendChild(fragment);
        console.log(list);  
    */
}

//console.log(list.innerHTML);

/*
const createListItemMarkup = ({ id, body }) => {
    const markup = `<li class="list-item" data-id="${id}">
                    <p class="text">${body}</p>
                  <div class="actions">
                    <button class="btn" data-action="${buttonActions.EDIT}">Edit</button>
                    <button class="btn" data-delete="${buttonActions.DELETE}">Delete</button>
                 </div>
                </li>`;

    return markup;
};

const item = createListItemMarkup(data[1]);

list.insertAdjacentHTML("beforeend", item)

const createListItemsMarkup = data => {
    const markup = data.map(item => createListItemsMarkup(item));
};

*/

/*



const handleEditorSubmit = event => {
    event.preventDefault();

    const [input] = event.currentTarget.elements;

    const inputValue = input.value;

    if (inputValue.trim() === "") {
        return alert("no input!");
    }

    addItemToList(refs.list, inputValue);

    event.currentTarget.reset();

    console.log("inputValue: ", inputValue);
    console.log("event: ", event);
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
    console.log("event.target.children: ", event.target.children);
    console.log("event.target.elements: ", event.target.elements);
}

const handleFilterChange = event => {
    console.log(event.target.value);
}

//Listeners
refs.editor.addEventListener("submit", handleEditorSubmit);
refs.filter.addEventListener("input", handleFilterChange);
 */