<template>
  <div id="ranking-board">
    <div class="ranking-board-title">本年收入科室排名前十</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'RankingBoard',
  data () {
    return {
      config: {
        data: [],
        rowNum: 9,
        unit: '万元'
      }
    }
  },
  methods: {
    async createData () {
      // const { randomExtend } = this
      // const { code, digitalFlopDataSelf } = await this.$http.get('api/asset/item_tendency')
      const rankingboard = await this.$http.get('api/asset/ranking_department')
      if (rankingboard.status === 200) {
        this.config = {
          data: rankingboard.data,
          rowNum: 10,
          unit: '万元'
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
#ranking-board {
  width: 20%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
