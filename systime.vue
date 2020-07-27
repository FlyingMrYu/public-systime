<template>
  <div class="system-content">
    <span>{{date}}</span>
  </div>
</template>

<script>
import { getDayInter } from "@/assets/js/formatDate";
export default {
  name: "systime-content",
  data() {
    return {
      date: null
    };
  },
  created() {
    let _this = this;
    this.timer = setInterval(() => {
      _this.date = getDayInter(new Date(), "yyyy-MM-dd hh:mm:ss"); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

