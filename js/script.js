const data = users
const totalItemsPerPage = 10;
const totalUsers = data.length;

document.getElementById("userTotal").innerHTML ="Total: "+totalUsers;
showUsers(1, totalItemsPerPage); //initialize page 1
var totalPages = Math.ceil(data.length / totalItemsPerPage);
createPageLinks(totalPages);

function showUsers(pageNumber, itemsPerPage) {
    var contactList = document.getElementById("contact-list");
    contactList.innerHTML = ""; //initialize container to blank

    var startInd = (pageNumber - 1) * itemsPerPage;
    var endInd = startInd + itemsPerPage;
    var currentPageItems = data.slice(startInd, endInd);

    currentPageItems.forEach(element => {

        //create li
        var contactLi = document.createElement("li");
        contactLi.classList.add("contact-item");
        contactLi.classList.add("cf");

        //create contact div
        var contactLiDiv = document.createElement("div");
        contactLiDiv.classList.add("contact-details");

        //create img
        var imgLi = document.createElement("img");
        imgLi.classList.add("avatar");
        imgLi.src = element.image;

        //create h3
        var h3Li = document.createElement("h3");
        h3Li.textContent = element.name;

        //create span
        var spanLi = document.createElement("span");
        spanLi.classList.add("email");
        spanLi.textContent = element.email;

        //create div for joined details
        var joinedDetDiv = document.createElement("div");
        joinedDetDiv.classList.add("joined-details");

        //create span for date
        var spanDate = document.createElement("span");
        spanDate.classList.add("date");
        spanDate.textContent = "Joined " + element.joined;

        contactLi.appendChild(contactLiDiv);
        contactLiDiv.appendChild(imgLi);
        contactLiDiv.appendChild(h3Li);
        contactLiDiv.appendChild(spanLi);
        contactLi.appendChild(joinedDetDiv);
        joinedDetDiv.appendChild(spanDate);
        contactList.appendChild(contactLi);
    });

}

function createPageLinks(totalPages) {
    var pageLinkContainer = document.getElementById("pagination");
    var pageListItem = document.createElement("li");

    for (j = 1; j <= totalPages; j++) {
        var pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = j;

        pageLink.addEventListener("click", function (e) {
            e.preventDefault();
            var pageNumber = parseInt(e.target.textContent);
            showUsers(pageNumber, totalItemsPerPage);

            // Remove active class from links
            var links = document.querySelectorAll('.pagination li a');
            links.forEach(function (link) {
                link.classList.remove('active');
            });

            e.target.classList.add('active'); // Add active class to the clicked link

        });

        pageListItem.appendChild(pageLink);
        pageLinkContainer.appendChild(pageListItem)
    }
    if (totalPages > 0) {
        pageLinkContainer.querySelector('.pagination li a').classList.add('active'); //set first page to active
    }
}
