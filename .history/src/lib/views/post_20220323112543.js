import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";
import { createPost, getAllPost } from "../../firebase/firebaseConfig.js";
//import db from '../../firebase/firebaseConfig.js'

export const Post = async() => {
        //const user = getUser();
        const divPublication = document.createElement("div");
        divPublication.classList.add("post-container");
        const view = `
    <main>
        <div id='addElement'>
            <label for="textarea">Title of the book </label>
            <textarea name="textarea" id="textarea" cols="30" rows="10">Write a comment...</textarea>
             <div class="btn-add">
               <button type="button" id="addPost" >Add</button>
              </div>
            </div>
        <div>
            <p id="email"></p>
        </div>
        /*<div id="add-post">
            <button type="button" id="showPost">addpost</button>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M12 8v4m0 0v4m0-4h4m-4 0H8"/><circle cx="12" cy="12" r="10"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"/></svg>
        </div>
        <div>
            <button type="button" id="showText">addtext</button>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="rgba(245, 245, 245, 0.9607843137254902)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21h18M12.222 5.828L15.05 3L20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="rgba(245, 245, 245, 0.9607843137254902)" stroke-linejoin="round" stroke-width="1.5" d="M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608c-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274l.265-.274A5.612 5.612 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z"/></svg>
        </div>*/
    </main>`;

        divPublication.innerHTML = view;
        divPublication.appendChild(header());
        divPublication.appendChild(nav());

        //btn addPost
        const btnAddPost = divPublication.querySelector("#addPost");
        btnAddPost.addEventListener("click", async(event) => {
            event.preventDefault();
            //almacena el comentario
            const publication = divPublication.querySelector("#textarea").value;
            console.log(publication);
            //llamar a createpost
            await createPost(publication);
        });
        const allpost = await getDocs(collection(db, "post"));
        allpost.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    await getAllPost()

                    //window.location.hash = '#/post';
                    return divPublication;
                };