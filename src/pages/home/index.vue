<template lang="pug">
div.wrapper-plutocratList-price
  div.content-plutocratList-price
    div.plutocratList-price
      div.title 近30天各出借金额人数占比
        div.plutocratList-price-hd
          div#container(ref='chart')
  div.hr
  div.table
    div.th-block
      div.th 排名    
      div.th 姓名  
      div.th 详情    
      div.th 明细
    .content-block(v-for='(item, key) in listData')
      div.content-block-hd
        div.td.one(v-if="key+1===1")  
        div.td.two(v-else-if="key+1===2") 
        div.td.three(v-else-if="key+1===3") 
        div.td.normal(v-else="key+1<4") {{key+1}} 
        div.td {{item.name}}
        div.td {{item.price}}
          span.wan 万
        div.td {{item.time}}
        div.td.shouqi(:class="isSorrowShow?'zhankai':'shouqi'" @click='toggle(item)')
      div.content-block-detail(v-show='item.detailShow')
        div.content-block-detail-tr(v-for='(item,index) in detailList')
          div.item {{item.name}}
          div.item.price {{item.price}}
            span.wan 万
          div.item.time {{item.time}}
</template>

<script>
  import echarts from 'echarts';
  import Vue from 'vue';
  Vue.prototype.$echarts = echarts;
 import {mapActions,mapGetters} from 'vuex';
