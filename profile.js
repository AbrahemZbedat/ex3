

/* Group members:-
Abraham Zbedat 213013618
Mohammed Tarabia 213011737
Tamer krakra 314657842  
*/

const express = require('express');
const fs = require('fs').promises;;
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine','ejs');



// Define routes
app.get('/profile',async (req, res) => {
  
   // Extract the id parameter from the query
   const id = req.query.id;

   // Assuming id is sanitized and validated properly



   /********************************************************************************************************** */

   //Title and first pragraph in bio div
   const titleFilePath = path.join(__dirname, 'PRIVATE', id, 'TITLE.TXT');


   const titleContent = await fs.readFile(titleFilePath, 'utf-8');
   const firstPar = titleContent.trim().split('\n');

   const title = titleContent.trim().split('\n')[0];

   app.use(express.static(path.join(__dirname, 'public')));



   const paragraph = firstPar.slice(1).join('\n');

const paragraphWithLinks = paragraph;

   /******************************************************************************************************** */
   //Profiles images
   // Construct paths for the images based on the id
   const bannerImagePath = `${id}/banner.png`;
   const profileImagePath = `${id}/profile.png`;
   const image1ImagePath = `${id}/image1.png`;
   const image2ImagePath = `${id}/image2.png`;


   
/********************************************************************************************************** */
   //Friends images
   const imageFriend1Path = `${id}/friend1.png`;
   const imageFriend2Path = `${id}/friend2.png`;
   const imageFriend3Path = `${id}/friend3.png`;
   const imageFriend4Path = `${id}/friend4.png`;
   const imageFriend5Path = `${id}/friend5.png`;
   const imageFriend6Path = `${id}/friend6.png`;
   const imageFriend7Path = `${id}/friend7.png`;
   const imageFriend8Path = `${id}/friend8.png`;
/********************************************************************************************************** */







   


/**************************************************************************************************************************************** */

//Bio div
const bioFilePath = path.join(__dirname, 'PRIVATE', id, 'BIO.TXT');
const bioContent = await fs.readFile(bioFilePath, 'utf-8');


  // Split the processed bio content into lines
const bioLines = bioContent.trim().split('\n');


const bioInfo = {};
bioLines.forEach(line => {
    let [key, ...valueArr] = line.split(':'); // חילוץ המפתח והערך

    const trimmedKey = key.trim();
    let trimmedValue = valueArr.join(':').trim(); 

    bioInfo[trimmedKey] = trimmedValue;
});
/**************************************************************************************************************************************** */

//Endrosment div


          // Read endorsements from TEXT.TXT files
          const endorsementFolder = path.join(__dirname, 'PRIVATE', id);
          const endorsementFiles = await fs.readdir(endorsementFolder);
          const endorsements = [];
  
          for (const file of endorsementFiles) {
              if (file.startsWith('text') && file.endsWith('.txt')) {
                  const filePath = path.join(endorsementFolder, file);
                  const [text, author] = (await fs.readFile(filePath, 'utf-8')).trim().split('\n');
                  endorsements.push({ text, author });
              }
          }


/******************************************************************************************************************************************************* */

   // Render EJS template with the retrieved data
   res.render('profile', { id, bannerImagePath, profileImagePath, image1ImagePath, image2ImagePath, title,paragraph,paragraphWithLinks,bioInfo,imageFriend1Path
,imageFriend2Path,imageFriend3Path,imageFriend4Path,imageFriend5Path,imageFriend6Path,imageFriend7Path,imageFriend8Path,endorsements
});


});



/******************************************************************************************************************************************************* */
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});