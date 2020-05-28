<template>
<div>
    <div class="banner">
        <img src="@/assets/images/img/banner_aboutUS@2x.png" style="height: 480px;width: 100%;"/>
    </div>
    <div class="header">
        <!--logo-->
        <div class="logo">
        <img src="@/assets/images/img/logo@2x.png" style="width: 190px;height: 50px;"/>
        </div>
        <!-- 导航栏 -->
        <nav>
            <div class="Navbar">
            <ul>
            <li><a href="homePage">首页</a></li>
            <li><a href="news">新闻动态</a></li>
            <li><a href="productCenter">产品中心</a></li>
            <li><a href="aboutUs">关于我们</a></li>
            <li><a href="joinUs">加入我们</a></li>
            </ul>
            </div>
        </nav>
    </div>
    <div class="aboutUs">
            <div class="NavbarCenter">
                <ul>
                    <li>公司介绍</li>
                    <li>发展历程</li>
                    <li>企业文化</li>
                    <li>社会责任</li>
                    <li>员工风采</li>
                    <li>联系我们</li>
                </ul>
            </div>
            <div class="companyIntroduction">
                <div class="title">公司介绍</div>
                <div class="companyIntroductionContent"></div>
                <div class="imgOne"><img src="@/assets/images/img/img1.png" style="width: 540px;height: 257px;"></div>
                <div class="imgTwo"><img src="@/assets/images/img/img2.png" style="width: 258px;height: 257px;" ></div>
                <div class="imgThree"><img src="@/assets/images/img/img3.png" style="width: 260px;height: 256px;"></div>
                <div class="imgFour"><img src="@/assets/images/img/img4.png" style="width: 260px;height: 256px;"></div>
                <div class="imgFive"><img src="@/assets/images/img/img5.png" style="width: 258px;height: 256px;"></div>
            </div>
            <div class="developmentHistory">
                <div class="title">发展历程</div>
            </div>
            <div class="enterpriseCulture">
                <div class="title">企业文化</div>
                <div class="vision">
                    <img src="@/assets/images/img/aboutUS_icon_vision@2x.png" style="width:80px;height:80px;padding:10px 87px 20px 95px">
                    <p style="font-family: PingFangSC-Regular;font-size: 18px;color: #333333;padding:0 109px 10px 117px">愿景</p>
                    <p style="text-align:center;padding:0 43px 30px 51px;font-family: PingFangSC-Regular;font-size: 14px;color: #999999;">让天下玩家不再一个人游戏</p>
                </div>
                <div class="value">
                    <img src="@/assets/images/img/aboutUS_my_icon_values@2x.png" style="width:80px;height:80px;padding:10px 87px 20px 95px">
                    <p style="font-family: PingFangSC-Regular;font-size: 18px;color: #333333;padding:0 100px 10px 108px">价值观</p>
                    <p style="text-align:center;padding:0 52px 30px 62px;font-family: PingFangSC-Regular;font-size: 14px;color: #999999;">Cheerful、Ace、Timely</p>
                </div>
                <div class="mind">
                    <img src="@/assets/images/img/aboutUS_my_icon_spirit@2x.png" style="width:80px;height:80px;padding:10px 87px 20px 95px">
                    <p style="font-family: PingFangSC-Regular;font-size: 18px;color: #333333;padding:0 109px 10px 117px">精神</p>
                    <p style="text-align:center;padding:0 50px 30px 58px;font-family: PingFangSC-Regular;font-size: 14px;color: #999999;">务实、梦想、拼搏、协作</p>
                </div>
            </div>
            <div class="socialResponsibility">
                <div class="title">社会责任</div>
            </div>
            <div class="staffPresence">
                <div class="title">员工风采</div>
            </div>
            <div class="contactUs">
                <div class="title">联系我们</div>
            </div>
    </div>
    <div class="footer">
            <!--logo-->
            <div class="logo">
                <img src="@/assets/images/img/logo@2x.png" style="width: 190px;height: 50px;"/>
            </div>
            <!-- 导航栏 -->
            <nav>
                <div class="NavbarTwo">
                <ul>
                    <li>友情链接:</li>
                    <li><a href="https://www.jiaoyihu.com/">交易虎</a></li>
                    <li><a href="http://www.hodogame.com/">浩动游戏</a></li>
                    <li><a href="http://www.tianshigame.com/">天石游戏</a></li>
                </ul>
                </div>
            </nav>
            <!-- 版权 -->
            <div class="copyright">
                宇石网络 | CopyRight © 2017-2018 浙江宇石网络科技有限公司版权所有
            </div>
            <!-- ICP -->
            <div class="icp">
                浙ICP备15009243号 | 浙公安备 33011002012890号 | 浙网文 (2016)0390-259号
            </div>
            <div class="parentalCareProject">
                家长监护工程
            </div>
    </div>
</div>
</template>

<style lang="less" scoped>
    @import './aboutUs.less';
</style>
