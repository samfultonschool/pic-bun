const createPostContainer = ()=>{
    const postContainer = document.createElement('div');
    postContainer.classList.add('post-container');
    return postContainer;
}


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





const createPostMessageBar = ()=>{
    const messageBar = document.createElement('div');
    messageBar.classList.add('post-message-bar');
    const messageBarHead = document.createElement('div');
    messageBarHead.classList.add('post-message-bar-head');
    const messageBarHeadTitle = document.createElement('div');
    messageBarHeadTitle.classList.add('post-message-bar-head-title');
    messageBarHeadTitle.textContent = 'Live Chat';
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
    

    messageBarHead.append(messageBarHeadTitle)
    messageBar.append(messageBarHead);
    messageBar.append(messageContainer);
    return messageBar
}



const createMediaContainer = ({src})=>{
    const postMediaContainer = document.createElement('div');
    postMediaContainer.classList.add('post-media-container');
    
    const postSingleMedia = document.createElement('img');
    postSingleMedia.src = src;
    postSingleMedia.classList.add('post-single-media');

    postMediaContainer.append(postSingleMedia);
    return postMediaContainer;
}