const createSingleMediaPostElement = async (src)=>{
    const mainContent = document.querySelector('div.main-content');
    const postContainer = document.createElement('div')
    const postTitleBar = document.createElement('div');
    const postInteractionBar = document.createElement('div');
    const postMessageBar = document.createElement('div');
    const postSideBar = document.createElement('div');
    const postMediaContainer = document.createElement('div');
    const postSingleMedia = document.createElement('img');
    // const postFoot = document.createElement('div');

    postContainer.classList.add('post-container');
    postTitleBar.classList.add('post-title-bar');
    postInteractionBar.classList.add('post-interaction-bar')
    postMessageBar.classList.add('post-message-bar');
    postMediaContainer.classList.add('post-media-container');
    postSingleMedia.src = src;
    postSingleMedia.classList.add('post-single-media');
    
    postContainer.append(postTitleBar);
    postContainer.append(postInteractionBar);
    postContainer.append(postMediaContainer);
    postMediaContainer.append(postSingleMedia);
    postContainer.append(postMessageBar);
    postContainer.style.width = postSingleMedia.width + 180  + 'px';
    mainContent.append(postContainer);

    await sleep(10);
    postContainer.style.width = postSingleMedia.width + 180  + 'px';

    // postFoot.style.width = postMedia.width + 'px';
    // postHead.style.width = postMedia.width + 'px';
    // postSideBar.style.height = postMedia.height + 'px';
    
}


// createSingleMediaPostElement('https://i.imgur.com/uqivNJD.jpg');

createSingleMediaPostElement('https://i.imgur.com/OOEG3w9.jpg');


