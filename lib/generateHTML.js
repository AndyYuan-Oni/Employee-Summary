function generateMainHTML(employeeHTML) {

    return `<!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <title>Main</title>
        <style>
            .landing {
                height: 20%;
                width: 100%;
                text-align: center;
                padding: 5vh 0;
            }
            
            .card {
                margin: 0 auto;
            }
        </style>
    </head>
    
    <body>
        <header class="bg-danger text-white">
            <div class="landing align-middle main">
                <h1>My Team</h1>
            </div>
        </header>
    
    
        <div class="container bg-grey pt-5">
            <div class="row px-auto">
                ${employeeHTML}
    
            </div>
    
        </div>
    
    
    
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
    
    </html>`
};

function generateManagerHTML(data) {
    return `<div class="col-sm" id="manager">
    <div class="card mb-3 shadow" style="width: 15rem;">
        <div class="card-header bg-primary text-white">
            <h3>${data.name}</h3>
            <h4><i class="fas fa-mug-hot"></i> Manager</h4>
        </div>
        <div class="card-body bg-light">
            <table class="table table-bordered bg-white">
                <tr>
                    <td scope="col">ID:${data.id}</td>
                </tr>
                <tr>
                    <td scope="col">Email:${data.email}</td>
                </tr>
                <tr>
                    <td scope="col">Office:${data.office}</td>
                </tr>
            </table>
        </div>
    </div>
</div>`
};

function generateEngineerHTML(data) {
    return `<div class="col-sm" id="engineer">
    <div class="card mb-3 shadow" style="width: 15rem;">
        <div class="card-header bg-primary text-white">
            <h3>${data.name}</h3>
            <h4><i class="fas fa-glasses"></i> Engineer</h4>
        </div>
        <div class="card-body bg-light">
            <table class="table table-bordered bg-white">
                <tr>
                    <td scope="col">ID:${data.id}</td>
                </tr>
                <tr>
                    <td scope="col">Email:${data.email}</td>
                </tr>
                <tr>
                    <td scope="col">Github:${data.github}</td>
                </tr>
            </table>
        </div>
    </div>
</div>`
};

function generateInternHTML(data) {
    return `<div class="col-sm" id="intern">
    <div class="card mb-3 shadow" style="width: 15rem;">
        <div class="card-header bg-primary text-white">
            <h3>${data.name}</h3>
            <h4><i class="fas fa-user-graduate"></i> Intern</h4>
        </div>
        <div class="card-body bg-light">
            <table class="table table-bordered bg-white">
                <tr>
                    <td scope="col">ID:${data.id}</td>
                </tr>
                <tr>
                    <td scope="col">Email:${data.email}</td>
                </tr>
                <tr>
                    <td scope="col">School:${data.school}</td>
                </tr>
            </table>
        </div>
    </div>
</div>`
};

module.exports = {
    generateMainHTML: generateMainHTML,
    generateManagerHTML: generateManagerHTML,
    generateEngineerHTML: generateEngineerHTML,
    generateInternHTML: generateInternHTML
};