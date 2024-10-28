let miPromesa = new Promise((resolve, reject) => {
  console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
  setTimeout(() => {
    resolve("Hola");
  }, 3000);
});

// miPromesa
//   .then((value) => console.log(value))
//   .catch((err) => console.error(err));

//async await

// async function myFunc() {
//   const value = await miPromesa;
//   console.log(value);
// }

const myFunc2 = async () => {
  try {
    //.then
    const value = await miPromesa;
    console.log(value);
  } catch (error) {
    //.catch
    console.error(error);
  }
};

// myFunc2();

// function getPosts() {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
// }
const titlesDiv = document.querySelector(".posts");
// console.log(titlesDiv);

async function getPosts() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    titlesDiv.innerHTML = "Adiós";
    // console.log(res.data[0].title);
    res.data.forEach((element) => {
    //   console.log(element.title);
      titlesDiv.innerHTML += `<p>Title: ${element.title} </p>`;
    });
  } catch (error) {
    console.error(error);
  }
}

getPosts();
