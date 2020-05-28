<template>
    <div>
        <div class="banner">
            <img src="@/assets/images/img/banner_news@2x.png" style="height: 480px;width: 100%;"/>
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
        <div class="newsModule">
            <div class="newsCategory">
                <ul>
                    <li>公司新闻</li><li>产品新闻</li><li>行业动态</li>
                </ul>
            </div>
            <el-divider></el-divider>
            <div class="contentBody">
                <div class="contentCentPiece">

                </div>
            </div>
            <div class="hotContent">
                <div class="contentTitle"></div>
                <div class="contentDescription"></div>
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
    @import './news.less';
</style>
