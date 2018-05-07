<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading" >
        <div class="details" @click="show = !show">
          <span>From : {{ sms.from }}</span>
          <span>To : {{ sms.to }}</span>
          <span>SMS needed : {{ smsCount }}</span>
          <span>{{ countdown }}</span>
        </div>
        <i class="fa fa-close" @click="deleteSelf()"></i>
      </div>
      <div class="panel-body" v-show="show" v-text="sms.message"></div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment-countdown'

const SMS_ASCII_SPLIT = 153
const SMS_ASCII_MAX_LENGTH = 160
const SMS_UTF8_SPLIT = 67
const SMS_UTF8_MAX_LENGTH = 70

export default {
  props: ['sms'],
  data () {
    return {
      show: true,
      now: moment.utc().toDate(),
      date: null
    }
  },
  mounted () {
    var self = this
    this.date = moment.utc().toDate()
    setInterval(function () {
      self.now = moment.utc().toDate()
    }, 1000)
  },
  computed: {
    countdown () {
      if (this.sms) {
        return moment(this.now).countdown(this.date).toString()
      } else {
        return null
      }
    },
    smsCount: function () {
      if (this.sms) {
        const isUtf8 = this.sms.message !== window.encodeURI(this.sms.message)

        if (isUtf8) {
          return this.sms.message.length > SMS_UTF8_MAX_LENGTH
            ? Math.ceil(this.sms.message.length / SMS_UTF8_SPLIT)
            : 1
        } else {
          return this.sms.message.length > SMS_ASCII_MAX_LENGTH
            ? Math.ceil(this.sms.message.length / SMS_ASCII_SPLIT)
            : 1
        }
      }

      return 0
    }
  },
  methods: {
    deleteSelf () {
      this.$emit('delete')
    }
  }
}
</script>

<style scoped>
  .panel-heading {
    display: flex;
    flex-direction: row;
  }

  .panel-heading .details {
    display: flex;
    flex-direction: column;
    align-items: left;
    flex: 1;
  }

  .panel-heading i {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
</style>
