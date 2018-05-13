<template>
  <div>
    <div id="mychart" :style="{width: '600px', height: '300px'}"></div>
    <div id="mychart1" :style="{width: '300px', height: '300px'}"></div>
  </div>

</template>

<script>
    export default {
        name: "Echart",
        mounted() {
          this.drawLine();
        },
        methods: {
          drawLine(){
            var mychart = this.$echarts.init(document.getElementById('mychart'));
            var mychart1 = this.$echarts.init(document.getElementById('mychart1'));
            this.$http.get('../../static/data.json').then(function (data) {
              console.log(data.body.chart);
              let x = new Array();
              let y = new Array();
              let z = new Array();
              for (let i=0; i<data.body.chart.length;i++){
                x.push(data.body.chart[i].x);
                y.push(data.body.chart[i].y);
                z.push({ name: data.body.chart[i].x, value: data.body.chart[i].y});
              }
              console.log(x);
              console.log(y);
              console.log(z);
              mychart.setOption({
                title: { text: 'Vue use Echart'},
                tooltip: {},
                xAxis: {
                  data: x
                },
                yAxis: {},
                series: [{
                  name: '销量',
                  type: 'bar',
                  data: y
                }]
              });
              mychart1.setOption({
                series: {
                  type: 'pie',
                  radius: '55%',
                  roseType: 'angle',
                  data: z
                },
                itemStyle: {
                  // 阴影的大小
                  shadowBlur: 200,
                  // 阴影水平方向上的偏移
                  shadowOffsetX: 0,
                  // 阴影垂直方向上的偏移
                  shadowOffsetY: 0,
                  // 阴影颜色
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              });
            });

          }
        }
    }
</script>

<style scoped>

</style>
