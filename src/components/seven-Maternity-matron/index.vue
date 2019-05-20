<template>
  <div>
    <div class="banersix">
        <img src="~im/baomu_banner.jpg"/>
    </div>
    <div class="container">
      <el-row class="padding ks" :gutter="20">
        <el-col :span="19"><div class="grid-content bg-purple">
          <div class="value_list">
            <h2 class="text-align-c margin-t-40 padding-20">育儿嫂价值</h2>
            <i class="title3"></i>
          </div>
          <div class="margin-t-20">
            <ul class="baomu">
              <li>非住家保姆</li>
              <li><p>保洁+做饭</p><span>单休/双休</span></li>
              <li><p>保洁+带小孩</p><span>单休/双休</span></li>
              <li><p>保洁+照顾老人</p><span>单休/双休</span></li>
            </ul>
            <b class="schedule fl"></b>
            <img class="fl" src="~im/baomu1.png"/>
            <b class="schedule fl"></b>
            <ul class="baomu baomuone">
              <li>非住家保姆</li>
              <li><p>保洁+做饭</p><span>单休/双休</span></li>
              <li><p>保洁+带小孩</p><span>单休/双休</span></li>
              <li><p>保洁+照顾老人</p><span>单休/双休</span></li>
            </ul>
            <div>
            </div>
          </div>
        </div>
          </el-col>
        <!--侧边-->
        <el-col class="padding" :span="5"><div class="grid-content bg-purple">
          <div class="fix">
            <div class="text-align-c rightone">
              <p class="rightone"><img src="~im/right_img.jpg"></p>
              <p class="margin-t-30"><img src="~im/right_img2.jpg"></p>
            </div>
          </div>
        </div></el-col>
        <el-col :span="19"><div class="grid-content bg-purple">
          <div data-v-0a878338="" class="value_list"><h2 data-v-0a878338="" class="text-align-c margin-t-40 padding-20">服务价格</h2> <i data-v-0a878338="" class="title3"></i></div>
          <div class="main-content text-align-c">
            <table>
              <tr>
                <td style="width: 245px;">育婴师类别</td>
                <td>育婴师级别</td>
                <td>工资标准</td>
                <td rowspan="16" onclick="toZiXun()">月收费按照实际工作26天计算。<br>（逢国家法定假日费用按国家规定计算）</td>
              </tr>
              <tr>
                <td rowspan="7" onclick="toZiXun()">住家育婴师<sub>（26天）</sub></td>
              </tr>
              <tr>

                <td rowspan="1" onclick="toZiXun()">金牌育婴师</td>
                <td onclick="toZiXun()">10800元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">五星级育婴师</td>
                <td onclick="toZiXun()">8800元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">四星级育婴师</td>
                <td onclick="toZiXun()">7800元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">三星级育婴师</td>
                <td onclick="toZiXun()">6800元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">二星级育婴师</td>
                <td onclick="toZiXun()">6000元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">一星级育婴师</td>
                <td onclick="toZiXun()">5380元/月</td>
              </tr>

              <tr>
                <td rowspan="7" onclick="toZiXun()">非住家育婴师<sub>（26天）</sub></td>
              </tr>
              <tr>

                <td rowspan="1" onclick="toZiXun()">金牌育婴师</td>
                <td onclick="toZiXun()">10300元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">五星级育婴师</td>
                <td onclick="toZiXun()">8300元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">四星级育婴师</td>
                <td onclick="toZiXun()">7300元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">三星级育婴师</td>
                <td onclick="toZiXun()">6400元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">二星级育婴师</td>
                <td onclick="toZiXun()">5500元/月</td>
              </tr>
              <tr>
                <td rowspan="1" onclick="toZiXun()">一星级育婴师</td>
                <td onclick="toZiXun()">4880元/月</td>
              </tr>
            </table>
          </div>
        </div>
        </el-col>
        <el-col :span="19"><div class="grid-content bg-purple">
          <div data-v-0a878338="" class="value_list">
            <h2 data-v-0a878338="" class="text-align-c margin-t-40 padding-20">质量保证</h2>
            <i data-v-0a878338="" class="title3"></i>
          </div>
          <div class="icon-cent">
            <ul class="clearfix">
              <li class="li1">
                <img src="~im/baomu-01.png"/>
              </li>
              <li class="li2">
                <img src="~im/baomu-02.png"/>
              </li>
              <li class="li3">
                <img src="~im/baomu-03.png"/>
              </li>
              <li class="li4">
                <img src="~im/baomu-04.png"/>
              </li>
              <li class="li5">
                <img src="~im/baomu-05.png"/>
              </li>
              <li class="li6">
                <img src="~im/baomu-06.png"/>
              </li>
            </ul>
            <div class="fr">
              <img src="~im/baomu4.jpg"/>
            </div>
          </div>
          </div>
        </el-col>
        <el-col :span="19"><div class="grid-content bg-purple">
          <div data-v-0a878338="" class="value_list">
            <h2 data-v-0a878338="" class="text-align-c margin-t-40 padding-20">质量保证</h2>
            <i data-v-0a878338="" class="title3"></i>
          </div>
          <ul class="flow-box">
            <li>
              <div>
                <em>
                  <img class="img-one" src="~im/baomu7.png"/>
                  <img class="img-two" src="~im/baomu7-w.png"/>
                </em>
                <p>在线预约</p>
              </div>
              <i class="flow-ico">I</i>
            </li>
            <li>
              <div>
                <em>
                  <img class="img-one" src="~im/baomu7.png"/>
                  <img class="img-two" src="~im/baomu7-w.png"/>
                </em>
                <p>家政顾问根据
                  雇主要求拟定计划</p>
              </div>
              <i class="flow-ico">I</i>
            </li>
            <li>
              <div>
                <em>
                  <img class="img-one" src="~im/baomu7.png"/>
                  <img class="img-two" src="~im/baomu7-w.png"/>
                </em>
                <p>在线预约</p>
              </div>
              <i class="flow-ico">I</i>
            </li>
            <li>
              <div>
                <em>
                  <img class="img-one" src="~im/baomu7.png"/>
                  <img class="img-two" src="~im/baomu7-w.png"/>
                </em>
                <p>在线预约</p>
              </div>
              <i class="flow-ico">I</i>
            </li>
            <li>
              <div>
                <em>
                  <img class="img-one" src="~im/baomu7.png"/>
                  <img class="img-two" src="~im/baomu7-w.png"/>
                </em>
                <p>在线预约</p>
              </div>
              <i class="flow-ico">I</i>
            </li>
            <li>
              <div>
                <em>
                  <img class="img-one" src="~im/baomu7.png"/>
                  <img class="img-two" src="~im/baomu7-w.png"/>
                </em>
                <p>在线预约</p>
              </div>
              <i class="flow-ico">I</i>
            </li>
            <li>
              <div>
                <em>
                  <img class="img-one" src="~im/baomu7.png"/>
                  <img class="img-two" src="~im/baomu7-w.png"/>
                </em>
                <p>在线预约</p>
              </div>
              <i class="flow-ico">I</i>
            </li>
            <li>
              <div>
                <em>
                  <img class="img-one" src="~im/baomu7.png"/>
                  <img class="img-two" src="~im/baomu7-w.png"/>
                </em>
                <p>在线预约</p>
              </div>
              <i class="flow-ico">I</i>
            </li>
          </ul>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
  .banersix img{
    width: 100%;
    height: 490px;
  }
  .value_list .title3{
    display: block;
    width: 182px;
    height: 15px;
    margin: -1px auto 0;
    background: url("../../static/img/baomu3.png") no-repeat center;
  }
  .value_list h2{
    border-bottom: 1px solid #D3D3D3;
  }
  .baomu{
    float: left;
    margin-left: 240px;
    margin-right: 20px;
    li{
      margin-top: 20px;
    }
  }
  /*侧边*/
  .rightone{
    display: block;
    padding: 33px 0 20px;
    border-bottom: 1px solid
  }
  .schedule{
    width: 16px;
    height: 268px;
    background: url("~im/baomu2.png") no-repeat center;
    margin-top: 20px;
  }
  .baomuone{
    margin-left: 0px !important;
    margin-left: 20px !important;
  }
  .el-col{
    padding-bottom: 50px;
  }
  .main-content table{
    width: 100%;
    tr td{
      background-color: #F0F0F0;
      padding: 9px 0;
    }
  }
  /*质量保证*/
  .icon-cent ul{
    position: relative;
    li{
      position: absolute;
    }
    .li1{
      left: 130px;
      top: 15px;
      &:hover{
        top: 0px;
      }
    }
    .li2{
      top: 73px;
      left: 233px;
      &:hover{
        top: 63px;
        left: 243px;
      }
    }
    .li3{
      top: 241px;
      left: 233px;
      &:hover{
        top: 251px;
        left: 243px;
      }
    }
    .li4{
      top: 250px;
      left: 130px;
      &:hover{
        top: 265px;
      }
    }
    .li5{
      top: 241px;
      left: 22px;
      &:hover{
        top: 251px;
        left: 12px;
      }
    }
    .li6{
      top: 73px;
      left: 22px;
      &:hover{
        top: 63px;
        left: 12px;
      }
    }
  }
  /*流程*/
  .flow-box{
    /*overflow: hidden;*/
    text-align: center;
    margin: 25px 65px;
    li{
      width: 25%;
      float: left;
      border-bottom: 1px dashed #A7A7A7;
      height: 207px;
      margin-bottom: 83px;
      div{
        width: 145px;
        height: 145px;
        margin: auto;
        padding-top: 25px;
        background: #E1E1E1;
        &:hover{
          color: white;
          background: #E95513;
        }
        em{
          display: block;
          margin-bottom: 25px;
          img:first-child+img{
            display: none;
          }
        }
      }
      .flow-ico{
        display: block;
        width: 37px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        font-style: normal;
        border-radius: 50%;
        background: url("~im/baomu15.png") no-repeat center;
        color: #fff;
        font-size: 18.67px;
        margin: 40px auto 0;
      }
    }
  }
  .flow-box li div:hover+ .flow-ico{
    background: #E95513;
    color: white;
  }
  .flow-box li div:hover em .img-one{
    display: none;
  }
  .flow-box li div:hover em .img-two{
    display: block;
    margin: auto;
  }
</style>
