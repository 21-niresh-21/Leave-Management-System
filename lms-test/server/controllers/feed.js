exports.getPosts = (req,res,next) =>{
    res.status(200).json({
        posts: [{title:'first post',content:'this is post'}]
    });
};

exports.createPost = (req,res,next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        messsage:'post created success',
        post : { id: 'cool'}
    });
};