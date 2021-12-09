function find() {
	var dataList = [{"id":"1","name":"Đại triển hồng đô, khả được thành công","rate":"Cát"},{"id":"2","name":"Thăng trầm không số, về già vô công","rate":"Bình thường"},{"id":"3","name":"Ngày ngày tiến tới, vạn sự thuận toàn","rate":"Đại cát"},{"id":"4","name":"Tiền đồ gai góc, dâu khổ theo đuổi","rate":"Hung"},{"id":"5","name":"Làm ăn phát đạt, lợi danh đều có ","rate":"Đại cát"},{"id":"6","name":"Trời cho số phận có thể thành công","rate":"Cát"},{"id":"7","name":"Ôn hòa êm dịu nhất phải thành công","rate":"Cát"},{"id":"8","name":"Qua giai đoạn gian nan, có ngày thành công","rate":"Cát"},{"id":"9","name":"Tự làm có sức thất bại khó lường","rate":"Hung"},{"id":"10","name":"Tâm sức làm không, không được đến bờ","rate":"Hung"},{"id":"11","name":"Vững đi từng bước, được người trọng vọng","rate":"Cát"},{"id":"12","name":"Gầy gò yếu đuối, mọi việc khó thành","rate":"Hung"},{"id":"13","name":"Trời cho cát vận, được người kính trọng","rate":"Cát"},{"id":"14","name":"Nửa được nửa bại, dựa vào nghị lực","rate":"Bình thường"},{"id":"15","name":"Đại sự thành tựu, nhất điịnh hưng vương","rate":"Cát"},{"id":"16","name":"Thành tựu to lớn, tên tuổi lừng danh","rate":"Đại cát"},{"id":"17","name":"Quý nhân trợ giúp, sẽ được thành công","rate":"Cát"},{"id":"18","name":"Thuận lợi xương thịnh, trăm việc trôi chảy","rate":"Đại cát"},{"id":"19","name":"Nội ngoại bất hòa, khó khăn muôn phát","rate":"Hung"},{"id":"20","name":"Vượt mọi gian nan, lo xa nghĩ hoài Đại","rate":"Hung"},{"id":"21","name":"Chuyên tâm kinh doanh hay dung trí","rate":"Cát"},{"id":"22","name":"Có tài không vận, việc không gặp may","rate":"Hung"},{"id":"23","name":"Tên tuổi 4 phương, sẽ thành đại nghiệp","rate":"Đại cát"},{"id":"24","name":"Phải dựa tự lập sẽ thành đại nghiệp","rate":"Cát"},{"id":"25","name":"Thiên thời địa lợi vì được nhân cách","rate":"Cát"},{"id":"26","name":"Bảo táp phong ba qua được hiểm nguy","rate":"Hung"},{"id":"27","name":"Lúc thắng lúc thua giữ được thành công","rate":"Cát"},{"id":"28","name":"Tiến mãi không lùi trí tuệ được dung","rate":"Đại cát"},{"id":"29","name":"Cát hung chia đổ, được thua mỗi nửa","rate":"Hung"},{"id":"30","name":"Danh lợi được mùa đại sự thành công","rate":"Đại cát"},{"id":"31","name":"Con rồng trong nước thành công sẽ đến","rate":"Đại cát"},{"id":"32","name":"Dùng trí lâu dài, sẽ được thịnh vượng","rate":"Cát"},{"id":"33","name":"Rủi ro không ngừng khó có thành công","rate":"Hung"},{"id":"34","name":"Số phận trung cất tiến lùi bảo thủ","rate":"Bình thường"},{"id":"35","name":"Trôi nổi bập bùng thường hay gặp nạn","rate":"Hung"},{"id":"36","name":"Tránh được điểm ác, thuận buồm xuôi gió","rate":"Cát"},{"id":"37","name":"Danh thì được tiếng lợi thì bằng không","rate":"Bình thường"},{"id":"38","name":"Đường rộng thênh thang nhìn thấy tương lai","rate":"Đại cát"},{"id":"39","name":"Lúc thịnh lúc suy chìm nổi vô định","rate":"Bình thường"},{"id":"40","name":"Thiên ý cất vận tiền đồ sang sủa","rate":"Đại cát"},{"id":"41","name":"Sự nghiệp không chuyên hầu như không thành","rate":"Hung"},{"id":"42","name":"Nhẫn nhịn chịu đựng, xấu sẽ thành tốt","rate":"Cát"},{"id":"43","name":"Cây xanh trổ lá đột nhiên thành công","rate":"Cát"},{"id":"44","name":"Ngược với ý mình tham công lỡ việc","rate":"Hung"},{"id":"45","name":"Quanh co khúy khỷu khó khăn kéo dài","rate":"Hung"},{"id":"46","name":"Quý nhân giúp đỡ thành công đại sự","rate":"Đại cát"},{"id":"47","name":"Danh lợi đều có thành công tốt đẹp","rate":"Đại cát"},{"id":"48","name":"Cặp cát được cát gặp hung thì hung","rate":"Bình thường"},{"id":"49","name":"Hung cát cùng có, một thành một bại","rate":"Bình thường"},{"id":"50","name":"Một thịnh một suy bập bùn sóng gió","rate":"Bình thường"},{"id":"51","name":"Trời quanh mây tạnh nay được thành công","rate":"Cát"},{"id":"52","name":"Sướng thịnh nửa số cát trước hung sau","rate":"Hung"},{"id":"53","name":"Nổ lực hết mình thành công ích ỏi","rate":"Bình thường"},{"id":"54","name":"Bề ngoài tươi sang ẩn họa sẽ tới","rate":"Hung"},{"id":"55","name":"Ngược lại ý mình, có có thành công","rate":"Đại hung"},{"id":"56","name":"Nổ lực phấn đấu phận tốt quay về","rate":"Cát"},{"id":"57","name":"Bấp bênh nhiều chuyến hung trước tốt sau","rate":"Bình thường"},{"id":"58","name":"Gặp việc do dự khó có thành công","rate":"Hung"},{"id":"59","name":"Mơ mơ hồ hồ khó có định phương hướng","rate":"Bình thường"},{"id":"60","name":"Mây che nửa trăng dấu hiệu phong ba","rate":"Hung"},{"id":"61","name":"Lo nghỉ nhiều điều mọi việc không thành","rate":"Hung"},{"id":"62","name":"Biết hướng nổ lực con đường phồn vinh","rate":"Cát"},{"id":"63","name":"Mười việc chín không mất công mất sức","rate":"Hung"},{"id":"64","name":"Cát vận tự đến, có được thành công","rate":"Cát"},{"id":"65","name":"Nội ngoại bất hòa thiếu thốn tín nhiệm","rate":"Bình thường"},{"id":"66","name":"Mọi việc như ý phú quý tự đến","rate":"Đại cát"},{"id":"67","name":"Nắm được thời cơ, thành công sẽ đến","rate":"Cát"},{"id":"68","name":"Lo trước nghĩ sau thường hay gặp nạn","rate":"Hung"},{"id":"69","name":"Bập bên khó tránh vất vả","rate":"Hung"},{"id":"70","name":"Cát hung đều có chỉ dự chí khí","rate":"Bình thường"},{"id":"71","name":"Được rồi lại mất khó có bình yên","rate":"Hung"},{"id":"72","name":"An lạc tự đến tự nhiên cát tường","rate":"Cát"},{"id":"73","name":"Như là vô mưu khó được thành đạt","rate":"Bình thường"},{"id":"74","name":"Trong lành có hung tiến không bằng lùi","rate":"Bình thường"},{"id":"75","name":"Nhiều điều đại hung, hiện tượng phân tán","rate":"Đại hung"},{"id":"76","name":"Khổ trước sướng sau, không bị thất bại","rate":"Cát"},{"id":"77","name":"Nửa được nửa mất sang mà không thực","rate":"Bình thường"},{"id":"78","name":"Tiền đồ tươi sang trăm đầy hy vọng","rate":"Đại cát"},{"id":"79","name":"Được rồi lại mất lo cũng bằng không","rate":"Hung"},{"id":"80","name":"Số phận cao nhất, sẽ được thành công","rate":"Đại cát"}];

	var inputVal = document.getElementById('inputVal').value;

	if (!inputVal || inputVal.length < 4) {
		alert('Vui lòng nhập 4 số điện thoại');
		
		document.getElementById('phoneNumber').innerHTML = '';
		document.getElementById('numberCalc').innerHTML = '';
		document.getElementById('resultName').innerHTML = '';
		document.getElementById('resultRate').innerHTML = '';
		return;
	}
	
	var input = parseFloat(inputVal) / 80;

	var str = input.toString();

	if (str.indexOf(".") > 0) {
		str = "0" + str.substring(str.indexOf("."));
	}

	var output = parseFloat(str) * 80;
	
	for (var i = 0, leng = dataList.length; i < leng; i++) {
		if (dataList[i].id == output) {
			document.getElementById('phoneNumber').innerHTML = inputVal;
			document.getElementById('numberCalc').innerHTML = dataList[i].id;
			document.getElementById('resultName').innerHTML = dataList[i].name;
			document.getElementById('resultRate').innerHTML = dataList[i].rate;
			
			if (dataList[i].rate == 'Cát' || dataList[i].rate == 'Đại cát') {
				document.getElementById('resultName').style.color = "red";
				document.getElementById('resultRate').style.color = "red";
			}
			
			if (dataList[i].rate == 'Bình thường') {
				document.getElementById('resultName').style.color = "blue";
				document.getElementById('resultRate').style.color = "blue";
			}
			
			if (dataList[i].rate == 'Hung') {
				document.getElementById('resultName').style.color = "black";
				document.getElementById('resultRate').style.color = "black";
			}
			
			break;
		}
	}
}