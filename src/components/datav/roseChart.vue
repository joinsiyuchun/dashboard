<template>
  <div id="rose-chart">
    <div class="rose-chart-title">本年收入分布</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: 'RoseChart',
  data () {
    return {
      option: {}
    }
  },
  methods: {
    async createData () {
      const benefitpercent = await this.$http.get('api/asset/equipment_percent')
      if (benefitpercent.status === 200) {
        this.option = {
          series: [
            {
              type: 'pie',
              radius: '50%',
              roseSort: false,
              data: benefitpercent.data,
              insideLabel: {
                show: false
              },
              outsideLabel: {
                formatter: '{name} {percent}%',
                labelLineEndLength: 20,
                style: {
                  fill: '#fff'
                },
                labelLineStyle: {
                  stroke: '#fff'
                }
              },
              roseType: true
            }
          ],
          color: ['#da2f00', '#fa3600', '#ff4411', '#ff724c', '#541200', '#801b00', '#a02200', '#5d1400', '#b72700']
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
#rose-chart {
  width: 30%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;

  .rose-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .dv-charts-container {
    height: calc(~"100% - 50px");
  }
}
</style>
