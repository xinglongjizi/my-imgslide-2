$(function(){

// 为slider定义运行的函数
$('.slider-wrapper').each(function(){

	var $group = $(this).find('.slider-group');		// 获取第二级父级，用于执行JQ的animate()动画
	var $slider_arr = $group.find('.slider');		// 获取每个slider滑块
	var $slider_btn_arr = $('.slider-btn');
	var currentIndex = 0;		// 初始状态显示的是第一张slider，因此定义为 0
	var timeout;		// timeout = setTimeout();

	function set_time_loop(){
		timeout = setTimeout(function(){
			if( currentIndex < ($slider_arr.length - 1) ){
				move(currentIndex + 1);
			}else{
				move(0);
			}
		},3600);
	}
	function move(moveIndex){
		// 判断....就退出不执行move
		if($group.is(':animated') || currentIndex === moveIndex){
      		return;
    	}
    	// 否则....
		var sliderLeft , groupLeft;
		if( currentIndex < moveIndex ){
			sliderLeft = '100%';
			groupLeft = '-100%';
		}else{
			sliderLeft = '-100%';
			groupLeft = '100%';
		}

		// 把将要滑动到的slider定位到sliderLeft指定的位置且显示它：
		$slider_arr.eq(moveIndex).css({
			display:'block',
			left:sliderLeft
		});

		// slider的第二级父级.slider-group的JQ animate()的动画：
		$group.animate({
			left:groupLeft,
		},function(){		// animate的回调函数作用将整个slider变为初始状态
			$slider_arr.eq(currentIndex).css({
				display:'none',
			});
			$slider_arr.eq(moveIndex).css({
				left:0,
			});
			$group.css({
				left:0,
			});
			// slider-btn移除和添加样式
			$slider_btn_arr.eq(currentIndex).removeClass('active');
			$slider_btn_arr.eq(moveIndex).addClass('active');
			// 动画结束后，滑动到的silder变成当前的slider
			currentIndex = moveIndex;
			clearTimeout(timeout);
			// 循环执行setTimeout
			set_time_loop();
		});
	}
	// 第一次执行setTimeout
	set_time_loop();
	// buttons样式
	$('.slider-btn').each(function(index){
		$(this).click(function(){
			move(index);
		});
	});























});
































































































});