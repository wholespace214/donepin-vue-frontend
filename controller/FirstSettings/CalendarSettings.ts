import useCalendarAPI from "~/api/Calendar";
import calendarDataComponent from "~/data_component/Calendar";
import { format, getDaysInMonth } from "date-fns";

export default function useCalendarSettings() {
    const { calendarData } = calendarDataComponent();

    const { getCalendar } = useCalendarAPI();

    const getCalendarData = (param: any) =>
        new Promise(resolve => {
            getCalendar(param).then((res: any) => {
                let fullMonth: any[] = [];
                let { data } = res.data;
                console.log("calendar >>>>>>>>>", data)
                data.forEach((element: any) => {
                    element.attendence.forEach((item: any) => {
                        // let daysInMonth = format(new Date(item.createdAt), 'LLLL');
                        // console.log("month", getDaysInMonth(new Date(item.createdAt)))
                        item.totalDays = getDaysInMonth(new Date(item.createdAt));

                        if (item.createdAt) {

                        }
                        item.daysArr = []

                        fullMonth.push(item)

                    })


                })
                calendarData.value = data
                calendarData.value = data
                console.log("calendarData>>>>>>>>>>>", calendarData)

                // console.log("fullMonth", fullMonth)
                resolve(true);
            });
        });

    return { getCalendarData };
}


// data.membersId.forEach((element: any) => {
//     const member = findMember(element.memberEmail);
//     const allGroup: any = [];

//     // if (element.groupId.length > 0) {
//     //   const group = element.groupId;

//     //   group.forEach((element: any) => {
//     //     getDataGroup(element).then(res => {
//     //       console.log(res);
//     //     });
//     //   });
//     // } else {
//     //   return;
//     // }
//     element.isEdit = false;
//     element.group = allGroup;
//     element.memberName = `${member.firstName} ${member.lastName}`;
//     element.initial = `${member.firstName.charAt(0)}${member.lastName.charAt(0)} `;
//     element.role = {
//         roleType: findRoles(element.memberJobRole),
//         rolId: element.memberJobRole
//     };

//     allTeam.push(element);
// });
