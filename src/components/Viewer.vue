<template>
  <div>
    <div class="page-header">
      <h1>OVH <small>SmsCatcher</small></h1>
      <div>
        <button class="btn btn-danger" @click="clearSmsList()">Clear</button>
      </div>
    </div>

    <sms v-for="(sms, i) in smsList" :sms="sms" @delete="deleteSms(sms)" class="col-xs-12" :key="i"/>
  </div>
</template>

<script>
import Sms from '@/components/Sms'

export default {
  components: {
    Sms
  },
  data () {
    return {
      smsList: []
    }
  },
  mounted () {
    let _self = this
    let socket = io.connect() // eslint-disable-line no-undef
    socket.on('connect', function (data) {
      socket.on('sms', function (data) {
        _self.smsList.unshift(data)
      })
    })
  },
  methods: {
    deleteSms (sms) {
      let index = this.smsList.indexOf(sms)
      if (index > -1) {
        this.smsList.splice(index, 1)
      }
    },
    clearSmsList () {
      this.smsList = []
    }
  }
}
</script>

<style scoped>
  .panel-heading i {
    cursor: pointer;
  }

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
  }

  .page-header {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    padding: 0;
  }

  .page-header h1 {
    display: flex;
    align-items: baseline;
    flex: 1;
  }

  .page-header small {
    padding-left: 10px;
  }

  .page-header div {
    display: flex;
    align-items: center;
  }
</style>
