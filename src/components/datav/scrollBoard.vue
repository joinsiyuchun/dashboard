<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {}
    }
  },
  methods: {
    async createData () {
      const equipmentlist = await this.$http.get('api/asset/equipment_list')
      if (equipmentlist.status === 200) {
        this.config = {
          header: ['设备编码', '品牌型号', '本年收入(万)', '本年成本(万)'],
          data: equipmentlist.data,
          index: true,
          columnWidth: [50, 170, 300],
          align: ['center'],
          rowNum: 7,
          headerBGC: '#1981f6',
          headerHeight: 45,
          oddRowBGC: 'rgba(0, 44, 81, 0.8)',
          evenRowBGC: 'rgba(10, 29, 50, 0.8)'
        }
      }
    }
  },
  mounted () {
    const { createData } = this

    createData()

    setInterval(createData, 30000)
  }
}
</script>

<style lang="less">
#scroll-board {
  width: 50%;
  box-sizing: border-box;
  margin-left: 20px;
  height: 100%;
  overflow: hidden;
}
</style>
