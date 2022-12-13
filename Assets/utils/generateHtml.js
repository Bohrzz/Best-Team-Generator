function generateHtml(teamArr) {
  console.log("generating team...", teamArr);
  const teamHtml = teamArr.map((member) => {
    if (member instanceof Engineer) {
      return `
 
    <div class="card">
      <div class="card-content">
    <h4>${member.getName()}</h4>


          <div class="media-content">
            <p class="title is-4">${member.getUsername()}</p>
            <p class="title is-4">${member.getUsername()}</p>
            <p class="subtitle is-6">${member.getName()}</p>
          </div>
        </div>
        <div class="content">
          <pre>created @:${new Date()}</pre>
        </div>
      </div>
    </div>
    

        
        
        `;
    }
  });

  return teamHtml.forEach((element) => {
    return `
               <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.0/css/bulma.css"/>
    <title>Document</title>
</head>
<body>
    ${element.join("")}

    </body>
</html>
    
    
    
    `;
  });
}

module.exports = { generateHtml };
