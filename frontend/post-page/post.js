const createSingleMediaPostElement = async (src)=>{
    const mainContent = document.querySelector('div.main-content');
    const postContainer = document.createElement('div')
    const postTitleBar = createPostTitleBar({title: 'Blue fox chip land gopher jugging yes three meat olive doorway feces picbun', username: 'testUser08'});
    const postInteractionBar = document.createElement('div');
    const postMessageBar = document.createElement('div');
    const postSideBar = document.createElement('div');
    const postMediaContainer = document.createElement('div');
    const postSingleMedia = document.createElement('img');
    // const postFoot = document.createElement('div');

    postContainer.classList.add('post-container');

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

    await sleep(100);
    postContainer.style.width = postSingleMedia.width + 180  + 'px';

    // postFoot.style.width = postMedia.width + 'px';
    // postHead.style.width = postMedia.width + 'px';
    // postSideBar.style.height = postMedia.height + 'px';
    
}


// createSingleMediaPostElement('https://i.imgur.com/uqivNJD.jpg');

createSingleMediaPostElement('../../img/test.jpg');



