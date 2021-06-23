const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded, json } = require('body-parser');
const { body, validationResult, check } = require('express-validator');
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
let connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    database:'bgm',
    user:'root',
    password:''
  })
  
  connection.connect((err)=>{
    if(!err)
    console.log("Connection Established Successfully");
    else
    console.log("Connected Failed!"+JSON.stringify(err,undefined,2));
  })

  app.get('/',(req,res) => {
    res.send("Welcome to node JS");
  })

//   Item Table API 
  app.get('/items', (req,res)=>{
    connection.query('SELECT * FROM item',  (error, results, fields)=> {
      if (!error)
          res.send(results)
          else
          console.log(error);
      });
  })
   app.get('/item/:id', (req ,res) =>{
     connection.query('select * from item where item_id = ?',[req.params.id],(err,rows)=>{
       if(!err)
       res.send(rows)
       else
       console.log(err);
     })
   });  
   app.get('/itemlist',(req,res)=>{
     connection.query('select item_id,item_name from item',(err,result)=>{
       if(!err)
       res.send(result)
       else
       console.log(err);
     })
   })
   app.get('/itemvalue/:id', (req ,res) =>{
    connection.query('select item_price from item where item_id = ?',[req.params.id],(err,rows)=>{
      if(!err)
      res.send(rows)
      else
      console.log(err);
    })
  });     
  
  app.post('/item',
  check('itemname').matches(/^[a-zA-Z0-9\b\s\x28-\x29\x2D]+$/).withMessage("Item name must be character"),
  check('itemmake').matches(/^[a-zA-Z\b\s]+$/).withMessage("Item make must be character"),
  check('itemprice').matches(/^[0-9]+$/).withMessage("Item Price must be digit"),
  (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else{
          let { itemname, itemmake, itemprice} = req.body;
          connection.query('INSERT INTO item(item_name, item_make, item_price) VALUES(?,?,?)',[itemname,itemmake,itemprice],(error,results,fields)=>{
              if(!error)
              res.send(results)
              else
              console.log(error);
          })
       }
  });

//   Item Table API End 

// Vendor table API 
  app.get('/vendors', (req,res)=>{
    connection.query('SELECT * FROM vendor',  (error, results, fields)=> {
      if (!error)
          res.send(results)
          else
          console.log(error);
      });
  })
   app.get('/vendor/:id', (req ,res) =>{
     connection.query('select * from vendor where vendor_id = ?',[req.params.id],(err,rows)=>{
       if(!err)
       res.send(rows)
       else
       console.log(err);
     })
   });  
   app.get('/vendorlist',(req, res)=>{
     connection.query('select vendor_id,vendor_name from vendor',(err, result)=>{
       if(!err)
       res.send(result);
       else
       console.log(err);
     })
   })
   app.post('/vendor',
   check('vname').matches(/^[a-zA-Z\b\s]+$/).withMessage('Vendor name must be character'),
   check('vmobile').matches(/^[0-9\b]+$/).withMessage('Vendor mobile must be numeric'),
   check('vaddress').matches(/^[a-zA-Z\b\s]+$/).withMessage('Vendor address must be character'),
   (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else{
          let { vname, vmobile, vaddress} = req.body;
          connection.query('INSERT INTO vendor(vendor_name, vendor_mobile, vendor_address) VALUES(?,?,?)',[vname, vmobile, vaddress],(error,results,fields)=>{
              if(!error)
              res.send(results)
              else
              console.log(error);
          })
        }
  });

//   vendor table api end 

// order table api 

app.get('/orders', (req,res)=>{
    connection.query('SELECT * FROM ordertable',  (error, results, fields)=> {
      if (!error)
          res.send(results)
          else
          console.log(error);
      });
  })
   app.get('/order/:id', (req ,res) =>{
     connection.query('select * from ordertable where vendor_id = ?',[req.params.id],(err,rows)=>{
       if(!err)
       res.send(rows)
       else
       console.log(err);
     })
   });
   app.post('/order',
   check('poid').matches(/^[0-9\b]+$/).withMessage('POID must be digit'),
  //  check('podate').matches().withMessage('PODATE must be in digit'),
   check('iqty').matches(/^[0-9\b]+$/).withMessage('Item QTY must be digit'),
  //  check('ivalue').matches().withMessage('Item Value must be digit'),
  //  check('dod').matches().withMessage('Date Of Delivery contains only digit'),
  //  check('doi').matches().withMessage('Date of Delivery contains only digit'),
   check('wyears').matches(/^[0-9\b]+$/).withMessage('Warranty in Years must be digit'),
  //  check('wupto').matches().withMessage('Warranty upto contains only digit'),
   (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else{
          let { poid,podate,iqty,ivalue,dod,doi,wyears,wupto,vendorid,itemid,vname,iname} = req.body;
          connection.query("INSERT INTO ordertable(po_id, po_date, item_qty, item_value, dod, doi, wyears, wupto, vendorid, itemid,vendor_name,item_name) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[poid,podate,iqty,ivalue,dod,doi,wyears,wupto,vendorid,itemid,vname,iname],(error,results,fields)=>{
              if(!error)
              res.send(results)
              else
              console.log(error);
          })
        }
    // console.log(poid+podate+iqty+ivalue+dod+doi+wyears+wupto+vendorid+itemid);
  });

  app.get('/orderexpdate',(req,res)=>{
    connection.query('SELECT item_name,wupto FROM ordertable',  (error, results, fields)=> {
      if (!error)
          res.send(results)
          else
          console.log(error);
      });
  });


// order table api end 


app.listen(3001,()=>{
    console.log("Welcome to Node JS");
})
