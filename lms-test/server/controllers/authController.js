
exports.postSignUp = (req, res, next) => {
  const {
    name,
    domainName,
    year,
    address1,
    address2,
    state,
    country,
    pincode,
    phone,
    email,
    password,
  } = req.body;
  organisation.findOne({domainName:domainName}).then((userRow)=>{
        if(userRow){
            return res.redirect('/signup')
        }
        organisation.create(req.body).then(()=>
          {console.log(req.body)}
        ).then((result=>{
          res.redirect('/login');
        })).catch((err)=>{
          console.log(err);
        })
  })

};

