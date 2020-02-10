const createPostTitleBar = ({title, username})=>{
    const postTitleBar = document.createElement('div');
    postTitleBar.classList.add('post-title-bar');
    const titleBarDetails = createPostTitleBarDetails({username});
    const postTitle = document.createElement('h1');
    postTitle.classList.add('post-title');
    postTitle.textContent = title;
    postTitleBar.append(titleBarDetails)
    postTitleBar.append(postTitle)

    return postTitleBar;
}

const createPostTitleBarDetails = ({username, viewcount})=>{
    const details = document.createElement('div');
    details.classList.add('title-bar-detaills-container');

    const opProfPic = document.createElement('div');
    opProfPic.classList.add('detaills-op-prof-pic');
    opProfPic.style.backgroundImage = 'url(../../img/test-profile-pic-2.jpg)';

    const opUsername = document.createElement('div');
    opUsername.classList.add('detaills-op-username');
    opUsername.textContent = username;
    
    details.append(opProfPic)
    details.append(opUsername);
    return details;
}