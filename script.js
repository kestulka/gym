// function generateCard(title, imageSrc, gifSrc, text) {
//   document.write(`
//       <div class="col-md-4">
//         <div class="card" style="width: 100%">
//           <h5 class="card-title">${title}</h5>
//           <img
//             src="${imageSrc}"
//             class="img-fluid rounded"
//             style="width: 100%; height: 20rem"
//           />
//           <img
//             src="${gifSrc}"
//             class="img-fluid rounded"
//             style="width: 100%; height: 20rem"
//           />
//           <div class="card-body">
//             <p class="card-text">
//               text: ${text}
//             </p>
//           </div>
//         </div>
//       </div>
//     `);
// }

// generateCard(
//   "Chest press",
//   "https://hips.hearstapps.com/hmg-prod/images/incline-barbell-bench-press-640731bc88b98.jpg",
//   "https://media2.giphy.com/media/cKPsQVloxwsPgbpamd/giphy.gif?cid=ecf05e474hujy4gxyab0rnnseqafdqxpxismmtj0ui94y3tj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// );

// generateCard(
//   "Card 2",
//   "https://hips.hearstapps.com/hmg-prod/images/incline-barbell-bench-press-640731bc88b98.jpg",
//   "https://media2.giphy.com/media/cKPsQVloxwsPgbpamd/giphy.gif?cid=ecf05e474hujy4gxyab0rnnseqafdqxpxismmtj0ui94y3tj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// );

// generateCard(
//   "Card 3",
//   "https://hips.hearstapps.com/hmg-prod/images/incline-barbell-bench-press-640731bc88b98.jpg",
//   "https://media2.giphy.com/media/cKPsQVloxwsPgbpamd/giphy.gif?cid=ecf05e474hujy4gxyab0rnnseqafdqxpxismmtj0ui94y3tj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// );
// generateCard(
//   "Card 3",
//   "https://hips.hearstapps.com/hmg-prod/images/incline-barbell-bench-press-640731bc88b98.jpg",
//   "https://media2.giphy.com/media/cKPsQVloxwsPgbpamd/giphy.gif?cid=ecf05e474hujy4gxyab0rnnseqafdqxpxismmtj0ui94y3tj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// );
// generateCard(
//   "Card 3",
//   "https://hips.hearstapps.com/hmg-prod/images/incline-barbell-bench-press-640731bc88b98.jpg",
//   "https://media2.giphy.com/media/cKPsQVloxwsPgbpamd/giphy.gif?cid=ecf05e474hujy4gxyab0rnnseqafdqxpxismmtj0ui94y3tj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// );

function generateCard(title, imageSrc, gifSrc, text) {
  return `
      <div class="col-md-4">
        <div class="card" style="width: 100%">
          <h5 class="card-title">${title}</h5>
          <img
            src="${imageSrc}"
            class="img-fluid rounded"
            style="width: 100%; height: 20rem"
          />
          <img
            src="${gifSrc}"
            class="img-fluid rounded"
            style="width: 100%; height: 20rem"
          />
          <div class="card-body">
            <p class="card-text">
              text: ${text}
            </p>
          </div>
        </div>
      </div>
    `;
}
