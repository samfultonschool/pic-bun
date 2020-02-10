const createSingleMediaPostElement = async (src)=>{
    const postContainer = createPostContainer();
    const postTitleBar = createPostTitleBar({title: 'Blue fox chip land gopher jugging yes three meat olive doorway feces picbun', username: 'ChloBot00'});
    const postMessageBar = createPostMessageBar();
    const postMediaContainer = createMediaContainer({src});
    
    postContainer.append(postTitleBar);
    postContainer.append(postMediaContainer);
    postContainer.append(postMessageBar);
    document.querySelector('div.main-content').append(postContainer);

    await sleep(50);
    const mediaWidth = postMediaContainer.children[0].width;
    postContainer.style.width = mediaWidth + 180  + 'px';
    
}



// createSingleMediaPostElement('https://i.imgur.com/uqivNJD.jpg');

createSingleMediaPostElement('../../img/test.jpg');



