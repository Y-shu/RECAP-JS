// CLONING 
var user = {
    name:"Asus"
}
var admin={};
// copying all user properties in to admin
for (var key in user){
    admin[key]=user[key];
}
console.log(admin);
admin.name="Lenovo";
console.log(admin);

// MERGING
var usr={
    name:"Krishna"
}
var usr1={
    canView:true,
}
var usr2={
    canEdit:false,
}
Object.assign(usr,usr1,usr2);
console.log(usr);

