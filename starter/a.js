//
//                        const second = () => {
//                            setTimeout(() => {
//                                console.log('Second');
//                            }, 0);
//                        };

//                        const first = () => {
//                            console.log('hey There');
//                            second();
//                            console.log('The End');
//                        };
//                        first();
//
//
// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [123, 234, 345, 456, 567];
//         console.log(recipeID);

//         setTimeout(
//             (id) => {
//                 const recipe = {
//                     title: 'Fresh tomato pasta',
//                     publisher: 'Jonas',
//                 };
//                 console.log(`${id}: ${recipe.title}`);
//                 setTimeout(
//                     (publisher) => {
//                         const recipe2 = {
//                             title: 'Italian Pizze',
//                             publisher: publisher,
//                         };
//                         console.log(`${recipe2.title} : ${publisher}`);
//                     },
//                     1500,
//                     recipe.publisher
//                 );
//             },
//             1500,
//             recipeID[2]
//         );
//     }, 1500);
// }
// getRecipe();
//

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([123, 234, 345, 456, 567]);
//     }, 1500);
// });

// const getRecipe = (recID) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             (ID) => {
//                 const recipe = {
//                     title: 'Fresh tomato pasta',
//                     publisher: 'Jonas',
//                 };
//                 resolve(`${ID}:${recipe.title}`);
//             },
//             1500,
//             recID
//         );
//     });
// };

// const getRelate = (publisher) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             (pub) => {
//                 const recipe = {
//                     title: 'Italian Pizze',
//                     publisher: 'Jonas',
//                 };
//                 resolve(`${pub} : ${recipe.title}`);
//             },
//             1500,
//             publisher
//         );
//     });
// };

// getIDs
//     .then((IDs) => {
//         console.log(IDs);
//         return getRecipe(IDs[2]);
//     })
//     .then((recipe) => {
//         console.log(recipe);
//         return getRelate('Jonas');
//     })
//     .then((recipe) => {
//         console.log(recipe);
//     })
//     .catch((error) => {
//         console.log('Error');
//     });

// async function getRecipeAW() {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelate('Jonas');
//     console.log(related);

//     return recipe;
// }
// getRecipeAW().then((result) => console.log(`${result} is the best ever!!`));

fetch(
    `https://corsproxy.github.io//https://www.metaweather.com/api/location/2487956/`
)
    .then((a) => {
        console.log(a);
        return a.json();
    })
    .then((d) => {
        console.log(d);
    })
    .catch((error) => {
        console.log(error);
    });
