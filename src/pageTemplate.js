// Manager Card
const manager = managerData => {
    return `
    <div id="${managerData.getRole()}-card" class= "card">
        <div class="card-body name-role manager-name">
            <h2 class="card-title">${managerData.getName()}</h2>
            <h3 class="card-subtitle">Title: ${managerData.getRole()}</h3>
        </div>

        <div class="card-body employee-info">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerData.getId()}</li>
                <li class="list-group-item">Email: ${managerData.getEmail()}</li>
                <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `}

// Engineer Card
const engineer = engineerData => {
    return `
    <div id="${engineerData.getRole()}-card" class= "card">
        <div class="card-body name-role engineer-name">
            <h2 class="card-title">${engineerData.getName()}</h2>
            <h3 class="card-subtitle">Title: ${engineerData.getRole()}</h3>
        </div>

        <div class="card-body engineer-info">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineerData.getId()}</li>
                <li class="list-group-item">Email: ${engineerData.getEmail()}</li>
                <li class="list-group-item">GitHub: <a href="http://www.github.com/${engineerData.getGithub()}">GitHub</a></li>
            </ul>
        </div>
    </div>
    `}

    // Intern Card
const intern = internData => {
    return `
    <div id="${internData.getRole()}-card" class= "card" style="width: 18rem;">
        <div class="card-body engineer-name">
            <h2 class="card-title">${internData.getName()}</h2>
            <h3 class="card-subtitle">Title: ${internData.getRole()}</h3>
        </div>

        <div class="card-body engineer-info">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${internData.getId()}</li>
                <li class="list-group-item">Email: ${internData.getEmail()}</li>
                <li class="list-group-item">School: ${internData.getSchool()}</li>
            </ul>
        </div>
    </div>
    `}

    const employeesInfo = employeesArr => {
        let employeeHtml = ''

        for ( i = 0; i < employeesArr.length; i++) { 
            if (employeesArr[i].getRole() === "Manager"){
                employeeHtml = employeeHtml + manager(employeesArr[i])
            }
            if (employeesArr[i].getRole() === "Engineer"){
                employeeHtml = employeeHtml + engineer(employeesArr[i])
            }
            if (employeesArr[i].getRole() === "Intern"){
                employeeHtml = employeeHtml + intern(employeesArr[i])
            }
        } return employeeHtml
    }

    // pageTemp

    const pageTemplate = data => {
        return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Dream Team</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
                <link rel="stylesheet" href="./style.ss"><source src"../pageTemplate.js" type="pageTemplate">
            </head>

            <body>
                <header class="container">
                    <div class="flex justify center dream-team">
                        <h1>The Dream Team</h1>
                    </div>
                </header>

                <main class="container row">
                    <div class="col-sm-4">
                    ${employeesDiv(data)}
                    
                </main>
            </body>
        </html>
`
}

module.exports = pageTemplate;