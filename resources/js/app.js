console.log("Connected")

const buttonElement = document.getElementById('quotebtn');
 const quotebox = document.getElementById('quotebox');
 const author = document.getElementById('author');
 const heading = document.getElementById('headtitle');

         const url = "https://type.fit/api/quotes";
// async/await function 
 async function clickButton (e) {
    //  try object
     try {
        //  assigned variable response to the fetch request of the url
         const response = await fetch(url); 
        //  if statement: response.status is okay, print below
         if(response.status === 200) {
            //  assigned variable jsonResponse to await response.json() (returns a promise with the body text as JSON)
             const jsonResponse = await response.json();
            //  assigned index variable to math random at/uses body text json(jsonResponse)
             let index = Math.floor(Math.random() *jsonResponse.length)  
            //  print out the variable jsonResponse[index] to test
             console.log(jsonResponse[index]);
            //  assigned quoteText variable to jsonResponse[index-has the mathrandom value].text that appear in response.json
             const quoteText = jsonResponse[index].text;
            //  empty <p> will display the repsone.text[random].text(from the json.repsonse)
             quotebox.innerHTML = quoteText;

             const quoteAuthor = jsonResponse[index].author;
            //  author innerHTML will display the random authors + added string
             author.innerHTML = '- ' + quoteAuthor;

            
             buttonElement.innerHTML = "Another Quote!";
             heading.innerHTML = 'Want another quote?'
                
             
              
            //  condition statement when the author is null 
             if (jsonResponse[index].author === null) {
                author.innerHTML = "- "+ "Unknown";   
             } return jsonResponse; 
           
            
         }throw new Error('Request Failed');      
     } catch (error) {
         console.log('Error');
     }

};
buttonElement.addEventListener('click', clickButton);
//  response.status === 200;


// // Bonus Question
// const quotemebtn = document.getElementById('quotemebtn');
// const famousperson = document.getElementById('famous-select');
// const famousChoose = querySelector('select');

// let quoteMeButton = async () => {
//     const selectedAuthor = author.value;
//     let selectedQuote = await clickButton();
//     selectedQuote.forEach( element => {
//         if(element.author === selectedAuthor) {
//             text.innerHTML
//             author.innerHTML = element.author.value;
//         }
//     }

//     )
// };

// quotemebtn.addEventListener('click', quoteMeButton);