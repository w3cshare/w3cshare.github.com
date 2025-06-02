<template>
  <div class="v3c">
    <ul class="v3c-tab">
      <li class="v3c-tab-item" :class="{ 'v3c-active': tabActive == 1 }" @click="onHandleTab(1)">{{ state.text.Seconds.name }}</li>
      <li class="v3c-tab-item" :class="{ 'v3c-active': tabActive == 2 }" @click="onHandleTab(2)">{{ state.text.Minutes.name }}</li>
      <li class="v3c-tab-item" :class="{ 'v3c-active': tabActive == 3 }" @click="onHandleTab(3)">{{ state.text.Hours.name }}</li>
      <li class="v3c-tab-item" :class="{ 'v3c-active': tabActive == 4 }" @click="onHandleTab(4)">{{ state.text.Day.name }}</li>
      <li class="v3c-tab-item" :class="{ 'v3c-active': tabActive == 5 }" @click="onHandleTab(5)">{{ state.text.Month.name }}</li>
      <li class="v3c-tab-item" :class="{ 'v3c-active': tabActive == 6 }" @click="onHandleTab(6)">{{ state.text.Year.name }}</li>
      <li class="v3c-tab-item v3c-lang-btn" @click="state.language = state.language === 'en' ? 'cn' : 'en'">{{ state.language === "en" ? "cn" : "en" }}</li>
    </ul>
    <!-- 秒 -->
    <div class="v3c-content" v-show="tabActive == 1">
      <el-radio-group v-model="state.second.cronEvery">
        <!-- 每一秒 -->
        <div>
          <el-radio label="1">{{ state.text.Seconds.every }}</el-radio>
        </div>
        <!-- 每隔多久 -->
        <div class="mt-20">
          <el-radio label="2">
            {{ state.text.Seconds.interval[0] }}
            <el-input-number v-model="state.second.incrementIncrement" :min="1" :max="60" />
            {{ state.text.Seconds.interval[1] || "" }}
            <el-input-number v-model="state.second.incrementStart" :min="0" :max="59" />
            {{ state.text.Seconds.interval[2] || "" }}
          </el-radio>
        </div>
        <!-- 具体秒数 -->
        <div class="mt-20">
          <el-radio label="3">
            {{ state.text.Seconds.specific }}
            <el-select v-model="state.second.specificSpecific" multiple>
              <el-option v-for="(item, index) in 60" :key="index" :label="index" :value="index" />
            </el-select>
          </el-radio>
        </div>
        <!-- 周期 -->
        <div class="mt-20">
          <el-radio label="4">
            {{ state.text.Seconds.cycle[0] }}
            <el-input-number v-model="state.second.rangeStart" :min="1" :max="60" />
            {{ state.text.Seconds.cycle[1] || "" }}
            <el-input-number v-model="state.second.rangeEnd" :min="0" :max="59" />
            {{ state.text.Seconds.cycle[2] || "" }}
          </el-radio>
        </div>
      </el-radio-group>
    </div>
    <!-- 分钟 -->
    <div class="v3c-content" v-show="tabActive == 2">
      <el-radio-group v-model="state.minute.cronEvery">
        <!-- 每一分钟 -->
        <div>
          <el-radio label="1">{{ state.text.Minutes.every }}</el-radio>
        </div>
        <!-- 每隔多久 -->
        <div class="mt-20">
          <el-radio label="2">
            {{ state.text.Minutes.interval[0] }}
            <el-input-number v-model="state.minute.incrementIncrement" :min="1" :max="60" />
            {{ state.text.Minutes.interval[1] || "" }}
            <el-input-number v-model="state.minute.incrementStart" :min="0" :max="59" />
            {{ state.text.Minutes.interval[2] || "" }}
          </el-radio>
        </div>
        <!-- 具体分钟 -->
        <div class="mt-20">
          <el-radio label="3">
            {{ state.text.Minutes.specific }}
            <el-select v-model="state.minute.specificSpecific" multiple>
              <el-option v-for="(item, index) in 60" :key="index" :label="index" :value="index" />
            </el-select>
          </el-radio>
        </div>
        <!-- 周期 -->
        <div class="mt-20">
          <el-radio label="4">
            {{ state.text.Minutes.cycle[0] }}
            <el-input-number v-model="state.minute.rangeStart" :min="1" :max="60" />
            {{ state.text.Minutes.cycle[1] || "" }}
            <el-input-number v-model="state.minute.rangeEnd" :min="0" :max="59" />
            {{ state.text.Minutes.cycle[2] || "" }}
          </el-radio>
        </div>
      </el-radio-group>
    </div>
    <!-- 小时 -->
    <div class="v3c-content" v-show="tabActive == 3">
      <el-radio-group v-model="state.hour.cronEvery">
        <!-- 每小时 -->
        <div>
          <el-radio label="1">{{ state.text.Hours.every }}</el-radio>
        </div>
        <!-- 每隔多久 -->
        <div class="mt-20">
          <el-radio label="2">
            {{ state.text.Hours.interval[0] }}
            <el-input-number v-model="state.hour.incrementIncrement" :min="1" :max="60" />
            {{ state.text.Hours.interval[1] || "" }}
            <el-input-number v-model="state.hour.incrementStart" :min="0" :max="59" />
            {{ state.text.Hours.interval[2] || "" }}
          </el-radio>
        </div>
        <!-- 具体小时 -->
        <div class="mt-20">
          <el-radio label="3">
            {{ state.text.Hours.specific }}
            <el-select v-model="state.hour.specificSpecific" multiple>
              <el-option v-for="(item, index) in 60" :key="index" :label="index" :value="index" />
            </el-select>
          </el-radio>
        </div>
        <!-- 周期 -->
        <div class="mt-20">
          <el-radio label="4">
            {{ state.text.Hours.cycle[0] }}
            <el-input-number v-model="state.hour.rangeStart" :min="1" :max="60" />
            {{ state.text.Hours.cycle[1] || "" }}
            <el-input-number v-model="state.hour.rangeEnd" :min="0" :max="59" />
            {{ state.text.Hours.cycle[2] || "" }}
          </el-radio>
        </div>
      </el-radio-group>
    </div>
    <!-- 天 -->
    <div class="v3c-content" v-show="tabActive == 4">
      <el-radio-group v-model="state.day.cronEvery">
        <!-- 每天 -->
        <div>
          <el-radio label="1">{{ state.text.Day.every }}</el-radio>
        </div>
        <!-- 每隔多久 -->
        <div class="mt-20">
          <el-radio label="2">
            {{ state.text.Day.intervalWeek[0] }}
            <el-input-number v-model="state.day.incrementIncrement" :min="1" :max="60" />
            {{ state.text.Day.intervalWeek[1] }}
            <el-input-number v-model="state.day.incrementStart" :min="0" :max="59" />
            {{ state.text.Day.intervalWeek[2] }}
          </el-radio>
        </div>
        <!-- 周期 -->
        <div class="mt-20">
          <el-radio label="3">
            {{ state.text.Day.intervalDay[0] }}
            <el-input-number v-model="state.hour.rangeStart" :min="1" :max="30" />
            {{ state.text.Day.intervalDay[1] }}
            <el-input-number v-model="state.hour.rangeEnd" :min="1" :max="30" />
            {{ state.text.Day.intervalDay[2] }}
          </el-radio>
        </div>
        <!-- 具体星期 -->
        <div class="mt-20">
          <el-radio label="4">
            {{ state.text.Day.specificWeek }}
            <el-select v-model="state.week.specificSpecific" multiple>
              <el-option v-for="(val, index) in 7" :key="index" 
                :label="state.text.Week[val - 1]"
                :value="['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][val - 1]" />
            </el-select>
          </el-radio>
        </div>
        <!-- 具体天数 -->
        <div class="mt-20">
          <el-radio label="5">
            {{ state.text.Day.specificDay }}
            <el-select v-model="state.week.specificSpecific" multiple>
              <el-option v-for="(val, index) in 31" :key="index" :label="val" :value="val" />
            </el-select>
          </el-radio>
        </div>
        <!-- 最后一天 -->
        <div class="mt-20">
          <el-radio label="6">{{ state.text.Day.lastDay }}</el-radio>
        </div>
        <!-- 最后一个工作日 -->
        <div class="mt-20">
          <el-radio label="7">{{ state.text.Day.lastWeekday }}</el-radio>
        </div>
        <!-- 最后一个星期几 -->
        <div class="mt-20">
          <el-radio label="8">
            {{ state.text.Day.lastWeek[0] }}
            <el-select v-model="state.day.cronLastSpecificDomDay">
              <el-option v-for="(val, index) in 7" :key="index" 
                :label="state.text.Week[val - 1]"
                :value="val" />
            </el-select>
            {{ state.text.Day.lastWeek[1] || "" }}
          </el-radio>
        </div>
        <!-- 倒数第几天 -->
        <div class="mt-20">
          <el-radio label="9">
            <el-input-number v-model="state.day.cronDaysBeforeEomMinus" :min="1" :max="31" />
            {{ state.text.Day.beforeEndMonth[0] }}
          </el-radio>
        </div>
        <!-- 最近的工作日 -->
        <div class="mt-20">
          <el-radio label="10">
            {{ state.text.Day.nearestWeekday[0] }}
            <el-input-number v-model="state.day.cronDaysNearestWeekday" :min="1" :max="31" />
            {{ state.text.Day.nearestWeekday[1] }}
          </el-radio>
        </div>
        <!-- 第几个星期几 -->
        <div class="mt-20">
          <el-radio label="11">
            {{ state.text.Day.someWeekday[0] }}
            <el-input-number v-model="state.week.cronNthDayNth" :min="1" :max="5" />
            <el-select v-model="state.week.cronNthDayDay">
              <el-option v-for="(val, index) in 7" :key="index" 
                :label="state.text.Week[val - 1]"
                :value="val" />
            </el-select>
            {{ state.text.Day.someWeekday[1] }}
          </el-radio>
        </div>
      </el-radio-group>
    </div>
    <!-- 月 -->
    <div class="v3c-content" v-show="tabActive == 5">
      <el-radio-group v-model="state.month.cronEvery">
        <!-- 每月 -->
        <div>
          <el-radio label="1">{{ state.text.Month.every }}</el-radio>
        </div>
        <!-- 每隔多久 -->
        <div class="mt-20">
          <el-radio label="2">
            {{ state.text.Month.interval[0] }}
            <el-input-number v-model="state.month.incrementIncrement" :min="0" :max="12" />
            {{ state.text.Month.interval[1] }}
            <el-input-number v-model="state.month.incrementStart" :min="0" :max="12" />
          </el-radio>
        </div>
        <!-- 具体月份 -->
        <div class="mt-20">
          <el-radio label="3">
            {{ state.text.Month.specific }}
            <el-select v-model="state.month.specificSpecific" multiple>
              <el-option v-for="(val, index) in 12" :key="index" :label="val" :value="val" />
            </el-select>
          </el-radio>
        </div>
        <!-- 周期 -->
        <div class="mt-20">
          <el-radio label="4">
            {{ state.text.Month.cycle[0] }}
            <el-input-number v-model="state.month.rangeStart" :min="1" :max="12" />
            {{ state.text.Month.cycle[1] }}
            <el-input-number v-model="state.month.rangeEnd" :min="1" :max="12" />
          </el-radio>
        </div>
      </el-radio-group>
    </div>
    <!-- 年 -->
    <div class="v3c-content" v-show="tabActive == 6">
      <el-radio-group v-model="state.year.cronEvery">
        <!-- 每年 -->
        <div>
          <el-radio label="1">{{ state.text.Year.every }}</el-radio>
        </div>
        <!-- 每隔多久 -->
        <div class="mt-20">
          <el-radio label="2">
            {{ state.text.Year.interval[0] }}
            <el-input-number v-model="state.year.incrementIncrement" :min="1" :max="99" />
            {{ state.text.Year.interval[1] }}
            <el-input-number v-model="state.year.incrementStart" :min="currYear" :max="currYear + 10" />
          </el-radio>
        </div>
        <!-- 具体年份 -->
        <div class="mt-20">
          <el-radio label="3">
            {{ state.text.Year.specific }}
            <el-select v-model="state.year.specificSpecific" multiple>
              <el-option v-for="(val, index) in 100" :key="index" 
                :label="currYear + val"
                :value="currYear + val" />
            </el-select>
          </el-radio>
        </div>
        <!-- 周期 -->
        <div class="mt-20">
          <el-radio label="4">
            {{ state.text.Year.cycle[0] }}
            <el-input-number v-model="state.month.rangeStart" :min="currYear" :max="currYear + 10" />
            {{ state.text.Year.cycle[1] }}
            <el-input-number v-model="state.month.rangeEnd" :min="currYear" :max="currYear + 10" />
          </el-radio>
        </div>
      </el-radio-group>
    </div>
    <!-- 结果 -->
    <div class="v3c-footer">
      <div style="flex: 1">
        CRON &nbsp;: &nbsp;&nbsp;<span class="cron">{{ state.cron }}</span>
        &nbsp; &nbsp; &nbsp;
        <el-button type="primary" @click.stop="handleChange">{{ state.text.Save }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Language from "./language";
import { reactive, computed, toRefs, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Vue3CronCore",
  props: {
    i18n: {},
    maxHeight: String,
    change: Function,
    value: String,
  },
  setup(props, { emit }) {
    const { i18n } = toRefs(props);
    const state = reactive({
      language: i18n.value,
      second: {
        cronEvery: "1",
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 0,
        rangeEnd: 0,
        specificSpecific: [],
      },
      minute: {
        cronEvery: "1",
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 0,
        rangeEnd: 0,
        specificSpecific: [],
      },
      hour: {
        cronEvery: "1",
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 0,
        rangeEnd: 0,
        specificSpecific: [],
      },
      day: {
        cronEvery: "1",
        incrementStart: 1,
        incrementIncrement: 1,
        rangeStart: 0,
        rangeEnd: 0,
        specificSpecific: [],
        cronLastSpecificDomDay: 1,
        cronDaysBeforeEomMinus: 0,
        cronDaysNearestWeekday: 1,
      },
      week: {
        cronEvery: "1",
        incrementStart: 1,
        incrementIncrement: 1,
        specificSpecific: [],
        cronNthDayDay: 1,
        cronNthDayNth: 1,
      },
      month: {
        cronEvery: "1",
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 1,
        specificSpecific: [],
      },
      year: {
        cronEvery: "1",
        incrementStart: 2022,
        incrementIncrement: 1,
        rangeStart: 1,
        rangeEnd: 1,
        specificSpecific: [],
      },
      output: {
        second: "",
        minute: "",
        hour: "",
        day: "",
        month: "",
        Week: "",
        year: "",
      },
      text: computed(() => Language[state.language || "cn"]),
      secondsText: computed(() => {
        let seconds = "";
        let cronEvery = state.second.cronEvery;
        switch (cronEvery.toString()) {
          case "1":
            seconds = "*";
            break;
          case "2":
            seconds = state.second.incrementStart + "/" + state.second.incrementIncrement;
            break;
          case "3":
            state.second.specificSpecific.map((val) => {
              seconds += val + ",";
            });
            seconds = seconds.slice(0, -1);
            break;
          case "4":
            seconds = state.second.rangeStart + "-" + state.second.rangeEnd;
            break;
        }
        return seconds;
      }),
      minutesText: computed(() => {
        let minutes = "";
        let cronEvery = state.minute.cronEvery;
        switch (cronEvery.toString()) {
          case "1":
            minutes = "*";
            break;
          case "2":
            minutes = state.minute.incrementStart + "/" + state.minute.incrementIncrement;
            break;
          case "3":
            state.minute.specificSpecific.map((val) => {
              minutes += val + ",";
            });
            minutes = minutes.slice(0, -1);
            break;
          case "4":
            minutes = state.minute.rangeStart + "-" + state.minute.rangeEnd;
            break;
        }
        return minutes;
      }),
      hoursText: computed(() => {
        let hours = "";
        let cronEvery = state.hour.cronEvery;
        switch (cronEvery.toString()) {
          case "1":
            hours = "*";
            break;
          case "2":
            hours = state.hour.incrementStart + "/" + state.hour.incrementIncrement;
            break;
          case "3":
            state.hour.specificSpecific.map((val) => {
              hours += val + ",";
            });
            hours = hours.slice(0, -1);
            break;
          case "4":
            hours = state.hour.rangeStart + "-" + state.hour.rangeEnd;
            break;
        }
        return hours;
      }),
      daysText: computed(() => {
        let days = "";
        let cronEvery = state.day.cronEvery;
        switch (cronEvery.toString()) {
          case "1":
            break;
          case "2":
          case "4":
          case "11":
            days = "?";
            break;
          case "3":
            days = state.day.incrementStart + "/" + state.day.incrementIncrement;
            break;
          case "5":
            state.day.specificSpecific.map((val) => {
              days += val + ",";
            });
            days = days.slice(0, -1);
            break;
          case "6":
            days = "L";
            break;
          case "7":
            days = "LW";
            break;
          case "8":
            days = state.day.cronLastSpecificDomDay + "L";
            break;
          case "9":
            days = "L-" + state.day.cronDaysBeforeEomMinus;
            break;
          case "10":
            days = state.day.cronDaysNearestWeekday + "W";
            break;
        }
        return days;
      }),
      weeksText: computed(() => {
        let weeks = "";
        let cronEvery = state.day.cronEvery;
        switch (cronEvery.toString()) {
          case "1":
          case "3":
          case "5":
            weeks = "?";
            break;
          case "2":
            weeks = state.week.incrementStart + "/" + state.week.incrementIncrement;
            break;
          case "4":
            state.week.specificSpecific.map((val) => {
              weeks += val + ",";
            });
            weeks = weeks.slice(0, -1);
            break;
          case "6":
          case "7":
          case "8":
          case "9":
          case "10":
            weeks = "?";
            break;
          case "11":
            weeks = state.week.cronNthDayDay + "#" + state.week.cronNthDayNth;
            break;
        }
        return weeks;
      }),
      monthsText: computed(() => {
        let months = "";
        let cronEvery = state.month.cronEvery;
        switch (cronEvery.toString()) {
          case "1":
            months = "*";
            break;
          case "2":
            months = state.month.incrementStart + "/" + state.month.incrementIncrement;
            break;
          case "3":
            state.month.specificSpecific.map((val) => {
              months += val + ",";
            });
            months = months.slice(0, -1);
            break;
          case "4":
            months = state.month.rangeStart + "-" + state.month.rangeEnd;
            break;
        }
        return months;
      }),
      yearsText: computed(() => {
        let years = "";
        let cronEvery = state.year.cronEvery;
        switch (cronEvery.toString()) {
          case "1":
            years = "*";
            break;
          case "2":
            years = state.year.incrementStart + "/" + state.year.incrementIncrement;
            break;
          case "3":
            state.year.specificSpecific.map((val) => {
              years += val + ",";
            });
            years = years.slice(0, -1);
            break;
          case "4":
            years = state.year.rangeStart + "-" + state.year.rangeEnd;
            break;
        }
        return years;
      }),
      cron: computed(() => {
        return `${state.secondsText || "*"} ${state.minutesText || "*"} ${state.hoursText || "*"} ${state.daysText || "*"} ${state.monthsText || "*"} ${state.weeksText || "?"} ${
          state.yearsText || "*"
        }`;
      }),
    });

    const handleChange = () => {
      if (typeof state.cron !== "string") return false;
      emit("change", state.cron);
    };
    const rest = (data) => {
      for (let i in data) {
        if (data[i] instanceof Object) {
          this.rest(data[i]);
        } else {
          switch (typeof data[i]) {
            case "object":
              data[i] = [];
              break;
            case "string":
              data[i] = "";
              break;
          }
        }
      }
    };

    const tabActive = ref(1);
    const currYear = new Date().getFullYear() - 1;
    const onHandleTab = (index) => {
      tabActive.value = index;
    };

    watch(
      () => state.cron,
      (value) => {
        if (typeof state.cron !== "string") return;
        emit("update:value", value);
      }
    );

    return {
      state,
      handleChange,
      rest,
      tabActive,
      onHandleTab,
      currYear,
    };
  },
});
</script>

