<template>
    <div>
        <div class="daohanlan">
            <img src="@/assets/images/img/logo@2x.png" width="190" height="50">
            <div class="yijidaohan">
                <div><a>首页</a></div>
                <div><a>新闻动态</a></div>
                <div><a>产品中心</a></div>
                <div><a>关于我们</a></div>
                <div><a>加入我们</a></div>
            </div>
        </div>
        <div>
            <el-carousel
                :data="tableData"
                v-loading="tableLoading"
                element-loading-text="拼命加载中"
                height="500px"
                border>
                <el-carousel-item>
                    <el-image :src="tableData.image_and_video" :fit="fit"/>
                </el-carousel-item>
                <el-carousel-item>
                    <el-image :src="tableData.image_and_video" :fit="fit"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="biaoti"><a>产品矩阵</a></div>
        <div class="product">
            <div class="box1">
                <div class="jianjie">
                    <div class="yihang">
                        <div class="iconbox">
                            <div class="icon"><el-image :src="tableData.firsticon" :fit="fit"/></div>
                        </div>
                        <div class="productname">{{tableData.firstproductname}}</div>
                    </div>
                    <div class="erhang">{{tableData.firstproductinformation}}</div>
                </div>
            </div>
            <div class="box2">
                <el-image :src="tableData.firstproductimage" :fit="fit"/>
            </div>
        </div>
        <div class="reverseproduct">
            <div class="rebox1">
                <div class="jianjie">
                    <div class="yihang">
                        <div class="iconbox">
                            <div class="icon"><el-image :src="tableData.secondicon" :fit="fit"/></div>
                        </div>
                        <div class="productname">{{tableData.secondproductname}}</div>
                    </div>
                    <div class="erhang">{{tableData.secondproductinformation}}</div>
                </div>
            </div>
            <div class="rebox2">
                <el-image :src="tableData.secondproductimage" :fit="fit"/>
            </div>
        </div>
        <div class="product">
            <div class="box1">
                <div class="jianjie">
                    <div class="yihang">
                        <div class="iconbox">
                            <div class="icon"><el-image :src="tableData.thirdicon" :fit="fit"/></div>
                        </div>
                        <div class="productname">{{tableData.thirdproductname}}</div>
                    </div>
                    <div class="erhang">{{tableData.thirdproductinformation}}</div>
                </div>
            </div>
            <div class="box2">
                <el-image :src="tableData.thirdproductimage" :fit="fit"/>
            </div>
        </div>
        <div class="biaoti2">
            <img src="@/assets/images/img/home_icon_more@2x.png">
        </div>
        <div class="biaoti2">
            <a href="#">更多游戏产品</a>
        </div>
        <div class="biaoti"><a>新闻动态</a></div>
        <div class="newslist">
            <div class="newbox">
                <div class="newimage">
                    <el-image :src="tableData.firstnewimage" :fit="fit"/>
                </div>
                <div class="newcontent">
                    <div class="biaoti3">公司新闻</div>
                    <hr class="hr_style" />
                    <div class="content_title_style">{{tableData.firstnewtitle}}</div>
                </div>
           </div>
            <div class="newbox"></div>
            <div class="newbox"></div>
        </div>
        <div class="biaoti"><a>合作伙伴</a></div>
        <div>
            <el-carousel
                height="500px"
                border>
                <el-carousel-item>
                    <div class="logo">
                        <div class="logotr">
                            <div><img src="@/assets/images/partnerLogo/pic-logo-72gou.c5bc5bdf .jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-77.d0940e5b.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-178.365d7a34.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-357.913de29c.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-360.4bde1dae.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-1688.7404fb72.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-4399.feeaf94f.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-17173.8ad076c9.jpg"></div>
                        </div>
                        <div class="logotr">
                            <div><img src="@/assets/images/partnerLogo/pic-logo-18183.71501a53.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-anfeng.6639ba0f.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-baidu.3012eeb6.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-banma.1067020f.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-benshouji.ce3fbbdf.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-bufan.0417d1e4.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-chaohaowan.147b76e8.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-coolpad.0db5d496.jpg"></div>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="logo">
                        <div class="logotr">
                            <div><img src="@/assets/images/partnerLogo/pic-logo-dianwanbashi.e6515a33.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-diyishouyou.6c7bb113.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-duoku.238e6d26.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-gaoqu.ded06cc9.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-huawei.16049c5a.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-jinli.05c9be50.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-jiuyou.a6782e0c.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-kaifu.c3476f6e.jpg"></div>
                        </div>
                        <div class="logotr">
                            <div><img src="@/assets/images/partnerLogo/pic-logo-koudai.0e6d0518.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-leshang.2edbb1f8.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-liqu.962a01f6.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-meizu.7760e7b0.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-oppo.7335c0c8.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-pipawang.39ec1479.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-qiyou.e37150c4.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-renwantang.504e439e.jpg"></div>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                     <div class="logo">
                        <div class="logotr">
                            <div><img src="@/assets/images/partnerLogo/pic-logo-shouxin.517b7dbd.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-shouyou.414635e8.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-taptap.f9440cf7.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-tencent.01230fdd.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-tencentmanhua.4aa1d7f8.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-vivo.3edb64a3.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-wanke.712dabb1.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-xiaomi.53e5a311.jpg"></div>
                        </div>
                        <div class="logotr">
                            <div><img src="@/assets/images/partnerLogo/pic-logo-xiaopi.70930729.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-yaya.0a089bf0.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-yezizhu.da7d433e.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-youjiu.524b9b99.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-youxigou.560bedd5.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-youxiniao.25be607e.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-youxitanzi.b2205a3c.jpg"></div>
                            <div><img src="@/assets/images/partnerLogo/pic-logo-youyouwang.bbd9b56d.jpg"></div>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                     <div class="logo">
                        <div class="logotr">
                            <div><img src="@/assets/images/partnerLogo/pic-shouyoubus.1c54e4eb.jpg" draggable="false"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="logotr">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import './homePage.less';
</style>
<script>
export default {
    components: {
    },
    data () {
        return {
            tableData: null,
            tableLoading: false,
            fit: 'fill',
            url: ''
        }
    },
    created () {
        this.queryList()
    },
    methods: {
        queryList () {
            this.tableLoading = true
            this.$apis.bannerSerch(
                this.queryParams
            ).then(res => {
                this.tableLoading = false
                if (res.code === 2000) {
                    this.tableData = res.data.bannerDtos
                }
            }).catch(error => {
                this.tableLoading = false
                console.error(error.message)
            })
        }
    }
}
</script>
