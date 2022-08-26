//For testing//

require("dotenv").config();
const knex = require("knex")({
    // CODE HERE
    client: 'postgresql',
    connection: {
        database: "postgres",
        user: "postgres",
        password: "password",
        dateStrings: true
    },
});

let in_time = "";
let out_time = "";
let employee_id = "";
let inDate = [];
let outdate = "";
in_date_result = "";

// below return it as correct date, 19->20, 20->21

// let query = knex.select("employee_id", "in_date").from("attendance")
//     .where("employee_id", 1)
//     .orderBy('employee_id', 'asc');

// query.then((rows) => {
//     // console.log(rows); //!PROBLEM HERE! it return 19 & 20, therefore, I changed it to 20 & 21 below
//     for (let j = 0; j < rows.length; j++) {
//         let value = (rows[j].in_date);

//         value = value.toString();
//         console.log(value);

//         const date = value.split(' ', 4).join(' ');
//         const time = value.split(' ').slice(4).join(' ').split(' ')[0];

//         let [month, day, year] = date.split(' ').slice(1).join(' ').split(' ');

//         const [hours, minutes, seconds] = time.split(':');
//         let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//         month = (months.indexOf(month) + 1)
//         let alteredDate = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes), Number(seconds)));

//         // console.log(alteredDate);
//     }
// }).catch((error) => {
//     console.log(error);
// });




// id: "001",//staff_id
// name: "Author's Birthday",//"Punctual", "Late", "Absence"
// description: "Author's note: Thank you for using EvoCalendar! :)",//additional information e.g.late/absence reason
// date: "2022/08/24", //default format: February/15/1999  ,or  [ today.getMonth() + 1 + "/" + week_date.start + "/" + today.getFullYear(), today.getMonth() + 1 + "/" + week_date.end + "/" + today.getFullYear() ]
// type: "birthday", //"punctual", "late", "absence"

//e.g. id:employee_id, name:"punctual", description:"08:50:50", date:"2022/08/24", type""punctual"
// let command = async function (id) {
//     //acquire in_time -> name = type
//     let name = [];
//     let query_time = await knex
//         .select("in_time")
//         .from("attendance")
//         .where("employee_id", 3)
//         .orderBy("in_date", "asc")
//         .then((rows) => {
//             try {
//                 for (i = 0; i < rows.length; i++) {
//                     if (rows[i].in_time == null) {
//                         name.push("Absence");
//                     } else if (((rows[i].in_time).split(':')[0]) < 9 || ((rows[i].in_time).split(':')[0]) == 9 && ((rows[i].in_time).split(':')[1]) == 0 && ((rows[i].in_time).split(':')[2]) == 0) {
//                         name.push("Punctual");
//                     } else if ((((rows[i].in_time).split(':')[0]) >= 9) && (((rows[i].in_time).split(':')[1]) > 0) && (((rows[i].in_time).split(':')[2]) == 0)) {
//                         name.push("Late");
//                     } else {
//                         name.push("Absence");
//                     }
//                 }
//             } catch {
//                 console.log("Employee Service Error - query_time");
//             }
//         });
//     // console.log(name);


//     //acquire in_time & out_time description
//     let description = [];
//     let query_in_time = await knex
//         .select("in_time", "out_time")
//         .from("attendance")
//         .where("employee_id", 3)
//         .orderBy("in_date", "asc")
//         .then((rows) => {
//             try {
//                 console.log(rows);
//                 for (j = 0; j < rows.length; j++) {
//                     if (rows[j].in_time == null) {
//                         description.push("Absence");
//                     } else {
//                         description.push(`IN:${rows[j].in_time}  OUT:${rows[j].out_time}`);
//                     }
//                 }
//             } catch {
//                 console.log("Employee Service Error - query_in_time");
//             }
//         });
//     // console.log(description);

//     //acquire date
//     let queryDate = await knex.select("in_date").from("attendance")
//         .where("employee_id", 1)
//         .orderBy('in_date', 'asc')
//         .then((rows) => {

//             let value = [];
//             let date = [];
//             let time = [];
//             let alteredDate = [];
//             let resultDate = [];
//             // console.log(rows); //!PROBLEM HERE! it return 19 & 20, therefore, I changed it to 20 & 21 below
//             for (let j = 0; j < rows.length; j++) {

//                 value.push(rows[j].in_date.toString());

//                 date.push((value[j]).split(' ', 4).join(' '));

//                 time.push(value[j].split(' ').slice(4).join(' ').split(' ')[0]);

//                 let [month, day, year] = date[j].split(' ').slice(1).join(' ').split(' ');

//                 const [hours, minutes, seconds] = time[j].split(':');
//                 let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//                 month = (months.indexOf(month) + 1)
//                 alteredDate.push(new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes), Number(seconds))));
//                 resultDate.push(alteredDate[j].toISOString().split('T')[0]);
//             }
//             // console.log(resultDate);

//         }).catch((error) => {
//             console.log("Employee Service Error - queryDate");
//         });
// }

// command();

let command = async function () {
    // acquire hourly rate
    let summaryObject = {};
    let querysummary = await knex
        .select("hourly_rate", "total_working_hour", "total_salary")
        .from("salary")
        .where("employee_id", 3)
        .then((rows) => {
            try {
                // console.log("Employee Service - hourly rate: " + rows[0].hourly_rate);
                summaryObject.working_hours = rows[0].hourly_rate;
                summaryObject.hourly_rate = rows[0].hourly_rate;
                summaryObject.hourly_rate = rows[0].hourly_rate;
            }
            catch {
                console.log("Employee Service: queryHourlyRate Error");
            }
        });
console.log(summaryObject);
}
command();







//for cal 
// let queryWorkHours = await knex
// .select("in_time", "out_time")
// .from("attendance")
// .where("employee_id", 1)
// .orderBy("id", "asc")
// .then((rows) => {
//     try {
//         let workHoursArray = [];
//         for (i = 0; i < rows.length; i++) {
//             const [hours, minutes, seconds] = (rows[i].in_time).split(':');
//             function convertToSeconds(hours, minutes, seconds) {
//                 return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
//             }
//             workHoursArray.push(parseInt((convertToSeconds(hours, minutes, seconds)) / 60 / 60));
//         }
//         const initialValue = 0;
//         const totalWorkHours = workHoursArray.reduce(
//             (previousValue, currentValue) => previousValue + currentValue,
//             initialValue
//         );
//         // console.log(`Employee Service - total working hours: ${totalWorkHours}`);
//         summaryObject.total_work_hours = totalWorkHours;
//     }
//     catch {
//         console.log("Employee Service queryWorkHours Error");
//     }
// })