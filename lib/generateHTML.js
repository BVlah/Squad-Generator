const managerHTML = (manager) => {
    return `
    <div class= col-4>
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h5>Manager</h5>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
};

const engineerHTML = (engineer) => {
    return `
    <div class= col-4>
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h5>Engineer</h5>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `
};

const internHTML = (intern) => {
    return `
    <div class= col-4>
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h5>Intern</h5>
            </div>
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

const pageHTML = (cardHTML) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
            <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
            <link rel="stylesheet" href="../dist/style.css" />
            <title>Document</title>
        </head>
        <body>
            <header>
                <nav class="navbar" id="navbar"></nav>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="employee-cards">
                    ${cardHTML}
                    </div>
                </div>
            </main>
        </body>
    </html>
    `
};

const createCards = (data) => {
    cardsArr = [];

    for (let i = 0; i < data.length; i++) {
        const role = data[i].getRole();

        if (role === 'Manager') {
            const managerCard = managerHTML(data[i]);
            cardsArr.push(managerCard);
        };
        if (role === 'Engineer') {
            const engineerCard = engineerHTML(data[i]);
            cardsArr.push(engineerCard);
        };
        if (role === 'Intern') {
            const internCard = internHTML(data[i]);
            cardsArr.push(internCard);
        };
    };

    const cardHTML = cardsArr.join('');

    const generatePage = pageHTML(cardHTML);
    return generatePage;
};

module.exports = createCards;