const URL="http://localhost:3000/current-exhibits "
fetch(URL)
.then(response=>response.json())
.then(exhibitData=>renderExhibit(exhibitData[0]))
document.querySelector("#comment-form").addEventListener("submit",addComment)
document.querySelector("#buy-tickets-button").addEventListener("click",buyTicket)

const ticketsBought=document.querySelector("#tickets-bought")
const exhibitTitle=document.querySelector("#exhibit-title")
const exhibitDescription=document.querySelector("#exhibit-description")
const exhibitImage=document.querySelector("#exhibit-image")

function renderExhibit(exhibit){
    exhibitTitle.textContent=exhibit.title
    ticketsBought.textContent=`${exhibit.tickets_bought} tickets bought`
    exhibitDescription.textContent=exhibit.description
    exhibitImage.src=exhibit.image
    exhibit.comments.forEach(comment=>renderComment(comment))
}

function renderComment(comment){
    const p=document.createElement("p")
    p.textContent=comment
    document.querySelector("#comments-section").append(p)
}

function addComment(event){
    event.preventDefault()
    //const newComment=document.querySelector("#comment-input").value
    renderComment(event.target["comment-input"].value)
    event.target.reset()
}

function buyTicket(){
    const curNumTicketsBought=parseInt(ticketsBought.textContent)+1
    ticketsBought.textContent=`${curNumTicketsBought} tickets bought`
}
