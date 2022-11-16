const html = (appendcoworkers) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="./data.js"></script>
        <link rel="stylesheet" href="./style.css" />
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>Team Profile Generator</h1>
        </header>
        <main>
            <div class="co-workers_wrapper">
                ${appendcoworkers}
            </div>
        </main>
        <script defer>
            const coworker_wrapper = document.querySelector(".co-workers_wrapper");
            coworker_wrapper.addEventListener("click", (e) => {
                if (e.target.matches(".view-profile")) {
                    const container = e.target.closest(".co-worker");
                    container.classList.toggle("active");
                }
            });
        </script>
    </body>
</html>
`;

module.exports = function template(cardsetup) {
   const cards =  cardsetup.reduce((prev,{ name, profession, ...Details })=>
    prev + `<div class="co-worker">
                <div class="card">
                    <div class="front">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                            class="profile-picture"
                        />
                        <p class="name">${name}</p>
                        <p class="profession">${profession}</p>
                        <div class="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sit atque, velit provident
                            veniam quam odit
                        </div>
                        <a href="#" class="view-profile">View Info</a>
                    </div>
                    <div class="back">
                        ${console.log(Details)??
                            Object.entries(Details).reduce((prev, [key,value]) => {
                            return prev + `<span>${key}  ${value}</a></span>`;
                        }, "")}
                        <a href="#" class="view-profile">View Profile</a>
                    </div>
                </div>
            </div>`,'')
            console.log(cards)
    console.log(html(cards))
    return html(cards)
};