export default Vue.extend({
  name: 'home',
  data() {
    return {
      listData:[],
      detailList:[],
      isSorrowShow:false,
    };
  },
  created(){
      this.listData = [
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
        {city:'上海',name:'梁**',price:'2000',sendTime:'04.12 15:30'},
      ];
      this.detailList = [
        {name:'捷e盈90天',price:'2000',time:'04.12 15:30:58'},
        {name:'捷e盈90天',price:'2000',time:'04.12 15:30:58'},
        {name:'捷e盈90天',price:'2000',time:'04.12 15:30:58'},
        {name:'捷e盈90天',price:'2000',time:'04.12 15:30:58'},
      ];
  },
  computed:{
    ...mapGetters(['userid','deviceinfo']),
  },
  mounted(){
  	this.drawChart();
    console.log('dddd',this.userid,this.deviceinfo);
  },
  methods:{
  	 toggle(item){
        if(item.detailShow){
          this.$set(item,'detailShow',false);
        } else {
          this.$set(item,'detailShow',true);
        }
        this.isSorrowShow = !this.isSorrowShow;
      },
      drawChart(){
        var chart = this.$refs.chart;
        if(chart){
         let myChart = this.$echarts.init(chart); 
         var option = null;
             option = {
                tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                series: [
                  {
                    name:'',
                    type:'pie',
                    radius: ['30%', '50%'],
                    center: ['50%', '50%'],
                    label: {
                    normal: {
                      formatter: '{dian|}{a|{b}}\n{b|{c}人}',
                      borderWidth: 0,
                      textStyle: {
                        color: ' #010E4F'
                      },
                      //borderWidth:1,
                      //borderColor:'red',
                      fontSize:13,
                      borderRadius: 4,
                      show: true,
                      rich: {
                          dian: {
                              height: 5,
                              width:5,
                              align: 'left',
                              borderRadius:5,
                              backgroundColor: 'red',
                          },
                        a: {
                            color: ' #010E4F',
                            lineHeight: 10,
                            fontSize: 14,
                            padding:[0,0,0,5],
                            align:'left',
                        },
                        b: {
                          height: 20,
                          color: '#A6A6A6',
                          fontSize: 12,
                          align:'right',
                          top:0,
                        },
                      }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal'
                        }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: true,
                      length:2 
                    }
                  },
                  data:[
                    {
                    value:71,
                    name:'>1000万',
                     itemStyle: {
                        normal: {
                          color: '#3FE4C5',
                        }
                      },

                    label: {
                    normal: {
                      formatter: '{dian|}{a|{b}}\n{b|{c}人}',
                      borderWidth: 0,
                      textStyle: {
                        color: ' #010E4F'
                      },
                      fontSize:13,
                      borderRadius: 4,
                      show: true,
                      rich: {
                          dian: {
                            height: 5,
                            width:5,
                            align: 'left',
                            borderRadius:5,
                            backgroundColor: '#3FE4C5',
                          },
                        a: {
                            color: ' #010E4F',
                            lineHeight: 10,
                            fontSize: 14,
                            padding:[0,0,0,5],
                            align:'left',
                        },
                        b: {
                          height: 20,
                          color: '#A6A6A6',
                          fontSize: 12,
                          align:'right',
                          top:0,
                        },
                      }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal'
                        }
                    }
                  },
                    },
                    {
                     value:39,
                     name:'1000-500万',
                     itemStyle: {
                        normal: {
                          color: '#3FE4C5',
                        }
                      },
                    label: {
                    normal: {
                      formatter: '{dian|}{a|{b}}\n{b|{c}人}',
                      borderWidth: 0,
                      textStyle: {
                        color: ' #010E4F'
                      },
                      fontSize:13,
                      borderRadius: 4,
                      show: true,
                      rich: {
                          dian: {
                              height: 5,
                              width:5,
                              align: 'left',
                              borderRadius:5,
                              backgroundColor: '#3FE4C5',
                          },
                        a: {
                            color: ' #010E4F',
                            lineHeight: 10,
                            fontSize: 14,
                            padding:[0,0,0,5],
                            align:'left',
                        },
                        b: {
                          height: 20,
                          color: '#A6A6A6',
                          fontSize: 12,
                          align:'right',
                          top:0,
                        },
                      }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal'
                        }
                    }
                  },
                    },
                    {
                     value:130,
                     name:'＜100万',
                      itemStyle: {
                      normal: {
                          color: '#82C7FF',
                      }
                      },
                    label: {
                    normal: {
                      formatter: '{dian|}{a|{b}}\n{b|{c}人}',
                      borderWidth: 0,
                      textStyle: {
                        color: ' #010E4F'
                      },
                      fontSize:13,
                      borderRadius: 4,
                      show: true,
                      rich: {
                          dian: {
                              height: 5,
                              width:5,
                              align: 'left',
                              borderRadius:5,
                              backgroundColor: '#82C7FF',
                          },
                        a: {
                            color: ' #010E4F',
                            lineHeight: 10,
                            fontSize: 14,
                            padding:[0,0,0,5],
                            align:'left',
                        },
                        b: {
                          height: 20,
                          color: '#A6A6A6',
                          fontSize: 12,
                          align:'right',
                          top:0,
                        },
                      }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal'
                        }
                    }
                  },
                    },
                    {value:52, 
                      name:'500-100万',
                      itemStyle: {
                        normal: {
                          color: '#EFBFD5 ',
                        }
                      },
                    label: {
                    normal: {
                      formatter: '{dian|}{a|{b}}\n{b|{c}人}',
                      borderWidth: 0,
                      textStyle: {
                        color: ' #010E4F'
                      },
                      fontSize:13,
                      borderRadius: 4,
                      show: true,
                      rich: {
                          dian: {
                              height: 5,
                              width:5,
                              align: 'left',
                              borderRadius:5,
                              backgroundColor: '#EFBFD5',
                          },
                        a: {
                            color: ' #010E4F',
                            lineHeight: 10,
                            fontSize: 14,
                            padding:[0,0,0,5],
                            align:'left',
                        },
                        b: {
                          height: 20,
                          color: '#A6A6A6',
                          fontSize: 12,
                          align:'right',
                          top:0,
                        },
                      }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal'
                        }
                    }
                  },
                    },
                    ].sort(function (a, b) { return a.value - b.value; }),
                      roseType: 'radius',
                      animationType: 'scale',
                      animationEasing: 'elasticOut',
                      animationDelay: function (idx) {
                          return Math.random() * 200;
                      }
                  }
              ]
          };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
        }
      },
  }
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
