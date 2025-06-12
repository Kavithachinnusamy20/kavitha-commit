// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  const database = await central(id)
  console.log(database,id)

  const user = await dbs[database](id)
 console.log(user)

  const extraData = await vault(id)
  console.log(extraData)
  // if(database ==="db1"){

  //   let user = await db1(id)
  //   console.log(user)
  // }
  // else if(database ==="db2"){
  //   let user = await db2(id)
  //   console.log(user)
  // }
  // else if(database ==="db3"){
  //   let user = await db3(id)
  //   console.log(user)
  // }
  // console.log(user)

}

getUserData(7 )