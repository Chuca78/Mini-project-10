

function generateMarkdown(data) {
  return `

  <!doctype html>

  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Team Profile Generator">
    <title>Team Profile Generator</title>
  
    <link rel="stylesheet" href="./style.css">
  
  </head>
  
  <body>
      <header>
          <h1>My Team</h1>
      </header>
    
        <section>
          
          <ul>
            <li>${data.manager_name}</li>
            <li>Employee ID: ${data.manager_employee_id}</li>
            <li>Email: ${data.manager_email}</li>
            <li>Office Number: ${data.manager_office_number}</li>
          </ul>
          <ul>
            <li>${data.engineer_name}</li>
            <li>${data.employee}</li>
            <li>Employee ID: ${data.engineer_id}</li>
            <li>Email: ${data.engineer_email}</li>
            <li>GitHub: ${data.engineer_github}</li>
          </ul>
          <ul>
            <li>${data.intern_name}</li>
            <li>${data.employee2}</li>
            <li>Employee ID: ${data.intern_id}</li>
            <li>Email: ${data.intern_email}</li>
            <li>School: ${data.intern_school}</li>
          </ul>
    
      </section>
  
  </body>
  </html>


`;
}

module.exports = generateMarkdown;
