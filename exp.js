// 1st way to export module
/*
const name = "Omkar S";

module.exports.ddd = name;
*/

// 2nd way 

exports.ddd = {
    name : 'Omkar Sawant',
    add: function(){
        return 5*6
    }
};
