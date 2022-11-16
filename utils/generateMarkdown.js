
function generateMarkdown(data) {
  return `

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Team Profile Generator">
  <title>Team Profile Generator</title>

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style/style.css">

</head>
  
<body>
  <header>
    <div class="content-wrap">
      <h1>My Team</h1>
    </div>
  </header>

  <div class="content-wrap">
    <div class="cards">
      <article class="card">
          <header>
          <h2>${data.manager_name}</h2>
          <span class="material-icons">local_cafe</span>
          <h3>Manager</h3>
      </header>    
      <div class="content">
        <p>${data.manager_employee_id}</p>
        <p>Email: ${data.manager_email}</p>
        <p>Office Number: ${data.manager_office_number}</p>
      </div>
      </article>
      <article class="card">
      <header>
          <h2>${data.engineer_name}</h2>
          <span class="material-icons">developer_mode</span>
          <h3>${data.employee}</h3>
      </header>    
      <div class="content">
        <p>Employee ID: ${data.engineer_id}</p>
        <p>Email: ${data.engineer_email}</p>
        <p>GitHub: ${data.engineer_github}</p>
      </div>
      </article>
      <article class="card">
        <header>
            <h2>${data.intern_name}</h2>
            <span class="material-icons">school</span>
            <h3>${data.employee2}</h3>
        </header>    
        <div class="content">
          <p>Employee ID: ${data.intern_id}</p>
          <p>Email: ${data.intern_email}</p>
          <p>School: ${data.intern_school}</p>
        </div>
      </article> 
    </div>
  </div>

</body>
</html>

`;
}

module.exports = generateMarkdown;