<style lang="css" scoped>
.v3c {
  width: 100%;
  min-width: 600px;
  max-width: 800px;
  border: 1px solid var(--el-border-color-light);
  border-radius: 4px;
  background: var(--el-bg-color);
}

.v3c-tab {
  padding: 0;
  list-style: none;
  margin: 0;
  background-color: var(--el-fill-color-light);
  display: flex;
  border-bottom: 1px solid var(--el-border-color-light);
}

.v3c-tab-item {
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 14px;
  transition: all 0.3s;
}

.v3c-tab-item.v3c-active {
  background-color: var(--el-color-primary);
  color: #ffffff;
}

.v3c-tab-item.v3c-lang-btn {
  background-color: var(--el-color-success);
  color: #ffffff;
  max-width: 60px;
}

.v3c-content {
  padding: 16px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}

.v3c-content::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.v3c-content::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: var(--el-border-color);
}

.v3c-content::-webkit-scrollbar-track {
  border-radius: 3px;
  background: var(--el-fill-color-lighter);
}

.mt-20 {
  margin-top: 12px;
}

.v3c-footer {
  background-color: var(--el-fill-color-light);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--el-border-color-light);
}

/* Element Plus 组件样式调整 */
:deep(.el-radio) {
  margin-right: 16px;
  height: 32px;
  line-height: 32px;
}

:deep(.el-input-number) {
  width: 100px;
  margin: 0 8px;
}

:deep(.el-select) {
  width: 160px;
  margin: 0 8px;
}

/* 多选下拉框高度限制 */
:deep(.el-select__dropdown) {
  max-height: 300px !important;
}

.cron {
  display: inline-block;
  background-color: var(--el-color-success);
  padding: 4px 12px;
  border-radius: 4px;
  color: #ffffff;
  font-family: monospace;
  margin: 0 8px;
}

/* 响应式布局 */
@media screen and (max-width: 768px) {
  .v3c {
    min-width: 100%;
  }
  
  :deep(.el-select) {
    width: 120px;
  }
  
  :deep(.el-input-number) {
    width: 80px;
  }
}
</style>
