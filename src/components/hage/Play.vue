<style lang="less">
@import '../../stylesheet/home.less';
.play_header{
        .play-fex{
                display:-webkit-flex;
                display:flex;
                justify-content:space-around ;
        }
        .play_img{
                img{
                        width:0.35rem;
                        height:0.50rem;
                }
        }
        .play_font{
                font-size:0.693rem;
        }
}
</style>
<template>
        <div class="play">
                <div class="play_header">
                        <div class="play-fex">
                                <div class="play_img">
                                        <img src="../../assets/img/2018-01-05_135425.png" alt="">
                                </div>
                                <div class="play_font">
                                        <span>Time Machine</span>
                                </div>
                        </div>   
                        <div>
                                <span>Crooked Doors</span>
                        </div>
                </div>
                <div class="play_content">
                        <div class="play_img">
                                <img src="" alt="">
                        </div>
                        <div>
                                <p class="">进度条</p>
                                <div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                </div>
                        </div>
                </div>
                <div class="play_foter">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
        </div>
</template>
<script>

</script>