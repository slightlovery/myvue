<template>
  <div>
    <div>
      <el-table
        :data="showData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total = "tableData.length/pagesize*10"
      :page-sizes = [pagesize]
      @next-click = "nextDate"
      @prev-click = "preDate"
      @current-change = "changePage">
    </el-pagination>
    {{myele}}
  </div>

</template>

<script>
    export default {
        name: "ele",
        data() {
          return {
            pagesize: 5,
            tableData: [{
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            },{
              date: '2016-05-05',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            },{
              date: '2016-05-09',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-10',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-11',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-12',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }],
            showData: [],
            currentpage: 0
          }
        },
        mounted() {
          this.getEle();
        },
        methods: {
          getEle(){
            var display = this.tableData;
            var datalength = this.pagesize;
            for(let i = 0; i < datalength; i++){
              this.showData.push(display[i])
            }
          },
          nextDate(){
            var display = this.tableData;
            var size = this.pagesize;
            this.showData = [];
            this.currentpage++;
            var begin = this.currentpage*size;
            var end = begin + size;
            for(var i = begin; i < end; i++){
              this.showData.push(display[i]);
            }
          },
          preDate() {
            var display = this.tableData;
            var size = this.pagesize;
            this.showData = [];
            this.currentpage--;
            var begin = this.currentpage*size;
            var end = begin + size;
            for (var i = begin; i < end; i++) {
              this.showData.push(display[i]);
            }
          },
          changePage(page){
            var display = this.tableData;
            var size = this.pagesize;
            this.showData = [];
            console.log(`当前页: ${page}`);
            this.currentpage = page-1;
            var begin = this.currentpage*size;
            var end = begin + size;
            for (var i = begin; i < end; i++) {
              this.showData.push(display[i]);
            }
          }
        }
    }
</script>

