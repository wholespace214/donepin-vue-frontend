<template>
  <div
    :class="openTimeTracker ? ' -translate-x-0' : 'translate-x-full'"
    class="
      bg-white
      w-full
      sm:w-96
      fixed
      flex flex-col
      h-screen
      justify-between
      modal
      overflow-y-auto
      pb-20
      pt-4
      px-5
      right-0
      shadow-md
      top-0
      z-30
      md:pb-4
      duration-500
      ease-in-out
      transform
      transition
    "
    id="add-new-members"
  >
    <div id="top" class="flex flex-col">
      <div class="flex justify-between mb-3" id="title">
        <p class="font-bold mb-0 pb-0">Time Clock</p>
        <button @click="$emit('close')" class="focus:outline-none">
          <img src="@/assets/images/icon-close.svg" />
        </button>
      </div>

      <div class="flex flex-col space-y-10" id="select">
        <div id="time-clock" class="flex justify-center mt-5">
          <v-progress-circular :rotate="-90" :size="250" :width="5" :value="progessNumber" color="rgba(165, 210, 118, 1)">
            <div class="flex space-y-4 justify-center w-full flex-col">
              <span v-if="clickcount === 0 || clickcount === 1 || clickcount === 3" class="capitalize text-center text-black text-opacity-75 text-sm font-semibold"> working </span>
              <span v-else-if="clickcount === 2" class="capitalize text-center text-black text-opacity-75 text-sm font-semibold"> Taking a break </span>

              <div v-if="clickcount === 2" class="flex text-DPORANGE-400 font-semibold text-sm space-">
                <span class="text-[38px] font-black" id="hours">{{ displayHours }}</span>
                <span class="text-[38px] font-black">:</span>
                <span class="text-[38px] font-black" id="minutes">{{ displayMinutes }}</span>
                <span class="text-[38px] font-black">:</span>
                <span class="text-[38px] font-black" id="second">{{ displaySeconds }}</span>
              </div>
              <div v-else class="flex text-DPGREEN-500 font-semibold text-sm space-">
                <span class="text-[38px] font-black" id="hours">{{ displayHours }}</span>
                <span class="text-[38px] font-black">:</span>
                <span class="text-[38px] font-black" id="minutes">{{ displayMinutes }}</span>
                <span class="text-[38px] font-black">:</span>
                <span class="text-[38px] font-black" id="second">{{ displaySeconds }}</span>
              </div>

              <span class="capitalize text-center text-black text-opacity-75 text-sm font-normal"> of {{ totalHours }} hours </span>
            </div>
          </v-progress-circular>
        </div>

        <!-- <Clock /> -->

        <div class="" id="form">
          <v-select color="rgba(165, 210, 118, 1)" class="mt-0" label="Attendance Type" type="text" v-model="selected" :items="attendanceData" item-text="label" item-value="value"></v-select>

          <div v-if="selected === 'Project'" class="grid pt-5 grid-cols-2 gap-4">
            <div class="">
              <v-select color="rgba(145, 201, 89,1)" label="Select Project" class="pt-0"></v-select>
            </div>

            <div class="">
              <v-select class="capitalize pt-1" color="rgba(145, 201, 89,1)" item-color="DPGREEN-500" clearable label="Select Task" dense></v-select>
            </div>
          </div>

          <v-text-field color="rgba(165, 210, 118, 1)" class="mt-0" label="Comment" type="text" v-model="comment"></v-text-field>
        </div>

        <div v-if="clickcount === 0" class="flex justify-center">
          <button
            v-if="clickcount === 0"
            class="
              bg-white
              border
              capitalize
              border-DPGREEN-500 border-dplgreen-400 border-solid
              flex
              justify-center
              focus:outline-none
              hover:bg-DPGREEN-500 hover:duration-200 hover:text-white
              items-center
              text-DPGREEN-500
              px-3
              py-1
              rounded-full
              text-lg
              font-semibold
            "
            style="max-width: 90px"
            @click="start"
          >
            start
          </button>
        </div>

        <div v-else class="flex justify-center space-between">
          <!-- <button
            v-if="clickcount === 0"
            class="
              bg-white
              border
              capitalize
              border-DPGREEN-500 border-dplgreen-400 border-solid
              flex
              justify-center
              focus:outline-none
              hover:bg-DPGREEN-500 hover:duration-200 hover:text-white
              items-center
              text-DPGREEN-500
              px-3
              py-1
              rounded-full
              text-lg
              font-semibold
            "
            style="max-width: 100px"
            @click="start"
          >
            start
          </button> -->

          <button
            v-if="clickcount === 1 || clickcount === 3"
            class="
              bg-white
              border
              capitalize
              border-DPORANGE-400border-dplgreen-400 border-solid
              flex
              justify-center
              focus:outline-none
              hover:bg-DPORANGE-400 hover:duration-200 hover:text-white
              items-center
              text-DPORANGE-400
              px-3
              py-1
              ml-2
              rounded-full
              text-lg
              font-semibold
            "
            style="max-width: 90px"
            @click="start"
          >
            pause
          </button>

          <button
            v-else-if="clickcount === 2"
            class="
              bg-white
              border
              capitalize
              border-DPORANGE-400 border-dplorange-400 border-solid
              flex
              justify-center
              focus:outline-none
              hover:bg-DPORANGE-400 hover:duration-200 hover:text-white
              items-center
              text-DPORANGE-400
              px-3
              ml-2
              py-1
              rounded-full
              text-lg
              font-semibold
            "
            style="max-width: 90px"
            @click="start"
          >
            resume
          </button>

          <button
            v-if="clickcount !== 0 || clickcount >= 2"
            class="
              bg-white
              border
              capitalize
              border-DPRED-400 border-dplred-400 border-solid
              flex
              justify-center
              focus:outline-none
              hover:bg-DPRED-400 hover:duration-200 hover:text-white
              items-center
              text-DPRED-400
              px-3
              py-1
              rounded-full
              text-lg
              font-semibold
            "
            style="max-width: 90px"
            @click="stop"
          >
            stop
          </button>
        </div>

        <div class="w-full flex justify-center">
          <div class="bg-white px-5" id="menu">
            <div class="flex capitalize">
              <span
                :class="` border-${border.week ? 'DPGREEN-500' : 'transparent'}
                  capitalize
                  font-${border.week ? 'semibold' : 'normal'}
                  text-sm
                  cursor-pointer
                  border-b-2
                  focus-within:outline-none
                  focus:outline-none
                  hover:border-DPGREEN-500 hover:border-b-2 hover:duration-200
                  mr-5
                  pb-1`"
                @click="getFilterData('thisWeek')"
              >
                this week
              </span>

              <span
                :class="`
                  border-${border.month ? 'DPGREEN-500' : 'transparent'}
                  capitalize
                  font-${border.month ? 'semibold' : 'normal'}
                  text-sm
                  cursor-pointer
                  border-b-2
                  focus-within:outline-none
                  focus:outline-none
                  hover:border-DPGREEN-500 hover:border-b-2 hover:duration-200
                  mr-5
                  pb-1`"
                @click="getFilterData('thisMonth')"
              >
                this month
              </span>

              <span
                :class="`
                  border-${border.lastMonth ? 'DPGREEN-500' : 'transparent'}
                  capitalize
                  font-${border.lastMonth ? 'semibold' : 'normal'}
                  text-sm
                  cursor-pointer
                  border-b-2
                  focus-within:outline-none
                  focus:outline-none
                  hover:border-DPGREEN-500 hover:border-b-2 hover:duration-200
                  mr-5
                  pb-1`"
                @click="getFilterData('lastMonth')"
              >
                last month
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-3 py-5 mb-10" id="log">
          <div class="capitalize font-semibold flex justify-between border-b pb-2" id="dateTime">
            <span>day</span>
            <span>date</span>
            <span>hours</span>
          </div>
          <div class="capitalize flex justify-between border-b pb-2" id="dateTime" v-for="(data, index) in dummyD" :key="index">
            <span id="day">{{ format(new Date(data.createdAt), "EEEE") }}</span>
            <span id="date">{{ format(new Date(data.createdAt), "dd.MM.yyyy") }}</span>
            <span id="hours">{{ convertMinsToHrsMins(data.checkIn, data.checkOut) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-5" id="bottom">
      <button
        class="bg-white border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-xs"
        style="min-width: 110px"
        @click="$emit('close')"
      >
        Cancel
      </button>
      <button
        class="bg-DPGREEN-500 border border-DPGREEN-500 border-dplgreen-400 border-solid flex focus:outline-none items-center justify-center px-3 py-2 rounded-lg text-white text-xs"
        style="min-width: 110px"
        @click="$emit('close')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";
import clockDataComponent from "../../../data_component/Clock/clockData";
import useClockSettings from "../../../controller/FirstSettings/ClockSettings";
import TableAttendance from "~/data_component/Attendance/TableAttendance";
import { format, differenceInMinutes, differenceInHours, differenceInSeconds, startOfWeek, endOfWeek, startOfMonth, endOfMonth, subMonths } from "date-fns";
import useAttendanceSettings from "~/controller/FirstSettings/AttendanceSettings";

export default defineComponent({
  props: {
    openTimeTracker: Boolean,
  },
  beforeMount() {
    // window.addEventListener("beforeunload", this.preventNav);
    if (this.clickcount === 0) return;
    else if (this.clickcount === 1) {
      this.pauseClock();
    } else this.stopClock();
  },

  data() {
    return {
      isRunning: false,
      // timerInstance: typeof setInterval,
      currentTimer: 0,
      btnText: "start",
      clickcount: 0,
      comment: "",
      attendanceData: [
        { label: "No-Project", value: "No-Project" },
        { label: "Project", value: "Project" },
      ],
      selected: {
        value: "No-Project",
      },

      timers: [
        {
          name: "Clock  ",
          minutes: 0,
        },
      ],
    };
  },

  setup() {
    let totalSeconds = ref(0);
    let totalHours = ref(8);
    let progessNumber = ref(0);
    let timerInstance = ref();
    const border = ref({
      week: true,
      month: false,
      lastMonth: false,
    });
    const { getAttendanceFiltered } = useAttendanceSettings();
    const { filteredAttendance } = TableAttendance();

    progessNumber.value = totalSeconds.value * 0.001;

    const { clockData } = clockDataComponent();
    const { setClockStart, setClockStop, setClockPause, setClockResume } = useClockSettings();

    const startClock = async (param: any) => {
      try {
        const res = await setClockStart(param);
        console.log("stop is caaled", res);
      } catch (error) {
        console.log("error", error);
      }
    };

    const stopClock = async () => {
      try {
        await setClockStop();
      } catch (error) {
        console.log("error", error);
      }
    };
    const pauseClock = async () => {
      try {
        await setClockPause();
      } catch (error) {
        console.log("error", error);
      }
    };

    const resumeClock = async () => {
      try {
        await setClockResume();
        let diff = timeDifference(clockData.value.resume, clockData.value.checkIn);
        console.log("diff in resume", diff);
        totalSeconds.value = diff.mins * 60 + diff.seconds;
      } catch (error) {
        console.log(error);
      }
    };

    const timeDifference = (start: string, end: string) => {
      console.log("staert in diff", start);
      console.log("end in diff", end);

      let seconds = 0;
      let mins = 0;
      let hours = 0;
      seconds = differenceInSeconds(new Date(start), new Date(end));
      mins = differenceInMinutes(new Date(start), new Date(end));
      hours = differenceInHours(new Date(start), new Date(end));
      if (seconds > 0) {
        seconds = seconds % 60;
      }

      return { seconds, mins, hours };
    };

    const getFilterData = (timeDurr) => {
      let params = { startDate: "", endDate: "" };
      if (timeDurr === "thisWeek") {
        border.value.week = true;
        border.value.month = false;
        border.value.lastMonth = false;
        params = { startDate: format(startOfWeek(new Date()), "yyyy-MM-dd"), endDate: format(endOfWeek(new Date()), "yyyy-MM-dd") };
      } else if (timeDurr === "thisMonth") {
        border.value.week = false;
        border.value.month = true;
        border.value.lastMonth = false;
        params = { startDate: format(startOfMonth(new Date()), "yyyy-MM-dd"), endDate: format(endOfMonth(new Date()), "yyyy-MM-dd") };
      } else if (timeDurr === "lastMonth") {
        border.value.week = false;
        border.value.month = false;
        border.value.lastMonth = true;
        params = { startDate: format(startOfMonth(subMonths(new Date(), 1)), "yyyy-MM-dd"), endDate: format(endOfMonth(subMonths(new Date(), 1)), "yyyy-MM-dd") };
      }
      getAttendanceFiltered(params);
    };

    const convertMinsToHrsMins = (checkIn, checkOut) => {
      const totalMinutes = differenceInMinutes(new Date(checkOut), new Date(checkIn));
      var hours = Math.floor(totalMinutes / 60);
      var minutes = totalMinutes % 60;
      return `${hours < 10 ? "0" + hours : hours}h ${minutes < 10 ? "0" + minutes : minutes}m`;
    };

    const dummyD = [
      {
        roleAccess: {
          isView: true,
          isManage: false,
          isAdmin: false,
          isTeam: false,
        },
        absentType: "NULL",
        begin: "2022-03-30T04:54:23.611Z",
        end: "2022-03-30T04:54:23.611Z",
        _id: "61e170a554ae7e41d2c1093d",
        adminId: "61e1709554ae7e41d2c1092e",
        AttendanceType: ["NON PROJECT"],
        teamId: "61e170a654ae7e41d2c1093f",
        memberId: {
          personalTeamId: null,
          _id: "61e1709554ae7e41d2c1092e",
          email: "user12345@gmail.com",
          password: "$2b$10$Lp2gDBDYCuyKA5BUO9cFQuj/jfy4EztHyr1P1M98LiA8/rBySiTfa",
          image: "https://assets.donepin.com/profile/profile-sample.jpg",
          role: "",
          isAdminAccess: false,
          status: "ACTIVE",
          isMember: false,
          isDeleted: false,
          isEmailVerified: true,
          emailVerificationToken: 563766,
          emailVerificationTokenTime: "2022-01-14T13:46:13.663Z",
          firstName: "user",
          lastName: "user",
          workSpaces: ["61e170a554ae7e41d2c10931"],
          ipAddress: "192.168.1.90",
          createdAt: "2022-01-14T12:40:24.493Z",
          updatedAt: "2022-01-14T12:46:29.173Z",
          __v: 0,
          lastLogin: "2022-03-30T05:14:59.283Z",
        },
        comment: "",
        checkIn: "2022-03-28T10:00:17.101Z",
        checkOut: "2022-03-29T12:05:24.207Z",
        pause: "2022-03-28T09:58:54.198Z",
        resume: "2022-03-28T09:59:03.060Z",
        workingTime: "FULL TIME",
        hoursPerWeek: 0,
        approvalStatus: "PENDING",
        teamStatus: "ACCEPTED",
        workingDays: 0,
        createdAt: "2022-01-14T12:40:29.051Z",
        updatedAt: "2022-03-29T12:05:24.207Z",
        __v: 0,
        absent: "PENDING",
      },
    ];

    return {
      startClock,
      stopClock,
      pauseClock,
      resumeClock,
      timeDifference,
      totalSeconds,
      totalHours,
      progessNumber,
      getFilterData,
      border,
      filteredAttendance,
      dummyD,
      format,
      convertMinsToHrsMins,
      timerInstance,
    };
  },

  created() {
    this.getFilterData("thisWeek");
  },

  computed: {
    displayHours(): any {
      const hours = Math.floor(this.totalSeconds / 3600);
      return this.formatTime(hours);
    },
    displayMinutes(): any {
      const minutes = Math.floor(this.totalSeconds / 60);
      return this.formatTime(minutes);
    },
    displaySeconds(): any {
      const seconds = this.totalSeconds % 60;
      return this.formatTime(seconds);
    },
  },
  methods: {
    formatTime(time) {
      if (time < 10) {
        return "0" + time;
      }
      return time.toString();
    },

    start() {
      this.cleanInterval();
      console.log("selected>>>>>>>>>>>>", this.selected);
      let tSeconds = this.totalHours * 3600;
      let onePercent = tSeconds / 100;

      switch (this.clickcount) {
        case 0:
          console.log("cases 0 is executed");
          this.totalSeconds = 1;
          this.startClock(this.comment);
          this.comment = "";

          break;
        case 1:
          console.log("cases 1 is executed");
          this.totalSeconds = 0;
          this.totalSeconds = 1;
          this.progessNumber = 0;
          this.pauseClock();
          break;
        case 2:
          console.log("cases 2 is executed");
          this.totalSeconds = 0;
          this.resumeClock();
          break;
        case 3:
          console.log("cases 3 is executed");
          this.totalSeconds = 0;
          this.totalSeconds = 1;
          this.pauseClock();
          this.clickcount = 1;
          break;
        default:
          console.log("default is executed");
      }

      if (this.clickcount < 3) {
        this.clickcount += 1;
      }

      this.isRunning = true;
      this.timerInstance = setInterval(() => {
        if (this.totalSeconds <= 0) {
          this.cleanInterval();
          return;
        }
        this.totalSeconds += 1;
        if (this.totalSeconds % onePercent === 0) {
          this.progessNumber = this.progessNumber + 1;
        }
      }, 1000);
    },

    cleanInterval() {
      this.isRunning = false;
      clearInterval(this.timerInstance);
    },

    stop() {
      this.isRunning = false;
      this.totalHours = 0;
      this.progessNumber = 0;
      clearInterval(this.timerInstance);
      this.stopClock();
      this.reset(0);
    },

    reset(minutes: any) {
      this.clickcount = 0;
      this.totalSeconds = minutes * 60;
    },

    // pause(num) {
    //   this.currentTimer = num;
    //   this.reset(this.timers[num].minutes);
    // },
    // save(updatedTimers) {
    //   this.timers = this.timers.map((timer, i) => {
    //     return { ...timer, minutes: parseInt(updatedTimers[i]) };
    //   });
    //   this.totalSeconds = this.timers[this.currentTimer].minutes * 60;
    // },
  },
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}

p {
  margin-bottom: 0px;
}
</style>
