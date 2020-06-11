<template>
  <div>
    <van-nav-bar
      title="联盟详情"
      fixed
      left-arrow
      @click-left="onClickLeft"
    />
    <div style="height: 46px"></div>
    <div class="img">
      <img src="@/assets/img/a.jpg" alt="" />
    </div>
    <div style="height: 12.43rem"></div>
    <van-tabs
      title-active-color="#1E87F0"
      color="#1E87F0"
      line-width="25vw" scrollspy sticky offset-top="250" ellipsis
    >
      <van-tab title="联盟介绍">
        <div class="detail">
            <div class="detail-title">联盟介绍</div>
            <p>{{content.one}}</p>
        </div>
      </van-tab>
      <van-tab title="工作制度">
        <div class="detail">
            <div class="detail-title">工作制度</div>
            <p>{{content.two}}</p>
        </div>
      </van-tab>
      <van-tab title="组织架构">
        <div class="detail">
            <div class="detail-title">组织架构</div>
            <p>{{content.three}}</p>
        </div>
      </van-tab>
      <van-tab title="工作计划">
        <div class="detail">
            <div class="detail-title">工作计划</div>
            <p>{{content.four}}</p>
        </div>
      </van-tab>
      <van-tab title="经费管理细则">
        <div class="detail">
            <div class="detail-title">经费管理细则</div>
            <p>{{content.five}}</p>
            <div style="height:120px"></div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'StudioUnionDetail',
  data() {
    return {
      top:0,
      active: 0,
      currentIndex:0,
      tabInfo:["针对问题","原理说明",'创新点'],
      content: {
        one: '为响应网公司数字化转型和数字南网建设行动方案，数字电网工作室联盟于2019年9月获得网公司同意批复，且于2019年11月14日成立，由广州供电局牵头。数字电网工作室联盟立足一线，为全网信息、通信和调度专业提供技术支撑、人才培养和创新动力，成为建设数字南网，推动企业数字化转型的重要力量。联盟开创“1+7”工作模式，建立“1”个发展目标，即推动企业数字化转型，形成统筹引领机制、联合攻关机制、合作交流机制、课题孵化机制、技术推广机制、成果共享机制、协同创新机制“7”个机制。目前，联盟已集合了五省区及专业公司与数字电网相关的职工创新工作室68个，其中，南方电网公司星级工作室44个，完成职工创新项目120余项。联盟以数字化为核心，运用先进的信息、通信、传感与控制技术，实现整个电网系统（包括输电、变电、配电、用电）各个环节的安全可靠运行，通过数字化、精准化、实时化管控模式，推动南方电网公司统一的电网管理、客户服务、调度运行、企业级运营管控业务全覆盖应用。',
        two: '1、联盟地市级负责单位广州供电局信息中心编制联盟内部管理规范，并根据实际情况进行修订。2、广州供电局信息中心每年12月底前组织编制下一年度联盟工作计划和经费预算，报理事会审批。3、理事会每年3月底前审批上一年度工作计划，转广州供电局信息中心组织实施。4、广州供电局信息中心通过微信群、电子邮件等方式与各分、子公司工作室之间联络，通报联盟活动信息和共享技术资源等。5、各分、子公司工作室每年12月底前向联盟提交本工作室下一年度工作计划，以便联盟统筹技术攻关和职工培训工作。6、专家组每年滚动更新、发布联盟专家库。',
        three: '',
        four: '1. 组织开展面向全网专业人员的数字电网相关专题培训。\n' +
        '2. 与输电联盟开展技术交流和联合攻关。目前已初定无人机巡检系统的完善和推广应用。\n' +
        '3. 组织与腾讯、阿里巴巴、华为公司等外部知名企业的技术交流，进行联合攻关。\n' +
        '4. 组织举办数字电网联盟年会，促进交流分享，评选优秀工作室成果。\n' +
        '5. 整理数字联盟成员荣誉清单（含劳模、工匠、创客）等。\n' +
        '6. 联盟年度宣传片拍摄。\n' +
        '7. 联盟宣传册制作印刷。\n' +
        '8. 发挥工作室联盟示范带动作用，将技术交流及培训扩大至各级专业人员；促进职创成果与创新孵化器对接转化。\n',
        five: '1.\t依据审批通过的联盟年度工作计划需求，公司工会、广州供电局工会、广州供电局信息中心给予联盟经费支持。广州供电局信息中心根据实际情况安排行政费用。\n' +
        '2.\t工会经费主要用于联盟的平台建设，主要包括场地布置、必要物资采购、学习交流活动等方面。开支标准和管理规范按照广州市总工会有关财务要求执行。\n' +
        '3.\t科技、软课题研究、职工教育经费等其他费用的管理按照《中国南方电网有限责任公司科技项目管理办法》、《中国南方电网有限责任公司科技成果及新技术应用管理办法》和《中国南方电网有限责任公司科技奖励管理办法》等要求执行。\n' +
        '4.\t联盟的活动经费开支由广州供电局信息中心提出申请，广州供电局工会负责人审批，并应按照工会财务管理有关规定规范管理。\n' +
        '5.\t联盟活动经费有限，一些费用可以在行政经费列支的应尽量由行政支持解决。\n'
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
  mounted() {
    console.log(this.$route.query);
  },
};
</script>


<style scoped>
.van-hairline--bottom::after{
    border-bottom-width:0;
}
.img{
  width: 100%;
  height: 12.75rem;
  position: fixed;
  z-index: 10;
}
.img img{
	width:100%;
	height:100%;
	display:block;
}
.contact {
  margin-left: 1rem;
  color: #262626;
  padding-left: 0.5rem;
  font-weight: bold;
  border-left: 0.2rem solid #1e87f0;
}
.detail{
  padding: 1rem;
}
.detail-title{
  border-left:.125rem solid #1E87F0;
  padding: 0 .43rem;
  font-weight: 700;
  color: #262626;
  font-size: .875rem;
  margin-bottom: 1rem;
}
.detail p{
  font-size: .875rem;
  line-height: 1.5rem;
  color: #595959;
  margin-bottom: .4rem;
}

</style>
