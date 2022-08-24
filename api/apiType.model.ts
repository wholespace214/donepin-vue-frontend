interface createTeam {
  memberEmail: string;
  memberJobRole: string;
  workingTime?: string;
  teamMemberStatus?: string | any;
  hoursPerWeek?: number;
  yearlyVacation?: number;
  vacationResetMonth?: string;
  workingDays?: number;
  addMemberAttendance?: boolean;
}

interface createGroup {
  groupName: any;
}

interface modalDelete {
  status: boolean;
  fromComponent: string;
}

export { createTeam, createGroup, modalDelete };
